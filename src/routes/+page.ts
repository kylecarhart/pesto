import { CalculatorSchema } from '$lib/schemas/CalculatorSchema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const form = await superValidate(zod(CalculatorSchema));

	// Always return { form } in load functions
	return { form };
};
