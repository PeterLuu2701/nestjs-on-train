import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService){

    }

    login(){
        let token = this.jwtService.signAsync({ data: { user_id: 123 } }, { expiresIn: "5m", secret: "SECRET_KEY" });

        return token;
    }
}
