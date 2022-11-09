const ObjectId = require("mongodb").ObjectId;
const clientModel = require("../models/clientsSchema");

const register = async(req,res) => {
    try {
        let {name, socialName, username, age, adress, phone, weekDays} = req.body;
        let newClient = await clientModel.create({name, socialName,username, age, adress, phone, weekDays});


    
        let registeredClient = await newClient.save();

        if (registeredClient) {
            res.status(201).send({
                "message": "Athlete successfully registered!",
                registeredClient
            })
        }
    }
    catch(error) {}
}