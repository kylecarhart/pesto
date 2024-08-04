<script lang="ts">
	import { R_BASIL, R_NUTS, R_PARM, R_PEC, R_GARLIC, R_OIL } from '$lib/constants/ratios';
	import Input from './Input.svelte';

	export let form;
	export let recalc: (r: number) => void;
	export let reset: () => void;
</script>

<div
	class="py-8 sm:py-12 px-8 sm:px-16 rounded-md bg-white sm:shadow-lg sm:max-w-3xl flex flex-col"
>
	<h1 class="text-2xl pb-2">Pesto Calculator</h1>
	<p class="text-sm text-slate-600">
		Type any values into the boxes below to get the correct ratio of ingredients for delicious
		pesto.
		<br />
		<em>Tip: 70 grams of basil makes about 1 pound of pasta.</em>
	</p>
	<div class="grid sm:grid-cols-2 gap-2 my-8">
		<Input
			label="Basil"
			unit="g"
			bind:value={$form.basil}
			onInput={() => recalc((1 / R_BASIL) * $form.basil)}
		/>
		<Input
			label="Pine nuts"
			unit="g"
			bind:value={$form.nuts}
			onInput={() => recalc((1 / R_NUTS) * $form.nuts)}
		/>
		<Input
			label="Parmesan"
			unit="g"
			bind:value={$form.parm}
			onInput={() => recalc((1 / R_PARM) * $form.parm)}
		/>
		<Input
			label="Pecorino"
			unit="g"
			bind:value={$form.pec}
			onInput={() => recalc((1 / R_PEC) * $form.pec)}
		/>
		<Input
			label="Garlic"
			unit="cloves"
			bind:value={$form.garlic}
			onInput={() => recalc((1 / R_GARLIC) * $form.garlic)}
		/>
		<Input
			label="Olive Oil"
			unit="ml"
			bind:value={$form.oil}
			onInput={() => recalc((1 / R_OIL) * $form.oil)}
		/>
	</div>
	<button
		class="self-end bg-slate-100 text-slate-600 text-sm py-2 px-4 rounded active:bg-slate-200"
		on:click={reset}
	>
		Reset
	</button>
	<h2 class="text-md mb-1 font-semibold">Instructions:</h2>
	<ol class="list-decimal list-inside text-sm text-slate-800 space-y-1">
		<li>
			In a mortar and pestle, grind nuts and garlic into a paste while adding a pinch or two of
			kosher salt.
		</li>
		<li>Add basil leaves to the mortar and grind to a very smooth paste. Take your time!</li>
		<li>Add the paste to a large bowl and combine with grated parmesan and pecorino cheese.</li>
		<li>Finally, add extra-virgin olive oil to your desired consistency.</li>
	</ol>
</div>
