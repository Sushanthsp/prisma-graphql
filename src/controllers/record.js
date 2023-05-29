const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createRecord = async ({ userId, amount, type, date, notes }) => {
  const record = await prisma.record.create({
    data: {
      userId,
      amount,
      type,
      date: new Date(date),
      notes
    }
  });

  return record;
};

exports.updateRecord = async ({ recordId, userId, amount, type, date, notes }) => {
  const record = await prisma.record.update({
    where: { id: Number(recordId) },
    data: { amount, type, date: new Date(date), notes },
  });

  return record;
};

exports.deleteRecord = async ({ recordId }) => {
  const record = await prisma.record.delete({
    where: { id: Number(recordId) },
  });

  return record;
};

exports.getRecords = async () => {
  const records = await prisma.record.findMany();
  console.log("records",records)
  return records;
};
