import { initWideAngle } from "./dist";
import { ref } from 'vue';

export { initWideAngle } from "./dist";
export default {
  install: (app, options) => {
    const waaRef = ref()
    app.provide('waa', waaRef);
    initWideAngle(options)
      .then(waa => {
        waaRef.value = waa;
        console.debug("[WAA] Wide Angle Analytics instance available");
      }).catch(e => { console.error("[WAA] Failed to load Wide Angle Plugin", e)});
    return waaRef;
  }
}
