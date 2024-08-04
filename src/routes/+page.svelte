<script lang="ts">
	import Calculator from '$lib/components/Calculator.svelte';
	import Github from '$lib/icons/github.svelte';
</script>

<div class="bg-slate-50 sm:flex sm:items-center sm:justify-center sm:min-h-screen relative">
	<Calculator />
	<a
		class="hidden sm:block sm:absolute sm:bottom-5 sm:right-5"
		href="https://www.github.com/kylecarhart"
	>
		<Github />
	</a>
</div>
