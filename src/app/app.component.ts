import { Component, OnInit } from '@angular/core';
import { PublicService } from './services/public.service';
import { AuthService } from './services/auth.service';
import { MyDataService } from './services/my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Welcome to our shop';
  msg: any;
  cartProducts: any[]=[];

  constructor(private pService: PublicService, private authService : AuthService,private myDataService:MyDataService){
    this.myDataService.cartAddedSubject.subscribe(res=> {
      
    })
  }

  ngOnInit (): void {
    this.showMessage();
    
  }
  showMessage () {
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
        console.log(this.msg);
    });
  }
  logout(){
    this.authService.logout();
  }

  loadCart(){
    this.myDataService.getCartItemsByCustId(1).subscribe(
      (data: any[]) => {
        this.cartProducts = data; 
      },
      (error: any) => {
        console.error('Error fetching cart items:', error);
      }
    );
    }
}


