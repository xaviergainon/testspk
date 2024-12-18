import { prisma } from './prisma';

export async function createUser(email: string, name: string) {
  const referralCode = generateReferralCode(name);
  return prisma.user.create({
    data: {
      email,
      name,
      referralCode,
    },
  });
}

export async function getReferralsByUserId(userId: string) {
  return prisma.referralHistory.findMany({
    where: {
      referrerId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function createReferral(referrerId: string, referredEmail: string, referredName: string) {
  const referral = await prisma.user.create({
    data: {
      email: referredEmail,
      name: referredName,
      referralCode: generateReferralCode(referredName),
      referrerId: referrerId,
    },
  });

  await prisma.referralHistory.create({
    data: {
      referrerId,
      referredId: referral.id,
      points: 500,
      status: 'pending',
    },
  });

  return referral;
}

export async function completeReferral(referralId: string) {
  const referral = await prisma.referralHistory.update({
    where: {
      id: referralId,
    },
    data: {
      status: 'completed',
    },
  });

  await prisma.user.update({
    where: {
      id: referral.referrerId,
    },
    data: {
      pointsEarned: {
        increment: referral.points,
      },
    },
  });

  return referral;
}

function generateReferralCode(name: string): string {
  const base = name.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${base}${random}`;
}