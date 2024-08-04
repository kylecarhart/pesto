<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import Calculator from '$lib/components/Calculator.svelte';
	import Github from '$lib/icons/github.svelte';
	import { browser } from '$app/environment';
	import { R_BASIL, R_NUTS, R_PARM, R_PEC, R_GARLIC, R_OIL } from '$lib/constants/ratios.js';
	import { getRatioFromLocalStorage, setRatioInLocalStorage } from '$lib/utils/localstorage.js';

	export let data;
	const { form } = superForm(data.form);

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
	$: {
		$form.basil = getNewValueByRatio(ratio, R_BASIL);
		$form.nuts = getNewValueByRatio(ratio, R_NUTS);
		$form.parm = getNewValueByRatio(ratio, R_PARM);
		$form.pec = getNewValueByRatio(ratio, R_PEC);
		$form.garlic = getNewValueByRatio(ratio, R_GARLIC);
		$form.oil = getNewValueByRatio(ratio, R_OIL);
	}
</script>

<div class="bg-slate-50 sm:flex sm:items-center sm:justify-center sm:min-h-screen relative">
	<Calculator {form} {recalc} {reset} />
	<a
		class="hidden sm:block sm:absolute sm:bottom-5 sm:right-5"
		href="https://www.github.com/kylecarhart"
	>
		<Github />
	</a>
</div>
