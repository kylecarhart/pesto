<script lang="ts">
	import { browser } from '$app/environment';
	import { R_BASIL, R_GARLIC, R_NUTS, R_OIL, R_PARM, R_PEC } from '$lib/constants/ratios';
	import { CalculatorSchema } from '$lib/schemas/CalculatorSchema';
	import { getRatioFromLocalStorage, setRatioInLocalStorage } from '$lib/utils/localstorage';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Input from './Input.svelte';

	export let formData;

	const { form, constraints, errors, enhance } = superForm(formData, {
		validators: zodClient(CalculatorSchema),
		validationMethod: 'oninput'
	});

	let ratio: number = 1;

	if (browser) {
		// Retrieve ratio from storage if it exists
		const storageRatio = getRatioFromLocalStorage();
		if (storageRatio <= 0) {
			ratio = storageRatio;
		}
	}

	function getNewValueByRatio(ratio: number, oldValue: number) {
		return Math.round(ratio * oldValue);
	}

	function recalc(r: number) {
		// Dont update the ratio if the input is bad
		if (Number.isNaN(r)) {
			return;
		}

		ratio = r;

		if (browser) {
			setRatioInLocalStorage(ratio);
		}
	}

	function reset() {
		recalc(0); // Helps reset bad inputs when ratio is already 1.
		recalc(1);
	}

	// Reactive assignment to form values based on ratio
	// TODO: This works, but not sure if its the best way.
	$: {
		$form.basil = getNewValueByRatio(ratio, R_BASIL);
		$form.nuts = getNewValueByRatio(ratio, R_NUTS);
		$form.parm = getNewValueByRatio(ratio, R_PARM);
		$form.pec = getNewValueByRatio(ratio, R_PEC);
		$form.garlic = getNewValueByRatio(ratio, R_GARLIC);
		$form.oil = getNewValueByRatio(ratio, R_OIL);
	}
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
	<form method="POST" class="grid sm:grid-cols-2 gap-2 my-8" use:enhance>
		<Input
			label="Basil"
			unit="g"
			bind:value={$form.basil}
			onInput={() => recalc((1 / R_BASIL) * $form.basil)}
			error={$errors.basil}
			constraints={$constraints.basil}
		/>
		<Input
			label="Pine nuts"
			unit="g"
			bind:value={$form.nuts}
			onInput={() => recalc((1 / R_NUTS) * $form.nuts)}
			error={$errors.nuts}
			constraints={$constraints.nuts}
		/>
		<Input
			label="Parmesan"
			unit="g"
			bind:value={$form.parm}
			onInput={() => recalc((1 / R_PARM) * $form.parm)}
			error={$errors.parm}
			constraints={$constraints.parm}
		/>
		<Input
			label="Pecorino"
			unit="g"
			bind:value={$form.pec}
			onInput={() => recalc((1 / R_PEC) * $form.pec)}
			error={$errors.pec}
			constraints={$constraints.pec}
		/>
		<Input
			label="Garlic"
			unit="cloves"
			bind:value={$form.garlic}
			onInput={() => recalc((1 / R_GARLIC) * $form.garlic)}
			error={$errors.garlic}
			constraints={$constraints.garlic}
		/>
		<!-- <Input
			label="Olive Oil"
			unit="ml"
			bind:value={$form.oil}
			onInput={() => recalc((1 / R_OIL) * $form.oil)}
			error={$errors.oil}
			constraints={$constraints.oil}
		/> -->
	</form>
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
