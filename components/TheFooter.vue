<template>
    <footer class="bg-slate-800 text-slate-400 py-6 px-4 text-center text-sm">
      <p>&copy; {{ currentYear }} CodeSnippets Pro. All rights reserved.</p>
      </footer>
  </template>
  
  <script setup>
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  </script>