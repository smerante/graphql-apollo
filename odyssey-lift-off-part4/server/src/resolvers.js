const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },

    // get a single module by ID, for the module detail page
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, {dataSources}) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
    
        return  {
          code: 200,
          success: true,
          message: `all good for track ${id}`,
          track: track
        };
      }
      catch (e) {
        return {
          code: e.extensions.response.status,
          success: false,
          message: `not all good for track ${id}. ${e.extensions.response.body}`,
          track: null,
        }
      }
      
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
