const { userSchema } = require('../schemas/user.schema')
const handlers = require('../handlers/user.handler')

module.exports = [  
    {
        method: 'GET',
        path: '/v1/users/{uuid}',
        handler: handlers.getById,
    },
    {
        method:'POST',
        path: '/v1/users',
        handler: handlers.createUser,
        options: {
            payload: userSchema.validate(),

        }
    },
    {
        method: 'PUT',
        path: '/v1/users/{uuid}',
        handler: handlers.updateUser,
        options: {
            payload: userSchema.validate(),
        }
    },
    {
        method: 'DELETE',
        path: '/v1/users/{uuid}',
        handler: handlers.deleteUser,
    }
]
