import { uuid } from 'uuidv4';

let users = []

export const getUsers = (req,res)=>res.send(users)

export const createUser = (req,res) => {
    const userData = req.body

    users.push({...userData, id: uuid()})

    res.send('User with the name "'+userData.firstname+'" added to DataBase')
   
}

export const getUser = (req,res) => {
    const {id} = req.params

    const findUser = users.find((user)=>user.id == id)

    res.send(findUser)
}

export const deleteUser =  (req,res) => {
    const {id} = req.params

    users = users.filter((user) => user.id != id)

    res.send('The id "'+id+'" User has been deleted from Database')
}

export const updateUser = (req,res) => {
    const {id} = req.params

    const {firstname,lastname,age} = req.body

    const user =  users.find((user)=>user.id == id)

    if(firstname){
        user.firstname=firstname;
    }
    if(lastname){
        user.lastname = lastname;
    }
    if(age){
        user.age = age;
    }

    res.send('user Id"'+id+'"has been updated')

}