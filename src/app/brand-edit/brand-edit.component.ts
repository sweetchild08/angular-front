import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  public brandId:any;
  brand:Brand|null=null;
  message:string='';


  constructor(private route:ActivatedRoute, private _brand:BrandsService, private router:Router) {
    let id = this.route.snapshot.paramMap.get('brandId') 
    this.brandId=id;
   }

  ngOnInit(): void {
    this._brand.getbrand(this.brandId).subscribe(data=>{
      this.brand=data;
    })
  }
  updateBrand(){
    console.log('updating');
    this._brand.updatebrand(this.brandId,this.brand).subscribe(data=>{
      this.message='success';
      setTimeout(()=>this.router.navigate(['/home']),2000)
      
    })
  }

  back(){
    this.router.navigate(['/home'])
  }

}
