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

  // src/utils/swiper.ts
  function loadSwiper() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load swiper script"));
      document.head.appendChild(script);
    });
  }
  function appSwiper() {
    $(".swiper_component.is-show").each(function(index) {
      let loopMode = false;
      if ($(this).attr("loop-mode") === "true") {
        loopMode = true;
      }
      let sliderDuration = 300;
      if ($(this).attr("slider-duration") !== void 0) {
        sliderDuration = +$(this).attr("slider-duration");
      }
      const swiper = new Swiper($(this).find(".swiper.is-show")[0], {
        speed: sliderDuration,
        loop: loopMode,
        autoHeight: false,
        centeredSlides: loopMode,
        followFinger: true,
        freeMode: true,
        slideToClickedSlide: true,
        slidesPerView: 1,
        spaceBetween: "4%",
        rewind: false,
        mousewheel: {
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1,
            spaceBetween: "4%"
          },
          // tablet
          768: {
            slidesPerView: 1,
            spaceBetween: "4%"
          },
          // desktop
          992: {
            slidesPerView: 3.5,
            spaceBetween: "2%"
          }
        },
        scrollbar: {
          el: $(this).find(".swiper-drag-wrapper")[0],
          draggable: true,
          dragClass: "swiper-drag",
          snapOnRelease: true
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
    $(".swiper_component.is-article").each(function(index) {
      let loopMode = false;
      if ($(this).attr("loop-mode") === "true") {
        loopMode = true;
      }
      let sliderDuration = 300;
      if ($(this).attr("slider-duration") !== void 0) {
        sliderDuration = +$(this).attr("slider-duration");
      }
      const swiper = new Swiper($(this).find(".swiper.is-article")[0], {
        speed: sliderDuration,
        loop: loopMode,
        autoHeight: false,
        centeredSlides: loopMode,
        followFinger: true,
        freeMode: true,
        slideToClickedSlide: true,
        slidesPerView: 1,
        spaceBetween: "4%",
        rewind: false,
        mousewheel: {
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1,
            spaceBetween: "4%"
          },
          // tablet
          768: {
            slidesPerView: 1,
            spaceBetween: "4%"
          },
          // desktop
          992: {
            slidesPerView: 1.5,
            spaceBetween: "2%"
          }
        },
        scrollbar: {
          el: $(this).find(".swiper-drag-wrapper.is-article")[0],
          draggable: true,
          dragClass: "swiper-drag",
          snapOnRelease: true
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
    $(".swiper_component.is-event").each(function(index) {
      let loopMode = false;
      if ($(this).attr("loop-mode") === "true") {
        loopMode = true;
      }
      let sliderDuration = 300;
      if ($(this).attr("slider-duration") !== void 0) {
        sliderDuration = +$(this).attr("slider-duration");
      }
      const swiper = new Swiper($(this).find(".swiper.is-event")[0], {
        speed: sliderDuration,
        loop: loopMode,
        autoHeight: false,
        centeredSlides: loopMode,
        followFinger: true,
        freeMode: true,
        slideToClickedSlide: true,
        slidesPerView: 1,
        spaceBetween: "4%",
        rewind: false,
        mousewheel: {
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1,
            spaceBetween: "4%"
          },
          // tablet
          768: {
            slidesPerView: 1,
            spaceBetween: "4%"
          },
          // desktop
          992: {
            slidesPerView: 1.2,
            spaceBetween: "2%"
          }
        },
        scrollbar: {
          el: $(this).find(".swiper-drag-wrapper.is-event")[0],
          draggable: true,
          dragClass: "swiper-drag",
          snapOnRelease: true
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
    $(".swiper_component.is-toolbox").each(function(index) {
      let loopMode = false;
      if ($(this).attr("loop-mode") === "true") {
        loopMode = true;
      }
      let sliderDuration = 300;
      if ($(this).attr("slider-duration") !== void 0) {
        sliderDuration = +$(this).attr("slider-duration");
      }
      const swiper = new Swiper($(this).find(".swiper.is-toolbox")[0], {
        speed: sliderDuration,
        loop: loopMode,
        autoHeight: false,
        centeredSlides: loopMode,
        followFinger: true,
        freeMode: true,
        slideToClickedSlide: true,
        slidesPerView: 1,
        spaceBetween: "4%",
        rewind: false,
        mousewheel: {
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 2,
            spaceBetween: "4%"
          },
          // tablet
          768: {
            slidesPerView: 2,
            spaceBetween: "4%"
          },
          // desktop
          992: {
            slidesPerView: 4,
            spaceBetween: "2%"
          }
        },
        scrollbar: {
          el: $(this).find(".swiper-drag-wrapper.is-toolbox")[0],
          draggable: true,
          dragClass: "swiper-drag",
          snapOnRelease: true
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
  }

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    if (window.location.pathname === "/") {
      loadModelViewerScript().then(() => {
        console.log("Model viewer script loaded successfully");
      }).catch((error) => {
        console.error("Error loading model viewer script:", error);
      });
    }
    if (window.location.pathname === "/") {
      loadSwiper().then(() => {
        console.log("Swiper script loaded successfully");
        appSwiper();
      }).catch((error) => {
        console.error("Error loading Swiper script:", error);
      });
    }
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
