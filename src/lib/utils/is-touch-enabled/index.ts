import { writable } from "svelte/store";

let isTouchEnabled = writable(function () {
  const isEnabled = !!window.ontouchstart ||
    navigator.maxTouchPoints > 0;

  if (isEnabled) { // if touch is enabled, add an event listener to set it to false on keypress
    window.addEventListener("keypress", () => {
      isTouchEnabled.update(() => false);
    }, { once: true }); // only set to false once a key is pressed
  }

  return isEnabled;
}());

export default isTouchEnabled;
