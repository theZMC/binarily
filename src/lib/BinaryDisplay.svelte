<script lang="ts">
  import { darkModeClass } from "./dark-mode";

  let { bits }: { bits: string[] } = $props();
</script>

<article class={$darkModeClass}>
  <section>
    <h2>Binary</h2>
    <div>
      {#each bits as bit, i}
        <p>
          <span>{bit}</span>
          <span class={bit === "0" ? "inactive" : "active"}>
            {Math.pow(2, bits.length - (i + 1))}
          </span>
        </p>
      {/each}
    </div>
  </section>
</article>

<style>
  article {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }

  section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-inline: 2vw;
    width: 100%;
    flex: 1;
  }

  h2 {
    text-transform: uppercase;
    align-self: center;
    justify-content: space-between;
    font-weight: 200;
    text-align: right;
    font-size: 3vw;
    margin: 0;
    margin-right: auto;
    writing-mode: vertical-lr;
    text-orientation: mixed;
  }

  div {
    display: flex;
    padding-bottom: 3vw;
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    gap: 0;
  }

  span {
    font-family: "Share Tech Mono", "Courier New", Courier, monospace;
    font-size: 20vw;
  }

  span:last-child {
    font-size: 5vw;
    height: auto;
  }

  span.inactive {
    color: #00000055;
  }

  article.dark span.inactive {
    color: #ffffffbb;
  }

  article span.active {
    color: white;
    background: black;
  }

  article.dark span.active {
    color: black;
    background: white;
  }
</style>
