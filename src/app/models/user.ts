/**
 * Created by antonio on 25/09/17.
 */

// User model, used to store user info
export class User{

   constructor(public id: number,
               public personal_id: string,
               public name: string,
               public surname:string,
               public email: string,
               public birthday: string,
               public gender: string,
               public role: number,
               public created_at: string
   ){}

}