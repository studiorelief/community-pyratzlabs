import { loadAttributesScript } from '$utils/fs-attributes';
import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);

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
  ])
    .then(() => {
      console.log('All Finsweet Attributes scripts loaded');
      // Your code that depends on the Finsweet Attributes scripts can go here
    })
    .catch((error) => {
      console.error(error);
    });

  // Avoid duplicate categories filters - From body global
  document.addEventListener('DOMContentLoaded', function dumpDups() {
    const rr = new Set();
    for (const div of document.querySelectorAll('.checkbox-filter')) {
      if (rr.has(div.textContent.trim())) {
        div.parentNode.removeChild(div);
      }
      rr.add(div.textContent.trim());
    }

    dumpDups();
  });
});
