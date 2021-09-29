<script lang="ts">
  const addToBinary = (input: string) => {
    if (input === '1' || input === '0') {
      if (binary.length > 7) {
        binary = binary.substring(1, 8);
      }
      binary += input;
    }
  };
  const handleWindowInput = (e: KeyboardEvent) => {
    addToBinary(e.key);
  };
  const isDarkModeEnabled = () => {
    let darkModeCookie = getDarkModeCookie();
    if (darkModeCookie !== undefined) {
      return darkModeCookie === 'true';
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      return false;
    } else {
      return true;
    }
  };
  const getDarkModeCookie = () => {
    if (document.cookie) {
      return document.cookie
        .split(';')
        .find((row) => row.startsWith('darkMode='))
        .split('=')[1];
    }
  };
  const handleDarkModeToggle = () => {
    isDarkMode = !isDarkMode;
    document.cookie = `darkMode=${isDarkMode}`;
  };

  let hex: string;
  let decimal: number;
  let binary: string = '0';
  let binaryChars: string[];
  let isDarkMode = isDarkModeEnabled();
  let isTouchEnabled = window.ontouchstart || navigator.maxTouchPoints > 0;

  $: binaryChars = binary.split('');
  $: decimal = Number.parseInt(binary, 2) || 0;
  $: hex = Number.parseInt(binary, 2).toString(16).toUpperCase();
</script>

