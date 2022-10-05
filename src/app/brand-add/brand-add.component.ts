import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brand:Brand={name:'',description:'',id:0}

  constructor(private _brand:BrandsService,private router:Router) { }

  ngOnInit(): void {
  }
  addBrand(){
    this._brand.addbrand(this.brand).subscribe(data=>{
      console.log('added')
      this.router.navigate(['/home'])
    })
  }
}
