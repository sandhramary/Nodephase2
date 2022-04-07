import HttpException from "./HttpException";
import { ErrorCodes } from "../util/errorCode";

class UserNotAuthorizedException extends HttpException{
    constructor() {
        const errorDetails = ErrorCodes.INCOREECT_USERNAME_OR_PASSWORD;
        super(401, errorDetails.MESSAGE, errorDetails.CODE);
    }
}

export default UserNotAuthorizedException;