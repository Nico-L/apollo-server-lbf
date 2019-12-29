const resolvers = {
  Query: {
    effaceImage: (parent, args) => {
      const retour = "le retour est " + args.imageId;
      return {
        message: retour
      };
    }
  }
};

module.exports = resolvers;
