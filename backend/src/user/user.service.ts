import prisma from '../utils/prisma';

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};
