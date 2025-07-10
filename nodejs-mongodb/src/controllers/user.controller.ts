import { Request, Response } from "express";
import { create, findAll, deleteOne } from "../services/user.service";

class UserController {
    static async create(req: Request, res: Response) {
        try {
            const { body } = req;
            const response = await create(body);
            console.log(response)
            return res.status(response.code).send(response);
        } catch (error) {
            return res.status(500).send({ error });
        }
    }

    static async findAll(req: Request, res: Response) {
        try {
            const response = await findAll();
            return res.status(response.code).send(response); 
        } catch (error) {
            return res.status(500).send({ error });
        }
    }

    static async deleteOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const response = await deleteOne(id);
            return res.status(response.code).send(response); 
        } catch (error) {
            return res.status(500).send({ error });
        }
    }
}

export default UserController;
