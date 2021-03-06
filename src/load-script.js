/**
 * @desc loadScript() loads a script and fires callback
 *
 * @param {String} url - url of script to load
 * @param {Function} optCallback - optional callback to fire on load
 *
 * @return {undefined}
 */

function loadScript(url, optCallback) {
  'use strict';
  const ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = url;
  if (typeof optCallback === 'function') {
    ga.onload = optCallback;
  }
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
}

export default loadScript;
