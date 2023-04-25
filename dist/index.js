"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/fs-attributes.ts
  function loadAttributesScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });
  }
  loadAttributesScript(
    "https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js"
  );
  loadAttributesScript("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js");
  loadAttributesScript(
    "https://cdn.jsdelivr.net/npm/@finsweet/attributes-codehighlight@1/codehighlight.js"
  );
  loadAttributesScript("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js");

  // node_modules/.pnpm/@finsweet+ts-utils@0.39.1/node_modules/@finsweet/ts-utils/dist/webflow/getPublishDate.js
  var getPublishDate = (page = document) => {
    const publishDatePrefix = "Last Published:";
    for (const node of page.childNodes) {
      if (node.nodeType === Node.COMMENT_NODE && node.textContent?.includes(publishDatePrefix)) {
        const publishDateValue = node.textContent.trim().split(publishDatePrefix)[1];
        if (publishDateValue)
          return new Date(publishDateValue);
      }
    }
  };

  // src/utils/greet.ts
  var greetUser = (name) => {
    const publishDate = getPublishDate();
    console.log(`Hello ${name}!`);
    console.log(
      `This site was last published on ${publishDate?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      })}.`
    );
  };

  // src/utils/modal-viewer.ts
  function loadModelViewerScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load model-viewer script"));
      document.head.appendChild(script);
    });
  }

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const name = "John Doe";
    greetUser(name);
    loadModelViewerScript().then(() => {
      console.log("Model viewer script loaded successfully");
    }).catch((error) => {
      console.error("Error loading model viewer script:", error);
    });
    Promise.all([
      loadAttributesScript(
        "https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js"
      ),
      loadAttributesScript(
        "https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"
      ),
      loadAttributesScript(
        "https://cdn.jsdelivr.net/npm/@finsweet/attributes-codehighlight@1/codehighlight.js"
      ),
      loadAttributesScript("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js")
    ]).then(() => {
      console.log("All Finsweet Attributes scripts loaded");
    }).catch((error) => {
      console.error(error);
    });
    setTimeout(function() {
      const rr = /* @__PURE__ */ new Set();
      for (const div of document.querySelectorAll(".checkbox-filter")) {
        if (rr.has(div.textContent.trim())) {
          div.parentNode.removeChild(div);
        }
        rr.add(div.textContent.trim());
      }
    }, 0);
  });
})();
//# sourceMappingURL=index.js.map
