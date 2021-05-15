import {User}from "../model/user.js"
import {getUserService, postUserService,updateUserByIdService,deleteUserByIdService} from "../service/user.js";

export const getUsers = (req,res) =>{
    
    getUserService(req,res);
    
}

export const postUser = (req,res) =>{
    postUserService(req,res);
}

export const updateUserById = (req,res) =>{
    updateUserByIdService(req,res);
}

export const deleteUserById = (req,res) =>{
    deleteUserByIdService(req,res);
}