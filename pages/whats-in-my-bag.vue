<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="What's in my bag?"
      :description="description"
    />
    <input type="text" v-model="searchText" class="p-2 mb-4" placeholder="Search...">
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="Hardware" />
        <AppUsesItem v-for="(item, id) in filteredHardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Software" />
        <AppUsesItem v-for="(item, id) in filteredSoftware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Desk" />
        <AppUsesItem v-for="(item, id) in filteredDesk" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Other" />
        <AppUsesItem v-for="(item, id) in filteredOther" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "Software I use, gadgets I love, and other things I recommend. Here’s a big list of all of my favorite stuff.";
useSeoMeta({
  title: "Things I use | Sunil Regmi",
  description,
});
const { data: items } = await useAsyncData("uses", () =>
  queryContent("/uses").find()
);
const hardware = items.value.filter((item) => item.category === "hardware");
const software = items.value.filter((item) => item.category === "software");
const desk = items.value.filter((item) => item.category === "desk");
const other = items.value.filter((item) => item.category === "others");

// Reactive variable for search text
let searchText = ref('');

// Method to filter items based on search text
const filterItems = (items) => {
  return items.filter(item =>
    item.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
};

// Computed properties for filtered items
const filteredHardware = computed(() => filterItems(hardware));
const filteredSoftware = computed(() => filterItems(software));
const filteredDesk = computed(() => filterItems(desk));
const filteredOther = computed(() => filterItems(other));
</script>
