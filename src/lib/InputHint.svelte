<script lang="ts">
  import { isTouchEnabled } from "./utils";
  import { darkModeClass } from "./dark-mode";

  let { byte }: { byte: string } = $props();
</script>

{#if byte.length < 2}
  <div class={$darkModeClass}>
    {#if isTouchEnabled}
      <p>push the 1 and 0 buttons...</p>
    {:else}
      <p>start typing 1s and 0s...</p>
    {/if}
  </div>
{/if}

<style>
  div {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    padding: 3vw;
    font-size: 4vw;
    background: white;
    color: black;
    border: 0.5rem solid black;
    border-radius: 1vw;
    z-index: 200;
  }
  .dark p {
    background: black;
    color: white;
    border: 0.5rem solid white;
  }
</style>
