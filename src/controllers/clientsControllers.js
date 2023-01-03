const ObjectId = require("mongodb").ObjectId;
const clientModel = require("../models/clientsSchema");

const register = async(req,res) => {
    try {
        if (!req.body.name || !req.body.age || !req.body.weekDays) {
            res.status(406).send({
                "message": "You can't register an Athlete without these infos :("
            })
        }
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
};


module.exports = {
    register
}