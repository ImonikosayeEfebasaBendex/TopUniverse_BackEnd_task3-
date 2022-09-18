//to write a user schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            //first name must be ste=ring
            type: String,
            //first name must be required during input
            required: true,
            //first name must not have whitespace before or after
            trim: true
        },

        lastName: {
            //last name must be ste=ring
            type: String,
            //last name must be required during input
            required: true,
            //last name must not have whitespace before or after
            trim: true
        }
    },
    { timestamps: true }
);

//to create a unser model into our database
const User = mongoose.model("user", userSchema)

module.exports = User;