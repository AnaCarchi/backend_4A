import { IsEmail ,IsNotEmpty,MaxLength,MinLength } from "class-validator";
import { User} from "../interfaces/user.interface";

export class LoginAuthDto implements User{

    
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @MinLength(25)
    @MaxLength(6)
    @IsNotEmpty()
    password: string;
}