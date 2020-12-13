import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http/';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import {User} from "../../views/user.model";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // baseUrl = "https://cadastrousuariorecrutamento.herokuapp.com/api";
  baseUrl = "http://localhost:8080/api/users";



  constructor(private snackBar : MatSnackBar,  private httpClient : HttpClient) { }

  showOnmessage(msm : string, erro : boolean = false) : void{
    this.snackBar.open(msm,"X",{
        duration : 3000,
        verticalPosition : "top",
        horizontalPosition : "right",
        panelClass : erro ? ["msg-erro"] : ["msg-sucess"]
    })
  }

  create(user : User): Observable<User>{
      return this.httpClient.post<User>(this.baseUrl,user).pipe(
        map(obj => console.log(obj)),
        catchError(e => this.erroHandler(e)),
      )
  }

  erroHandler(e : any) : Observable<any>{
    this.showOnmessage("Ocorreu um erro",true);
    return EMPTY;
  }

  read() : Observable<User []>{
    return this.httpClient.get<User []>(this.baseUrl);
  }

  readById(id : string) : Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  update(user : User) : Observable<User>{
    let url = `${this.baseUrl}/${user.id}`;
    return this.httpClient.put<User>(url,user);
  }

  remover(id : string) : Observable<User>{
    let url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<User>(url);
  }
}
