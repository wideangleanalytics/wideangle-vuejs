import { initWideAngle } from "./src";
import { ref } from 'vue';

export default {
  install: async (app, options) => {
    const waaRef = ref()
    app.provide('waa', waaRef);         
    initWideAngle(options)
      .then(waa => { 
        waaRef.value = waa;
        console.debug("[WAA] Wide Angle Analytics instance available");
      })
      .catch(e => { console.error("Failed to load Wide Angle Plugin", e)});
  }
}
