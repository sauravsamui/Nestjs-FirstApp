import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class User{
    @ApiProperty()
    email:string;
    @ApiProperty({required:false})
    id?:number
    @ApiProperty()
    username:string
}