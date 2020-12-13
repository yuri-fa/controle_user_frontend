import { UserService } from './../user.service';
import { User } from './../../../views/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users : User [];
  displayedColumns : string [] = ["id","nome","email","action"];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe( usuarios =>{
      this.users = usuarios;
      console.log(this.users);
    })
  }
}
