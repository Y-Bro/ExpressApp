import {User} from "../model/user.js";

export const getUserService = (req,res) => {
    User.find().then(
        (result) =>
        {
            res.send(result);
        }
    ).catch(
        (err) =>{
            res.status(500).send({
                error : true,
                Message : "Got error while fetching the users from db"
            })
        }
    )
}

export const postUserService =  (req,res) =>{
    let user = req.body;

    if(user.name == null || user.username == null || user.password ==null)
    {
        res.status(402).send({
            error:true,
            Message : "Data Incomplete"
        })
    }

    const newUser = new User({
        name : req.body.name,
        username : req.body.username,
        password : req.body.password

    })

    newUser.save().then(
        (result) =>{
            res.sendStatus(201);
        }
    ).catch((error) => {
        res.status(402).send({
            error:true,
            Message:error
        })
    })
}

export const updateUserByIdService = (req,res) =>
{
    User.findByIdAndUpdate(req.params.id,{name:req.body.name}).then((result)=>
    {
        res.status(201).send({
            Message : "Updated"
        })
    }).catch((error)=>{
        res.status(403).send({
            Message : error
        })
    })
}

export const deleteUserByIdService = (req,res) =>{
    User.findByIdAndDelete(req.params.id).then((result)=>
    {
        res.status(201).send(result);
    }).catch((error)=>
    {
        res.status(403).send({
                Message : error
        })
    })
}