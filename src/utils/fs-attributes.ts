function loadAttributesScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

// Load Finsweet Attributes scripts
loadAttributesScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js');
loadAttributesScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js');
loadAttributesScript(
  'https://cdn.jsdelivr.net/npm/@finsweet/attributes-codehighlight@1/codehighlight.js'
);
loadAttributesScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-copyclip@1/copyclip.js');

export { loadAttributesScript };
