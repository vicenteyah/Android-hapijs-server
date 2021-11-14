const userSchema = require('../schemas/user.schema')
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
            validate:{
                payload: userSchema.payload,
                failAction:(req,h,error) => {
                    return error.isJoi 
                    ? h.response(error.details[0]).takeover()
                    : h.response(error).takeover()
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/v1/users/{uuid}',
        handler: handlers.updateUser,
        options: {
            validate:{
                payload: userSchema.payload,
                failAction:(req,h,error) => {
                    return error.isJoi 
                    ? h.response(error.details[0]).takeover()
                    : h.response(error).takeover()
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/v1/users/{uuid}',
        handler: handlers.deleteUser,
    }
]
