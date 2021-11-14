const Models = require('../models')
const { v4: uuidv4 } = require('uuid');

//**  User handlers **/

const getById = async (request, h ) => {
    try{
        const user_uuid = request.params.uuid
        const users = await Models.User.findOne({
            where:{
                uuid: user_uuid
            }
        })
        return h.response({data:users})
    }catch(err){
        return h.response({err:err.message}).code(400)
    }
}

const createUser = async ({ payload }, h ) => {
    try{

        let {active = true} = payload
        payload.active = active
        
        const dataUser = Object.assign(payload,{uuid:uuidv4()})
       
        const userCreated =await Models.User.create(dataUser)

        return h.response({
            data:userCreated,
            message:'New user created'
        })
    }catch(err){
        return h.response({err:err.message}).code(400)
    }
}

const updateUser = async (req , h ) => { 
    try{
        const userData = req.payload
        const user_uuid = req.params.uuid

        const user = await Models.User.update(userData,
            {
                where:{
                    uuid: user_uuid
                }
            }
        )

        return h.response({
            dataUpdated: user,message:'user data updated'
        })
    }catch(err){
        return h.response({err:err.message}).code(400)
    }
}

const deleteUser = async (request, h ) => {
    try{
        const user_uuid = request.params.uuid
        await Models.User.destroy({
            where:{
                uuid: user_uuid
            }
        })
        return h.response({
            message:'user deleted successfully'
        })
    }catch(err){
        return h.response({err:err.message}).code(400)
    }
}

module.exports = {
    getById,
    createUser,
    updateUser,
    deleteUser
}