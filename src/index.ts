import { loadAttributesScript } from '$utils/fs-attributes';
import { loadModelViewerScript } from '$utils/modal-viewer';
import { appSwiper, loadSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Check if the current page is the home page
  if (window.location.pathname === '/') {
    // Load modalviewser
    loadModelViewerScript()
      .then(() => {
        console.log('Model viewer script loaded successfully');
      })
      .catch((error) => {
        console.error('Error loading model viewer script:', error);
      });
  }

  // Check if the current page is the home page
  if (window.location.pathname === '/') {
    // load Swiper
    loadSwiper()
      .then(() => {
        console.log('Swiper script loaded successfully');
        appSwiper();
      })
      .catch((error) => {
        console.error('Error loading Swiper script:', error);
      });
  }

  // Load Finsweet Attributes scripts
  Promise.all([
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-codehighlight@1/codehighlight.js'
    ),
    loadAttributesScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js'),
  ])
    .then(() => {
      console.log('All Finsweet Attributes scripts loaded');
    })
    .catch((error) => {
      console.error(error);
    });

  // Avoid duplicate categories filters - From body global
  setTimeout(function () {
    const rr = new Set();
    for (const div of document.querySelectorAll('.checkbox-filter')) {
      if (rr.has(div.textContent.trim())) {
        div.parentNode.removeChild(div);
      }
      rr.add(div.textContent.trim());
    }
  }, 0);
});
