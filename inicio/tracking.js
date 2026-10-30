(() => {
  if (window.__proteinShakesUtmifyLoaded) return;
  window.__proteinShakesUtmifyLoaded = true;
  window.pixelId = "6ad940bb506346904dbb45fd";
  const addScript = (src, attributes = {}) => {
    if (Array.from(document.scripts).some(script => script.src === src)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value));
    document.head.appendChild(script);
  };
  addScript("https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  addScript("https://cdn.utmify.com.br/scripts/utms/latest.js", {"data-utmify-prevent-subids": ""});
})();
