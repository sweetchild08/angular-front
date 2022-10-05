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
  message:string='';
  brands:Brand[]=[];

  constructor(private _brands:BrandsService,private router:Router) {
    
   }

  ngOnInit(): void {
    // this._brands.getbrands().subscribe(data=>this.brands=data)
    this.getbrands()
  }
  
  redirectTo(route:any){
    this.router.navigate(route)
  }

  delete(brandId:number){
    this._brands.deletebrand(brandId).subscribe(data=>{
      this.message=data
      this.getbrands
      setTimeout(()=>this.message='',3000)
    })
  }
  getbrands(){
    this._brands.getbrands().subscribe(data=>this.brands=data)
  }

}
