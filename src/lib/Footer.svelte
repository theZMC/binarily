<script lang="ts">
  import { darkModeClass } from "./dark-mode";
  import { isTouchEnabled } from "./utils";

  const { addToByte }: {
    addToByte: (key: string) => void;
  } = $props();
</script>

<footer class={$darkModeClass}>
  {#if $isTouchEnabled}
    <p>
      <button class="add-touch" ontouchstart={() => addToByte("1")}>1</button>
      <button class="add-touch" ontouchstart={() => addToByte("0")}>0</button>
    </p>
  {/if}
  <p class="created-by">Created by <a href="https://zmc.dev/">Zach</a></p>
</footer>

<style>
  footer {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: 1fr auto;
    margin-top: auto;
  }

  p:first-of-type {
    display: flex;
    justify-items: center;
    padding: 0 5vw;
    gap: 10vw;
    align-self: flex-end;
  }

  button.add-touch {
    font-family: "Share Tech Mono", "Courier New", Courier, monospace;
    flex: 1;
    font-size: 10vw;
    padding: 10vw;
    border: 1vw solid black;
    border-radius: 2vw;
    touch-action: manipulation;
  }

  footer.dark button.add-touch {
    border: 1vw solid white;
  }

  button.add-touch:active {
    background-color: black;
    color: white;
  }

  footer.dark button.add-touch:active {
    background-color: white;
    color: black;
  }

  p.created-by {
    display: block;
    align-self: flex-end;
    text-align: center;
    text-transform: uppercase;
  }

  a {
    color: #00000099;
  }
  footer.dark a {
    color: #ffffff99;
  }
</style>
