import { R_BASIL, R_NUTS, R_PARM, R_PEC, R_GARLIC, R_OIL } from '$lib/constants/ratios';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	basil: z.number().int().min(0).default(R_BASIL),
	nuts: z.number().int().min(0).default(R_NUTS),
	parm: z.number().int().min(0).default(R_PARM),
	pec: z.number().int().min(0).default(R_PEC),
	garlic: z.number().int().min(0).default(R_GARLIC),
	oil: z.number().int().min(0).default(R_OIL)
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};
