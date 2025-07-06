import { derived, writable } from "svelte/store";

const getDarkModePreference = () => {
  if (document.cookie) {
    const darkModeCookie = document.cookie.split(";")
      .find((row) => row.startsWith("darkMode="));
    if (!darkModeCookie) {
      return undefined;
    }
    return darkModeCookie.split("=")[1];
  }
};

const isDarkModePreferred = () => {
  let darkModeCookie = getDarkModePreference();

  if (darkModeCookie !== undefined) {
    return darkModeCookie === "true";
  }

  return !(
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ); // default to dark mode
};

export const isDarkMode = writable(isDarkModePreferred());

export const toggleDarkMode = () => {
  isDarkMode.update((isDarkMode) => {
    const opposite = !isDarkMode;
    document.cookie = `darkMode=${opposite}`;
    return opposite;
  });
};

export const darkModeClass = derived(
  isDarkMode,
  (isDarkMode) => isDarkMode ? "dark" : "",
);
