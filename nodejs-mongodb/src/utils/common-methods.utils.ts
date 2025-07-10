
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const createResponse = (data: any) => {
    return {
        code: StatusCodes.CREATED,
        status: ReasonPhrases.CREATED,
        data,
    }
}

export const successResponse = (data: any) => {
    return {
        code: StatusCodes.OK,
        status: "Success",
        data,
    }
}

export const notFoundResponse = (message: any) => {
    return {
        code: StatusCodes.NOT_FOUND,
        status: ReasonPhrases.NOT_FOUND,
        message,
    }
}

export const noContentResponse = () => {
    return {
        code: StatusCodes.NO_CONTENT,
        status: ReasonPhrases.NO_CONTENT,
    }
}
