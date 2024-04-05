<template>
  <div class="flex flex-col items-center p-4 space-y-4">
    <div class="flex flex-col items-center">
      <div class="mb-4">
        <p v-if="speechStatus === 'listening'" class="text-lg font-bold text-blue-500">Listening...</p>
        <p v-else-if="speechStatus === 'processing'" class="text-lg font-bold text-blue-500">Processing...</p>
        <p v-else-if="speechStatus === 'speechStart'" class="text-lg font-bold text-green-500">Speech started</p>
        <p v-else-if="speechStatus === 'speechEnd'" class="text-lg font-bold text-green-500">Speech ended</p>
        <p v-else-if="speechStatus === 'error'" class="text-lg font-bold text-red-500">Error occurred</p>
      </div>
      <!-- Display ASR results here -->
      <textarea v-model="transcriptionsText" rows="10" cols="50" readonly class="p-2 border border-gray-300 rounded-md resize-none"></textarea>
    </div>
    <button @click="toggleRecording" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      {{ recording ? 'Pause Recording' : 'Start Recording' }}
    </button>
    <button @click="clearTranscriptions" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
      Clear Text
    </button>
  </div>
</template>

<script setup>
import { pipeline, read_audio } from '@xenova/transformers';
import { ref } from 'vue';
import { MicVAD } from "@ricky0123/vad-web";
const transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-tiny');
const speechStatus = ref('');
const transcriptionsText = ref('');
let myvad = null;
let recording = false;

const toggleRecording = async () => {
  if (recording) {
    recording = false;
    stopRecording();
  } else {
    recording = true;
    initializeVAD();
  }
};

const initializeVAD = async () => {
  try {
    speechStatus.value = 'listening';
    myvad = await MicVAD.new({
      onSpeechStart: () => {
        speechStatus.value = 'speechStart';
      },
      onSpeechEnd: async (audio) => {
        console.log("Recorded audio data:", audio);
        speechStatus.value = 'processing';
        setTimeout(async () => {
          speechStatus.value = 'speechEnd';
          const output =  await transcriber(audio);
          transcriptionsText.value += output.text + ' ';
          console.log(output);
        }, 1000);
      },
      workletURL: 'https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.7/dist/vad.worklet.bundle.min.js'
    });
    myvad.start();
  } catch (error) {
    console.error("Error initializing VAD:", error);
    speechStatus.value = 'error';
  }
};

const stopRecording = () => {
  myvad.stop();
  myvad = null;
};

const clearTranscriptions = () => {
  transcriptionsText.value = '';
};
</script>

<style scoped>
.asr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.asr-output {
  margin-bottom: 20px;
}

.start-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-button:hover {
  background-color: #0056b3;
}

.clear-button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clear-button:hover {
  background-color: #bd2130;
}
</style>