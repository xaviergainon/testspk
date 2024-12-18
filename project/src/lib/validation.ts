import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: z.string()
    .email('Adresse email invalide')
    .min(5, 'L\'email doit contenir au moins 5 caractères')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),
  referralCode: z.string()
    .max(10, 'Le code parrain ne peut pas dépasser 10 caractères')
    .optional(),
});

export type SignupInput = z.infer<typeof signupSchema>;