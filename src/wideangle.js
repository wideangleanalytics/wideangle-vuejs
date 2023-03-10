function getScriptLink(settings) {
  return `https://${settings.domain}/script/${settings.siteId}.js`;
}

function loadScript(settings) {
  return new Promise(function(resolve, failure) {
    const script = document.createElement('script');
    script.src = getScriptLink(settings);
    script.dataset.waaLateInit = true;
    script.async = true;
    script.onload = resolve;
    script.onerror = failure;
    document.head.appendChild(script);
  });
}

async function initWideAngle(settings) {
  if(document === undefined) {
    throw Error("Wide Angle Analytics Plugin can be only used in the Browser");
  }
  try {
    await loadScript(settings);
    return waaCreate(settings);
  } catch (e) {
    console.error(`Failed to load Wide Angle script from ${getScriptLink(settings)}`)
    throw e;
  }
}


export { initWideAngle }
