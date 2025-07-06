<script lang="ts">
  import BinaryDisplay from "./lib/BinaryDisplay.svelte";
  import HexDecimalDisplay from "./lib/HexDecimalDisplay.svelte";
  import { Toggler as DarkModeToggle } from "./lib/dark-mode/toggler";
  import { darkModeClass } from "./lib/dark-mode";
  import InputHint from "./lib/InputHint.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";

  const addToByte = (key: string) => {
    if (key !== "1" && key !== "0") {
      return;
    }

    if (byte.length > 7) {
      byte = byte.substring(1, 8);
    }

    byte += key;
  };

  const handleWindowInput = (e: KeyboardEvent) => {
    addToByte(e.key);
  };

  let byte = $state("0");

  let bits = $derived(byte.padStart(8, "0").split(""));
  let decimal = $derived(Number.parseInt(byte, 2) || 0);
  let hex = $derived(
    Number.parseInt(byte, 2).toString(16).toUpperCase(),
  );
</script>

<svelte:window on:keydown={handleWindowInput} />

<InputHint {byte} />
<main class={$darkModeClass}>
  <Header>
    <DarkModeToggle />
  </Header>
  <BinaryDisplay {bits} />
  <HexDecimalDisplay {hex} {decimal} />
  <Footer {addToByte} />
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(html) {
    font-size: 10px;
  }
  :global(body) {
    max-width: 100svw;
    min-height: 100svh;
    font-size: 1.8rem;
    position: relative;
    color: black;
    padding: 0;
    margin: 0;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    user-select: none;
  }
  :global(*) {
    position: inherit;
  }
  :global(div#app) {
    max-width: 100svw;
    min-height: 100svh;
  }
  :global(button) {
    padding: 0;
    margin: 0;
    color: inherit;
    background: inherit;
    outline: none;
    border: none;
  }
  main {
    max-width: 100svw;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    grid-template-rows: auto auto auto 1fr;
  }
  main.dark {
    background: black;
    color: white;
  }
</style>
