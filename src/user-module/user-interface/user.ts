import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsAlphanumeric,MaxLength } from "class-validator";

export class User{
    @ApiProperty()
    email:string;
    @ApiProperty({required:false})
    id?:number
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    username:string
}