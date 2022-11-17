import { ParseIntPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ApiTags } from '@nestjs/swagger/dist';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger/dist/decorators';
import { User } from './user-interface/user';
import { UserService } from './user.service';

@ApiTags("/users")
@Controller("user")
export class UserController {
  constructor(private readonly userService:UserService) {}

  @ApiOkResponse({type:User,isArray:true})
  @Get()
  getUsers(@Query("username") username:string): User[] {
    return this.userService.getUsers(username);
  }
 
  @ApiOkResponse({type:User,description:"the user"})
   @ApiNotFoundResponse()
  @Get(":email")
  getUser(@Param("email") email:string):User{
    let matchedUser = this.userService.getUser(email);
    if(matchedUser){
          return matchedUser
    }else {
     throw new NotFoundException()
    }
    
  }

  @Post()
  postUser(@Body() user:User): User {
    return this.userService.addUser(user) ;
  }

  @Delete("/delete/:id")
  deleteUser(@Param("id",ParseIntPipe) id:number):string{
     return this.userService.deleteUser(id)  ;
  }

  // @Get("/finduser")
  // findUsers(@Query("username") username:string): User[] | String {
  //   return this.userService.findUsers(username);
  // }
}

// for swagger api
// npm i --save @nestjs/swagger swagger-ui-express