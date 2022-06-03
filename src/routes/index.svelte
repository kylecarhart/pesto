<script lang="ts">
  import Calculator from "../components/Calculator.svelte";
  import Github from "../icons/github.svelte";
</script>

<div class="bg-slate-50 sm:flex sm:items-center sm:justify-center sm:h-screen">
  <Calculator />
</div>
<a
  class="hidden sm:block sm:absolute sm:bottom-5 sm:right-5"
  href="https://www.github.com/kylecarhart"
>
  <Github />
</a>
