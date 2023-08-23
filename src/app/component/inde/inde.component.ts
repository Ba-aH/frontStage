import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../../services/my-data.service';
import {take , tap} from 'rxjs';


@Component({
  selector: 'app-inde',
  templateUrl: './inde.component.html',
  styleUrls: ['./inde.component.css']
})


export class IndeComponent implements OnInit {
  
  myData: any ;
  productList: any []=[];

  cartObj: any = {
    id: 1,
    panier: 1,
    piece: 0,
    qts: 1,
    total_price: 0
  };

  constructor(private myDataService: MyDataService){  }
  
  ngOnInit(): void {
    debugger;
      this.myDataService
      .getData()
      .subscribe((data) => {this.myData = data
      for (let i=0 ;i<this.myData.length;i++){
      this.myData[i].piece_image="./../../../../Back"+this.myData[i].piece_image
      }
      });
      const cat = localStorage.getItem("currentUser");
      console.log(cat);
      this.loadAllProducts();
      // for (let i=0 ;i<this.myData$.length;i++){
      //   this.myData$[i].piece_image="../../../../../../.."+this.myData$.piece_image
      // }
  }

  loadAllProducts() {
    debugger;
    this.myDataService.getAllProducts().subscribe((result: any)=>{
      this.productList = result.data;
    })
  }


  addItemToCart(productId: number) {
    debugger;
    this.cartObj.piece = productId;
    this.myDataService.addToCart(this.cartObj).subscribe((result: any)=>{
       if(result.result) {
        alert("Product Added To Cart");
        this.myDataService.cartAddedSubject.next(true);
       }
    })
  }
}
