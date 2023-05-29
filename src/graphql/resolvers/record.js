const recordController = require('../../controllers/record');

module.exports = {
  Query: {
    getRecords: async function() {
      const records = await recordController.getRecords();
      return records;
    },
  },
  Mutation: {
    createRecord: async function({ recordInput }, context) {
      if (!context.req.isAuth) {
        throw new Error('Unauthenticated!');
      }

      const record = await recordController.createRecord({ ...recordInput, userId: context.req.userId });
      return { ...record };
    },
    updateRecord: async function({ recordId, recordInput }, context) {
      if (!context.req.isAuth) {
        throw new Error('Unauthenticated!');
      }

      const updatedRecord = await recordController.updateRecord({ recordId, ...recordInput, userId: context.req.userId });
      return { ...updatedRecord };
    },
    deleteRecord: async function({ recordId }, context) {
      if (!context.req.isAuth) {
        throw new Error('Unauthenticated!');
      }

      const deletedRecord = await recordController.deleteRecord({ recordId });
      return { ...deletedRecord };
    }
  }
};
