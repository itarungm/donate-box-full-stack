import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonatorDetails } from 'src/app/models/donator-details.model';
import { Amounts } from 'src/static-data/predefined-amounts';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.scss']
})
export class DonateFormComponent implements OnInit {

  constructor(private router: Router) { }

  amounts = Amounts;
  selectedAmount: number;
  customAmount: string='';
  showDialog:boolean = false;
  contributorName: string;
  ngOnInit(): void {
    this.setDefaultAmount();
  }

  onAmountSelect(amount: number){
    this.selectedAmount = amount
    if(!this.selectedAmount){
      this.setDefaultAmount();
    }
  }

  setDefaultAmount(){
    this.selectedAmount=100;
  }

  openDialog(){
    this.showDialog=true;
  }

  closeDialog(){
    this.showDialog = false
  }

  redirectToPayment(anonymousePayment: boolean){
      let details : DonatorDetails;
      details={
        anonymousePayment,
        name:anonymousePayment?'Anonymous':this.contributorName,
        amount:+(this.selectedAmount+'00')
      }
    this.showDialog = false;
    this.router.navigate([]).then(result => {  window.open(`/donate-link/${btoa(JSON.stringify(details))}`, '_blank'); });
  }





}
