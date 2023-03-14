<template>
  <main>
    <p>Demostration of using Click and Custom Actions on Vue Components</p>
    <button type="click" @click="sendEvent()">Send Event</button>    
    {{  status }}
    <EmbeddedButton data-waa-click="component-click" data-waa-name="embedded-button"/>
  </main>
</template>

<script setup>
import EmbeddedButton from '../components/EmbeddedButton.vue'
import { inject, ref } from 'vue'

const waa = inject('waa');
const status = ref('idle');

const sendEvent = async () => {
  const params = {
    session: 'cjhw92nf9aq',
    cohort: 'c1233'
  }
  console.log(`Sending event: ${JSON.stringify(params)}`);  
  status.value = 'pending...';  
  await waa.value.dispatchEvent('interest', params);
  status.value = 'sent'
}
</script>


<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
}
</style>
