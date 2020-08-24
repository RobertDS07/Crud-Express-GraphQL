const UserCollection = require('../models/Users')

const root = {
    allUsers: async () => {
        return await UserCollection.find()
    },

    createUser: async(args) => {
        const { name, email } = args

        const newUser = {
            name,
            email
        }
        return await UserCollection.create(newUser)
    },
    deleteByEmail: async (args) => {
        const { email } = args

        try {
            await UserCollection.findOneAndDelete({ email })
            return 'deleted'
        } catch (err) {
            return err
        }
    },
    updateOne: async (args) => {
        const { email, name } = args 

        return await UserCollection.findOneAndUpdate({email}, {name}, {new: true})
    }
}

module.exports = root