import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brand-view',
  templateUrl: './brand-view.component.html',
  styleUrls: ['./brand-view.component.css']
})
export class BrandViewComponent implements OnInit {
  public brandId:any;
  brand:Brand|null=null;
  constructor(private route:ActivatedRoute, private _brand:BrandsService, private router:Router) {
    let id = this.route.snapshot.paramMap.get('brandId') 
    this.brandId=id;
   }

  ngOnInit(): void {
    this._brand.getbrand(this.brandId).subscribe(data=>{
      this.brand=data;
    })
  }
  

}
