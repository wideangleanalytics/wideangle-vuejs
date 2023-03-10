import { initWideAngle } from "./src";

export default {
  install: (app, options) => {
    initWideAngle(options)
      .then(waa => { app.provide('waa', waa); })
      .catch(e => { console.error("Failed to load Wide Angle Plugin", e)});
  }
}
