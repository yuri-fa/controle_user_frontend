import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/views/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  
  user : User;

  constructor(private userService : UserService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get("id");
    console.log('ID do usuario',id)
    this.userService.readById(id).subscribe(userTemp =>{
      this.user = userTemp;
    });
  }

  updateProduct(): void{
    this.userService.update(this.user).subscribe(() =>{
      this.userService.showOnmessage("Produto atualizado com sucesso");
      this.router.navigate(['/'])
    })
  }

  cancel() : void{
    this.router.navigate(['/'])
  }
}
