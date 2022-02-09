const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, {
      dataSources
    }) => {
      console.warn("Get tracks: ");
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, {
      trackId
    }, {
      dataSources
    }) => {
      console.warn("Get track: ", trackId);
      return dataSources.trackAPI.getTrack(trackId);
    }
  },
  Track: {
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({id}, _, {dataSources}) => {
      console.warn("Get Module: ", id);
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;