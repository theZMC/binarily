<script lang="ts">
  import { darkModeClass } from "./dark-mode";
  let { hex, decimal }: {
    hex: string;
    decimal: number;
  } = $props();
</script>

<article class={$darkModeClass}>
  <section>
    <h2>Hexadecimal</h2>
    <p>{hex ? hex : "0"}</p>
  </section>
  <section>
    <h2>Decimal</h2>
    <p>{decimal}</p>
  </section>
</article>

<style>
  article {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #00000029;
  }
  article.dark {
    border-bottom: 1px solid #ffffff44;
  }
  section {
    border-top: 1px solid #00000029;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 2vw;
    flex: 1;
  }
  section {
    border-left: 1px solid #00000029;
  }
  article.dark section {
    border-top: 1px solid #ffffff44;
  }
  article.dark section {
    border-left: 1px solid #ffffff44;
  }
  section:first-of-type {
    border-left: none;
  }
  article.dark section:first-of-type {
    border-left: none;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 3vw;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
  p {
    font-family: "Share Tech Mono", "Courier New", Courier, monospace;
    text-align: right;
    font-size: 19vw;
    margin: 0;
  }
</style>
