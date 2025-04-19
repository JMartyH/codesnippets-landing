<template>
    <div class="feature-card p-6 bg-white rounded-lg shadow-md text-center md:text-left">
      <Icon :name="icon" class="text-blue-600 text-4xl mb-4 mx-auto md:mx-0" />
  
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
  
      <p class="text-slate-600">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  // Define props to accept data from the parent component
  defineProps({
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  </style>