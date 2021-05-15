import {User}from "../model/user.js"

export const getUsers = (req,res) =>{
    
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

export const postUser = (req,res) =>{
    
    const user = req.body;

    if(user.name == null || user.username == null || user.password == null)
    {
            res.status(402).send({
            error : true,
            message : "User data missing"
        })
    }

    const user1 = new User({
        name : req.body.name,
        username : req.body.username,
        password : req.body.password

    })

    user1.save().then(
        (result)=>{
            res.sendStatus(201);
            console.log(result);
        }
    ).catch(
        (error)=>{
            res.status(500).send({
                error : true,
                message : err
            })
        }
    )
}

export const deleteById=(req, res)=>{
    // users =  users.filter((user)=> user.id!==req.params.id)
    // res.send(req.params.id)
    User.findByIdAndDelete(req.params.id).then(
        (result)=>{
            res.send(result)
        }
    ).catch(
        (err)=>{
            res.status(500).send({
                error:true,
                message:err
            })
        }
    )
}

export const updateUserById = (req,res) =>{
    
    User.findByIdAndUpdate(req.params.id,{name : req.body.name}).then(
        (result) =>
        {
            res.sendStatus(201);
        }
    ).catch((error)=>
    {
        res.status(403).send({
            error:true,
            Message:error
        })
    })
}