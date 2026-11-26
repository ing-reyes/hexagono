import { Response } from "express";
import { ManagerError } from "./manager.error";

export class Handler {

    static error(error: unknown, res: Response){

        if( error instanceof ManagerError ){
            res.json({ message: error.message, code: error.code, status: error.status });
            return;
        }

        res.json({ message: "Interval Server Error", code: 500, status: "INTERNAL_SERVER_ERROR" });
        return;
    }
}