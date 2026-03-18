<script setup>
import { ref, onMounted, onUnmounted } from "vue"
const Text = "Student Request For there own or Firend "
const Textdisplay = ref()
let i = 0
let timer

onMounted(() => {
  timer = setInterval(() => {
    if (i < Text.length) {
      Textdisplay.value += Text[i]
      i++
    } else {
      Textdisplay.value = ""
      i = 0
    }
  }, 200)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="body">
    <p class="text-xl font-semibold text-gray-700">
      {{Text}}
      <span class="animate-pulse">|</span>
    </p>
  </div>
</template>
