import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { User } from './user-interface/user';

@Injectable()
export class UserService {
    public users:User[]=[];

  getUsers(username?:string): User[] {
    ;
    if(username){
      let matchedUsers:User[] = this.users.filter((el:User)=>el.username===username)
       return matchedUsers;
      }
        return this.users
    }
    
  getUser(email:string):User{
    return this.users.filter(el=>el.email === email)[0]
  }

  addUser(user:User):User{
    let id = Date.now();
    this.users.push({...user,id});
    return user;
  }

  deleteUser(id:number):string{
    let userEmail:boolean = this.users.some((e:User)=>e.id===id)
    if(userEmail){
      this.users = this.users.filter(el => el.id !== id)
      return `deleted user with email: ${id}`;
    }else{
      throw new NotFoundException()
    }
    
  }

  // findUsers(username:string):User[] | String {
  //      let matchedUsers = this.users.filter((el:User)=>el.username===username)
  //      if(matchedUsers.length>0) return matchedUsers
  //        else return "user not found"
  //     }      
}
