import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signup() {
        return {
            msg: "hello sign up"
        }
    }
    signin() {
        return {
            msg: "hello sign in"
        }
    }
}
