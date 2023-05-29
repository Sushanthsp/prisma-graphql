const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.signup = async ({ email, password }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error('User exists already!');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword
    }
  });

  return user;
};

exports.login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error('User not found!');
  }

  const isEqual = await bcrypt.compare(password, user.password);

  if (!isEqual) {
    throw new Error('Password is incorrect!');
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, 'somesupersecretkey', {
    expiresIn: '1h'
  });

  return { userId: user.id, token: token, tokenExpiration: 1 };
};
