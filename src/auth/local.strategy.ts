/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from "@nestjs/passport";

export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super()
    }

    async validate(username: string, password: string): Promise<any> {
        // validate user from DB
        return "Success";
    }
}