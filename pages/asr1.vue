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

  
  <script>
  import { MicVAD } from "@ricky0123/vad-web";
  export default {
    name: "ASRStreaming",
    data() {
      return {
        speechStatus: "",
        transcriptions: null,
        transcriptionsText: "",
        myvad: null,
        recording: false, // Variable to track recording status
        recordedSpeech: null, // Variable to store recorded speech data
        websocket: null,
        connected: false,
      };
    },
    computed: {
      displayText() {   
        return this.transcriptionsText || "Loading...";
      }
    },
    methods: {
      connectWebSocket() {
        if (!this.websocket) {
          // Only connect if WebSocket is not already connected
          this.websocket = new WebSocket("ws://localhost:8000/audio");
  
          this.websocket.onopen = () => {
            console.log("WebSocket connection established");
            this.connected = true;
          };
  
          this.websocket.onmessage = (event) => {
            console.log("Message received:", event.data);
            this.transcriptionsText += event.data + " ";
            console.log(this.transcriptions);
            // Handle received messages here
          };
  
          this.websocket.onclose = () => {
            console.log("WebSocket connection closed");
            this.connected = false;
          };
  
          this.websocket.onerror = (error) => {
            console.error("WebSocket error:", error);
            this.connected = false;
          };
        }
      },
      async toggleRecording() {
        if (this.recording) {
          // If recording, stop recording and VAD
          this.recording = false;
          this.stopRecording();
        } else {
          // If not recording, start recording and VAD
          this.recording = true;
          this.initializeVAD();
          this.connectWebSocket();
        }
      },
      async initializeVAD() {
        try {
          this.speechStatus = "listening";
          this.transcriptions = [];
          this.recordedSpeech = null; // Reset recorded speech
          this.myvad = await MicVAD.new({
            onSpeechStart: () => {
              this.speechStatus = "speechStart";
            },
            onSpeechEnd: (audio) => {
              console.log("Recorded audio data:", audio);
              this.speechStatus = "processing";
              // Simulate processing delay
              setTimeout(() => {
                
                this.speechStatus = "speechEnd";
                
                // Convert audio data to ArrayBuffer
                const audioData = new Uint8Array(audio.buffer);
                
                // Send recorded audio data to websocket if websocket exists
                if (this.websocket && audioData!=null) {
                  this.websocket.send(audioData);
                  console.log("sent wav data");
                } else {
                  console.error("WebSocket is not initialized.");
                }
              }, 2000);
            },
            workletURL: 'https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.7/dist/vad.worklet.bundle.min.js' // Specify the correct path to the worklet file
          });
          this.myvad.start();
        } catch (error) {
          console.error("Error initializing VAD:", error);
          this.speechStatus = "error";
        }
      },
  
      stopRecording() {
        this.myvad.stop;
        this.myvad = null;
        if (this.websocket) {
          this.websocket.close();
          this.websocket = null;
        }
      },
      processAudio(audio) {
        
        // Concatenate all transcriptions into a single string
        return this.transcriptions
      },
      stopWebSocket() {
        
      },
    }
  };
  </script>
  
  <style scoped>
  .asr-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
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