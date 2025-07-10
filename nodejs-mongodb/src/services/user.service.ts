import User from "../models/user.model";
import {
    createResponse,
    successResponse,
    notFoundResponse,
    noContentResponse,
} from "../utils/common-methods.utils";

export const create = async (payload: any) => {
    const { name, email, city } = payload;
    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    const user = await User.create({
        name,
        email,
        city,
    });

    return createResponse(user);
}

export const findAll = async () => {
    const users = await User.find({});

    return successResponse(users);
}

export const deleteOne = async (id: any) => {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        return notFoundResponse(`User not found with Id: ${id}`)
    }
    console.log("I am here...")
    return noContentResponse();
}
