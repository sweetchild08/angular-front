import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  brands:Brand[]=[];

  constructor(private _brands:BrandsService,private router:Router) {
    
   }

  ngOnInit(): void {
    this._brands.getbrands().subscribe(data=>this.brands=data)
  }
  
  redirectTo(route:any){
    this.router.navigate(route)
  }

}
