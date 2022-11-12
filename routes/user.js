const { Router } = require('express');
const express = require('express')
const route =  express.Router()
const user = require('../model/userSchema')

// POST USER TO SERVER TO SAVE ONTO THE DB 
route.post('/', async(req, res) => {
    const userObj = new user({
        name: req.body.name,
        email: req.body.email,
        sub: req.body.sub
    })

    try{

        const u1 = await userObj.save()
        res.json(u1)

    }catch(err){
        res.send ({message: err.message || "Error while inserting new user"})
    }

    });

// GETS ALL THE USERS 
route.get('/', async(req, res) => {
    try{

        const users = await user.find()
        res.json(users)

    }catch(err){
        res.send("Err" + err)
    }
})

// GET A SPECIFIC USER BY ID 
route.get('/:id', async(req, res) => {
    try{

        const oneUser = await user.findById(req.params.id)
        res.json(oneUser)
       
    }catch(err){
        res.send({message: err.message || "Error occured while retriving user by id" })
    }
})

// UPDATE A SPECIFIC USER
route.patch('/:id', async(req, res) => {
    try{

        const oneUser = await user.findById(req.params.id)
       $set:{
        oneUser.name = req.body.name
        oneUser.email = req.body.email
        oneUser.sub = req.body.sub
       }

        const u1 = await oneUser.save()
        res.json(u1)

    }catch(err){

        res.send({message: err.message || "Error occured while Patching"})

    }
})

// DELETE A SPECIFIC USER
route.delete('/:id', async(req, res) => {
    try{

        const oneUser = await user.findById(req.params.id)
        const u1 = await oneUser.remove()
        res.json(u1)
       
    }catch(err){
        res.send({message: err.message || "Error occured while deleting a user by id" })
    }
})


module.exports = route
