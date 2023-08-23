import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyDataService } from '../../services/my-data.service';
import { first } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 


@Component({
  selector: 'app-product-m',
  templateUrl: './product-m.component.html',
  styleUrls: ['./product-m.component.css']
})

export class ProductMComponent implements OnInit{
  myform: FormGroup;
  myData: any ;
  productList: any []=[];

  constructor(private myDataService: MyDataService) {

    this.myform = new FormGroup({
      nom: new FormControl(''),
      prix: new FormControl(''),
      qts: new FormControl('')
    });
  }
  
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

  deleteProduct(id: number): void {
    this.myDataService.deleteProduct(id).subscribe();
  }


  onAddproduct() {
    if (this.myform.value['nom'] && this.myform.value['prix'] && this.myform.value['qts']) {

      this.myDataService.AddProduct(this.myform.value['nom'], this.myform.value['prix'], this.myform.value['qts']).subscribe();
    } else {
      console.error('Please fill in all required fields.');
    }
  }
  

}
