import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/views/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor( private userService : UserService,
    private router: Router,
    private route : ActivatedRoute) { }

  user : User;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService.readById(id).subscribe(userTemp => {
      this.user = userTemp
    })
  }

  deleteUser(): void {
    this.userService.remover(this.user.id).subscribe(() => {
      this.userService.showOnmessage("Usuário removido com sucesso");
      this.router.navigate(["/"])
    })
  }

  cancel() : void{
    this.router.navigate(['/'])
  }

}
