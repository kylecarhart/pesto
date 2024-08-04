import { R_BASIL, R_GARLIC, R_NUTS, R_OIL, R_PARM, R_PEC } from '$lib/constants/ratios';
import { z } from 'zod';

const CalculatorSchema = z.object({
	basil: z.number().int().min(0).default(R_BASIL),
	nuts: z.number().int().min(0).default(R_NUTS),
	parm: z.number().int().min(0).default(R_PARM),
	pec: z.number().int().min(0).default(R_PEC),
	garlic: z.number().int().min(0).default(R_GARLIC),
	oil: z.number().int().min(0).default(R_OIL)
});

export { CalculatorSchema };
