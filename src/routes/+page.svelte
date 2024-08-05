<script lang="ts">
	import Calculator from "$lib/components/Calculator.svelte";
	import Github from "$lib/icons/github.svelte";

	export let data;
</script>

<div
	class="flex flex-col sm:items-center sm:justify-center sm:min-h-screen relative bg-[rgba(255,255,255,0.70)] bg-floral-pattern bg-blend-overlay min-h-screen"
>
	<div
		class="py-8 sm:py-12 px-8 sm:px-16 rounded-md bg-white sm:shadow-lg sm:max-w-3xl flex flex-col"
	>
		<h1 class="text-2xl pb-2">Pesto Calculator</h1>
		<p class="text-sm text-slate-600">
			Type any values into the boxes below to get the correct ratio of
			ingredients for delicious pesto.
			<br />
			<em>Tip: 70 grams of basil makes about 1 pound of pasta.</em>
		</p>
		<Calculator formData={data.form} />
		<h2 class="text-md mb-1 font-semibold">Instructions:</h2>
		<ol class="list-decimal list-inside text-sm text-slate-800 space-y-1">
			<li>
				In a mortar and pestle, grind nuts and garlic into a paste while adding
				a pinch or two of kosher salt.
			</li>
			<li>
				Add basil leaves to the mortar and grind to a very smooth paste. Take
				your time!
			</li>
			<li>
				Add the paste to a large bowl and combine with grated parmesan and
				pecorino cheese.
			</li>
			<li>Finally, add extra-virgin olive oil to your desired consistency.</li>
		</ol>
	</div>
	<div
		class="flex flex-1 items-top justify-center sm:absolute sm:bottom-5 sm:right-5"
	>
		<a class="m-5" href="https://www.github.com/kylecarhart/pesto">
			<Github />
		</a>
	</div>
</div>