<svelte:window on:keydown={handleWindowInput} />
{#if binary.length < 2}
  <div class="hint {isDarkMode ? 'dark' : ''}">
    {#if isTouchEnabled}
      <p>just push the 1 and 0 buttons...</p>
    {:else}
      <p>just start typing 1s and 0s...</p>
    {/if}
  </div>
{/if}
<main class={isDarkMode ? 'dark' : ''}>
  <header>
    <aside>
      <h1>binari.ly</h1>
      <h3>The binary conversion visualizer</h3>
    </aside>
    <span on:click={handleDarkModeToggle}>
      {#if isDarkMode}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          />
        </svg>
      {/if}
    </span>
  </header>
  <article>
    <section>
      <h2>Binary</h2>
      {#each binaryChars as char, i}
        <p>
          <span>{char}</span>
          <span class={char === '0' ? 'inactive' : 'active'}>
            {Math.pow(2, binaryChars.length - (i + 1))}
          </span>
        </p>
      {/each}
    </section>
  </article>
  <article>
    <section>
      <h2>Hex</h2>
      <p>{hex === 'NAN' ? '0' : hex}</p>
    </section>
    <section>
      <h2>Decimal</h2>
      <p>{decimal}</p>
    </section>
  </article>
  <footer>
    {#if isTouchEnabled}
      <p>
        <span on:click={() => addToBinary('1')}> 1 </span>
        <span on:click={() => addToBinary('0')}> 0 </span>
      </p>
    {/if}
    <p>Created by <a href="https://zmc.dev/">Zach</a></p>
  </footer>
</main>

<style>
  :global(html) {
    font-size: 10px;
    box-sizing: border-box;
  }
  :global(body) {
    font-size: 1.8rem;
    position: relative;
    color: black;
    padding: 0;
    font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;
    font-weight: 400;
    user-select: none;
  }
  :global(*) {
    position: inherit;
  }
  div.hint {
    position: absolute;
    width: 100vw;
    height: 100vh;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.hint > p {
    padding: 3vw;
    font-size: 4vw;
    background: #000000aa;
    border-radius: 1vw;
    z-index: 200;
  }
  div.hint.dark > p {
    background: #ffffff88;
    color: black;
  }
  main {
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    width: 100vw;
    height: 100vh;
  }
  main.dark {
    background: black;
    color: white;
  }
  header {
    font-family: 'Saira Condensed', Impact, Haettenschweiler,
      'Arial Narrow Bold', sans-serif;
    display: flex;
    justify-self: center;
    align-items: center;
    width: 90vw;
    font-size: 2vw;
    padding: 0 5vw;
    justify-content: flex-end;
    border-bottom: 1px solid #00000029;
  }
  main.dark header {
    border-bottom: 1px solid #ffffff44;
  }
  header > span {
    position: absolute;
    top: 2rem;
    right: 7vw;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
  }
  h1 {
    font-weight: 800;
    font-size: 5rem;
    margin: 0;
    padding: 0;
    margin-left: 1rem;
  }
  h3 {
    text-transform: lowercase;
    color: #00000099;
    font-size: 2rem;
    margin: 0;
    margin-left: 1rem;
    margin-top: -1rem;
    margin-bottom: 1.5rem;
  }
  main.dark h3 {
    color: #ffffffbb;
  }
  aside {
    margin-right: auto;
  }
  article:first-of-type > section > h2 {
    text-transform: uppercase;
    font-weight: 200;
    text-align: right;
    font-size: 3vw;
    margin: 0;
    transform: rotate(90deg);
    transform-origin: 0 0;
    position: absolute;
    top: 1vw;
    left: 3vw;
  }
  article:first-of-type {
    display: flex;
    align-items: flex-end;
    padding: 0 5vw;
    flex-direction: column;
  }
  article:first-of-type > section {
    display: flex;
    justify-content: flex-end;
    width: 90vw;
    padding-bottom: 2vw;
  }
  article:first-of-type > section > p {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin: 0;
    margin-top: -2vw;
  }
  article:first-of-type > section > p > span {
    font-family: 'Share Tech Mono', 'Courier New', Courier, monospace;
    font-size: 20vw;
    height: 19vw;
  }
  article:first-of-type > section > p > span:last-child {
    font-size: 5vw;
    height: auto;
  }
  article:first-of-type > section > p > span.inactive {
    color: #00000055;
  }
  main.dark article:first-of-type > section > p > span.inactive {
    color: #ffffffbb;
  }
  article:first-of-type > section > p > span.active {
    color: white;
    background: black;
  }
  main.dark article:first-of-type > section > p > span.active {
    color: black;
    background: white;
  }
  article:last-of-type {
    display: flex;
    flex-direction: row;
  }
  article:last-of-type > section {
    border-top: 1px solid #00000029;
    display: grid;
    grid-template-columns: 1fr;
    flex: 1;
  }
  main.dark article:last-of-type > section {
    border-top: 1px solid #ffffff44;
  }
  article:last-of-type > section:last-of-type {
    border-left: 1px solid #00000029;
  }
  main.dark article:last-of-type > section:last-of-type {
    border-left: 1px solid #ffffff44;
  }
  article:last-of-type > section > h2 {
    text-transform: uppercase;
    position: absolute;
    top: 1vw;
    left: 4vw;
    font-weight: 200;
    font-size: 3vw;
    margin: 0;
    transform: rotate(90deg);
    transform-origin: 0 0;
  }
  article:last-of-type > section:first-of-type > h2 {
    left: 8vw;
  }
  article:last-of-type > section > p {
    font-family: 'Share Tech Mono', 'Courier New', Courier, monospace;
    text-align: right;
    font-size: 19vw;
    height: 19vw;
    margin: 0;
    margin-top: -2vw;
  }
  article:last-of-type > section:last-of-type > p {
    margin-right: 5vw;
  }
  footer {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: 1fr auto;
  }
  footer > p:first-of-type {
    display: flex;
    justify-items: center;
    padding: 0 5vw;
    gap: 10vw;
    align-self: flex-end;
  }
  footer > p > span {
    font-family: 'Share Tech Mono', 'Courier New', Courier, monospace;
    flex: 1;
    font-size: 10vw;
    padding: 10vw;
    border: 1vw solid black;
    border-radius: 2vw;
    touch-action: manipulation;
  }
  main.dark footer > p > span {
    border: 1vw solid white;
  }
  footer > p > span:active {
    background-color: black;
    color: white;
  }
  main.dark footer > p > span:active {
    background-color: white;
    color: black;
  }
  footer > p:last-of-type {
    display: block;
    align-self: flex-end;
    text-align: center;
    text-transform: uppercase;
  }
  a {
    color: #00000099;
  }
  main.dark a {
    color: #ffffff99;
  }
</style>
