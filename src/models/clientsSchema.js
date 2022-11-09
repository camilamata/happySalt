const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        requires: true
    },
    socialName: {
        type: String,
        requires: false
    },
    username: {
        type: String,
        requires: true
    },
    age: {
        type: Number,
        requires: true
    },
    adress: {
        type: String,
        requires: true
    },
    phone: {
        type: Number,
        requires: true
    },
    weekDays: {
        type: Array,
        requires: true
    }
});

const clientModel = mongoose.model("Clients", clientSchema);
module.exports = clientModel;