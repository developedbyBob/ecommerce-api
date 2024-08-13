import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    role: string,
    matchPassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['customer', 'admin'],
        default: 'custumer'
    }
},
    {
        timestamps: true,
    }
)

//Método para comparar senhas
UserSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password)
}

//hook para hash e senha
UserSchema.pre('save', async function (next) {
    const user = this as unknown as IUser;

    if (!user.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    next()
})

const User = mongoose.model<IUser>('User', UserSchema)

export default User