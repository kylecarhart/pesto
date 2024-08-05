<script lang="ts">
	import Calculator from "$lib/components/Calculator.svelte";
	import Github from "$lib/icons/github.svelte";

	export let data;
</script>

<div
	class="sm:bg-slate-50 flex flex-col sm:items-center sm:justify-center sm:min-h-screen relative"
>
	<Calculator formData={data.form} />
	<a
		class="block m-5 self-center sm:absolute sm:bottom-5 sm:right-5"
		href="https://www.github.com/kylecarhart/pesto"
	>
		<Github />
	</a>
</div>
