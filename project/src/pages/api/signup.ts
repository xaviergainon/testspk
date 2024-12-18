import { NextApiRequest, NextApiResponse } from 'next';
import { signupSchema } from '../../lib/validation';
import { createUser } from '../../lib/db';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    // Validate input
    const validatedData = signupSchema.parse(req.body);

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Cette adresse email est déjà utilisée' });
    }

    // Check referral code if provided
    if (validatedData.referralCode) {
      const referrer = await prisma.user.findFirst({
        where: { referralCode: validatedData.referralCode },
      });

      if (!referrer) {
        return res.status(400).json({ error: 'Code parrain invalide' });
      }
    }

    // Create user
    const user = await createUser(validatedData.email, validatedData.name);

    // If there's a valid referral code, create the referral
    if (validatedData.referralCode) {
      const referrer = await prisma.user.findFirst({
        where: { referralCode: validatedData.referralCode },
      });

      if (referrer) {
        await prisma.referralHistory.create({
          data: {
            referrerId: referrer.id,
            referredId: user.id,
            points: 500,
            status: 'pending',
          },
        });
      }
    }

    return res.status(201).json({ userId: user.id });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'Une erreur est survenue lors de l\'inscription' });
  }
}