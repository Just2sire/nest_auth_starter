/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {}

    async login(user: {email: string, password: string}) {
        return {
            accessToken: this.jwtService.sign({
                user,

            })
        }
    }
}
