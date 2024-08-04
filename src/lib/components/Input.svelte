<script lang="ts">
	import { tv } from "tailwind-variants";

	export let value: number;
	export let label: string;
	export let unit: string;
	export let onInput: () => void;
	export let error;
	export let constraints;

	const tvInput = tv({
		base: "mt-1 pl-3 pr-16 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
		variants: {
			error: {
				true: "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500",
			},
		},
	});

	const tvSpan = tv({
		base: "absolute right-3 top-8 text-slate-400 font-extralight",
		variants: {
			error: {
				true: "text-pink-600",
			},
		},
	});
</script>

<label class="relative flex flex-col" for={label}>
	<span class="block text-sm font-medium text-slate-700">{label}</span>
	<input
		type="text"
		inputmode="numeric"
		id={label}
		bind:value
		on:input={onInput}
		class={tvInput({ error: !!error })}
		{...constraints}
	/>
	<span class={tvSpan({ error: !!error })}>
		{unit}
	</span>
</label>
