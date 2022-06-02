<script lang="ts">
  import Input from "./Input.svelte";

  // Ratios
  const R_BASIL: number = 70; // grams
  const R_NUTS: number = 30; // grams
  const R_PARM: number = 60; // grams
  const R_PEC: number = 30; // grams
  const R_GARLIC: number = 3; // cloves
  const R_OIL: number = 80; // milli

  // Inputs
  let newR: number = 1;
  $: basil = getNewValueByRatio(newR, R_BASIL);
  $: nuts = getNewValueByRatio(newR, R_NUTS);
  $: parm = getNewValueByRatio(newR, R_PARM);
  $: pec = getNewValueByRatio(newR, R_PEC);
  $: garlic = getNewValueByRatio(newR, R_GARLIC);
  $: oil = getNewValueByRatio(newR, R_OIL);

  function getNewValueByRatio(ratio: number, oldValue: number) {
    return Math.round(ratio * oldValue);
  }

  function recalc(r: number) {
    newR = r;
  }
</script>

<div
  class="py-8 sm:py-12 px-8 sm:px-16 rounded-md bg-white sm:shadow-lg sm:max-w-3xl"
>
  <h1 class="text-2xl py-1">Pesto Calculator</h1>
  <p class="text-sm text-slate-600">
    Type any values into the boxes below to get the correct ratio of ingredients
    for delicious pesto.
    <br />
    <em>Tip: 70 grams of basil makes about 1 pound of pasta.</em>
  </p>
  <div class="grid sm:grid-cols-2 gap-2 my-8">
    <Input
      label="Basil"
      unit="g"
      bind:amount={basil}
      onInput={() => recalc((1 / R_BASIL) * basil)}
    />
    <Input
      label="Pine nuts"
      unit="g"
      bind:amount={nuts}
      onInput={() => recalc((1 / R_NUTS) * nuts)}
    />
    <Input
      label="Parmesan"
      unit="g"
      bind:amount={parm}
      onInput={() => recalc((1 / R_PARM) * parm)}
    />
    <Input
      label="Pecorino"
      unit="g"
      bind:amount={pec}
      onInput={() => recalc((1 / R_PEC) * pec)}
    />
    <Input
      label="Garlic"
      unit="cloves"
      bind:amount={garlic}
      onInput={() => recalc((1 / R_GARLIC) * garlic)}
    />
    <Input
      label="Olive Oil"
      unit="ml"
      bind:amount={oil}
      onInput={() => recalc((1 / R_OIL) * oil)}
    />
  </div>
  <h2 class="text-md mb-1 font-semibold">Instructions:</h2>
  <p class="text-sm text-slate-800">
    In a mortar and pestle, grind nuts and garlic into a paste while adding a
    pinch or two of kosher salt. Add basil leaves to the mortar and grind to a
    very smooth paste (don't skimp on this step). Add the paste to a large bowl
    and combine with grated parmesan and pecorino cheese. Finally, add
    extra-virgin olive oil to your desired consistency.
  </p>
</div>
