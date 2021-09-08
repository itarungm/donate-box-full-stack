import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Razor } from 'src/app/models/razor-pay.model';
import { RazorPayService } from 'src/app/services/razor-pay.service';

declare var Razorpay: any;


@Component({
  selector: 'app-donate-share-link',
  templateUrl: './donate-share-link.component.html',
  styleUrls: ['./donate-share-link.component.scss']
})
export class DonateShareLinkComponent implements OnInit {

  constructor(private router: Router, private activatedroute: ActivatedRoute,private razorPayService: RazorPayService) { }
  errorOccurred: boolean=false;
  paymentSuccess: boolean =false;
  isLoading: boolean = false;
  ngOnInit(): void {
    this.createOrder()
  }

  createOrder(){
    this.isLoading=true;
    let routeData
    try{
      routeData = JSON.parse(atob(this.activatedroute.snapshot.params['details']));
    }catch{
      this.errorOccurred = true;
      this.isLoading=false;
    }
    let options = this.createOptions();
    this.razorPayService.createRazorPayOrder(routeData).subscribe((res:Razor)=>{
      // console.log(res);
      this.isLoading=false;
        if(res.success){
          options.key = res.key;
          options.amount = res.value.amount+'';
          options.order_id = res.value.id;
          options.name = res.value.notes.name;
          
          let rzp = new Razorpay(options)
          rzp.open();
        }else{
          this.errorOccurred=true;
        }
    })
  }

  successPayment(res:any){
    console.log(res+'Hello')
    this.paymentSuccess=true;
  }

  createOptions(){
    return {
      "key": "", // Enter the Key ID generated from the Dashboard
      "amount": "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "",
      "description": "Contribution",
      // "image": "https://example.com/your_logo",
      "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the previous step
      "handler": function (response: any){
          console.log(response);
      },
      // "prefill": {
      //     "name": "Gaurav Kumar",
      //     "email": "gaurav.kumar@example.com",
      //     "contact": "9999999999"
      // },
      "notes": {
          // "address": "Razorpay Corporate Office"
      },
      "modal": {
        "ondismiss": ()=>{
          let _self = this;
          console.log('Closed')
          window.close();
             _self.router.navigateByUrl('/');
         }
    },
      "theme": {
          "color": "#e64141"
      }
  };
  }



}
