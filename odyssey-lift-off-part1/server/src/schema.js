const {
    gql
} = require('apollo-server');

const typeDefs = gql `

    type Query {
        "Query to get tracks array for the homepage grid"
        tracksFormHome: [Track!]!
    }


    "A group of modules that teaches about a specific topic"
    type Track { 
        id: ID!
        "Tracks title"
        title: String!
        "Tracks main author"
        author:Author!
        "tracks main illustration to display in track card or track page detail"
        thumbnail: String
        "tracks approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }

    "Author of a complete track"
    type Author {
        id: ID!
        "Authors first and last name"
        name: String!
        "Photo of the author"
        photo: String
    }
`;

module.exports = typeDefs;