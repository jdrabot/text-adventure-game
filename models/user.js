const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
mongoose.promise = Promise;

const userSchema = new Schema({
    password: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    savedGames: [
        {
            textNode: [],
            charcter: {
                name: String,
                class: String,
                HP: Number
            },
            dateCreated: {
                type: Date,
                default: Date.now()
            },
            dateUpdated: Date
        }
    ]
});

userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword: (plainTextPassword) => {
        return bcryt.hashSync(plainTextPassword, 10);
    }
};

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log("no password provided");
    } else {
        this.password = this.hashPassword(this.password);
        next()
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;