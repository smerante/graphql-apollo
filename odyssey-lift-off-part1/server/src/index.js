const {
    ApolloServer
} = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
        id: () => 'Track_01',
        title: () => 'Astroy Kitty, Space Explorer',
        author: () => {
            return {
                name: 'Grumpy Cat',
                photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F6%252F2013%252F05%252Fb31.jpg&imgrefurl=https%3A%2F%2Few.com%2Farticle%2F2013%2F05%2F30%2Fgrumpy-cats-meme-movie%2F&tbnid=rIh55uZ3G7MpqM&vet=12ahUKEwi_meiGs-n1AhXBqHIEHatGCSMQMygLegUIARDnAQ..i&docid=hMshynBOwFsUFM&w=973&h=1200&q=grumpy%20cat&ved=2ahUKEwi_meiGs-n1AhXBqHIEHatGCSMQMygLegUIARDnAQ'
            };
        },
        thumbnail: () =>
            'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F6%252F2013%252F05%252Fb31.jpg&imgrefurl=https%3A%2F%2Few.com%2Farticle%2F2013%2F05%2F30%2Fgrumpy-cats-meme-movie%2F&tbnid=rIh55uZ3G7MpqM&vet=12ahUKEwi_meiGs-n1AhXBqHIEHatGCSMQMygLegUIARDnAQ..i&docid=hMshynBOwFsUFM&w=973&h=1200&q=grumpy%20cat&ved=2ahUKEwi_meiGs-n1AhXBqHIEHatGCSMQMygLegUIARDnAQ',
        length: () => 1210,
        modulesCount: () => 6
    })
}

const server = new ApolloServer({
    typeDefs,
    mocks
})


server.listen().then(() => {
    console.log(`
    Server is running!
    Lstening on port 4000
    Query at https://studio.apollographql.com/dev`);
})