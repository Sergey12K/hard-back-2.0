import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({example: 'user@mail.com', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string;

    @ApiProperty({example: '12335435', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(3, 16, {message: 'Не меньше 4 и не больше 16 символов'})
    readonly password: string;
}