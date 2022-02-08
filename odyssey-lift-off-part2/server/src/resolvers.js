const resolvers = {
    Query: {
        // Returns an array of Tracks that will be used to populate
        // the homepage grid of our webapp
        tracksForHome: (_, __, context) => {
            const {
                dataSources
            } = context;
            console.warn('tracksForHome Data sources: ', dataSources);
            return dataSources.trackAPI.getTracksForHome();

        },
    },
    Track: {
        author: (parent, _, context) => {
            const {
                dataSources
            } = context;
            const {
                authorId
            } = parent;
            console.warn('Track Data sources: ', dataSources);
            console.warn("Track Parent: ", parent);

            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
}

module.exports = resolvers;