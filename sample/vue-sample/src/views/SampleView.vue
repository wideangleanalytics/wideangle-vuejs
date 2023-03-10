<template>
  <main>
    <p>I am sample</p>
    <button @click="sendEvent()">Send Event</button>
    {{  status }}
  </main>
</template>

<script setup>
import { inject, ref } from 'vue'
const waa = inject('waa');
const status = ref('idle');

const sendEvent = async () => {
  const params = {
    session: 'cjhw92nf9aq',
    cohort: 'c1233'
  }
  console.log(`Sending event: ${JSON.stringify(params)}`);
  status.value = 'pending...'
  await waa.dispatchEvent('interest', params);
  status.value = 'sent'
}
</script>


<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
}
</style>
