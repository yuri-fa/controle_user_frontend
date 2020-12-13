import { User } from './../user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService} from "../../components/user/user.service";
import { FormsModule }   from '@angular/forms';



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user : User = {
    id : "",
    nome : "",
    email : ""
  }

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit(): void {
  }

  createUser(): void{
    this.userService.create(this.user).subscribe(() =>{
        this.userService.showOnmessage("Usuário salvo com sucesso");
        this.router.navigate(['/'])
    });
  }

  cancel(): void{
    this.router.navigate(['/'])
  }

}
