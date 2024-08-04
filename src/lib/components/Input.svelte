<script lang="ts">
	export let value: number;
	export let label: string;
	export let unit: string;
	export let onInput: () => void;
</script>

<label class="relative flex flex-col" for={label}>
	<span class="block text-sm font-medium text-slate-700">{label}</span>
	<input
		type="text"
		inputmode="numeric"
		pattern="[0-9]*"
		id={label}
		size="4"
		bind:value
		on:input={onInput}
		class="mt-1 pl-3 pr-16 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
	/>
	<span class="absolute right-3 top-8 text-slate-400 font-extralight">
		{unit}
	</span>
</label>
