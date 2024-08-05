<script lang="ts">
	import { browser } from "$app/environment";
	import {
		R_BASIL,
		R_GARLIC,
		R_NUTS,
		R_OIL,
		R_PARM,
		R_PEC,
	} from "$lib/constants/ratios";
	import { CalculatorSchema } from "$lib/schemas/CalculatorSchema";
	import {
		getRatioFromLocalStorage,
		setRatioInLocalStorage,
	} from "$lib/utils/localstorage";
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import Input from "./Input.svelte";

	export let formData;

	const { form, constraints, errors, enhance } = superForm(formData, {
		validators: zodClient(CalculatorSchema),
		validationMethod: "oninput",
	});

	let ratio: number = 1;

	if (browser) {
		// Retrieve ratio from storage if it exists
		ratio = getRatioFromLocalStorage();
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
	class="bg-slate-100 text-slate-600 text-sm py-2 px-4 mb-6 rounded active:bg-slate-200"
	on:click={reset}
>
	Reset
</button>
