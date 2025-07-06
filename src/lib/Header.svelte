<script lang="ts">
  import type { Snippet } from "svelte";
  import { darkModeClass } from "./dark-mode";

  let { children }: { children?: Snippet } = $props();
</script>

<header class={$darkModeClass}>
  <aside>
    <h1>binari.ly</h1>
    <h2>The binary conversion visualizer</h2>
  </aside>
  {@render children?.()}
</header>

<style>
  header {
    font-family:
      "Saira Condensed", Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    display: flex;
    justify-self: center;
    align-items: center;
    font-size: 2vw;
    padding: 0 2vw;
    justify-content: flex-end;
    border-bottom: 1px solid #00000029;
  }
  header.dark {
    border-bottom: 1px solid #ffffff44;
  }
  h1 {
    font-weight: 800;
    font-size: 5rem;
    margin: 0;
    padding: 0;
    margin-left: 1rem;
  }
  h2 {
    text-transform: lowercase;
    color: #00000099;
    font-size: 2rem;
    margin: 0;
    margin-left: 1rem;
    margin-top: -1rem;
    margin-bottom: 1.5rem;
  }
  .dark h2 {
    color: #ffffffbb;
  }
  aside {
    margin-right: auto;
  }
</style>
