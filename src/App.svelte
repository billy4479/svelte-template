<script lang="ts">
  import Greeter from './greeter.svelte';

  let counter = 0;

  function handleClick() {
    counter++;
  }
</script>

<Greeter who="world" />

<button
  on:click={handleClick}
  class="bg-red rounded border border-black p-2 m-10"
  >Button clicked {counter} times</button
>

<style>
</style>
