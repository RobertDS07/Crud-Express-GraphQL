const express = require('express')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')

const app = express()

const schema = require('./graphql/schema.gql')
const resolvers = require('./graphql/resolvers.js')

mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('db connected')
})
mongoose.set('useFindAndModify', false)

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
})
)

app.listen(8081, () => { console.log('sv on') })