import { DonatorDetails } from "./donator-details.model";

export class Razor{
    success: boolean;
    value:RazorPayMeta;
    key: string;
  }


  class RazorPayMeta{
    amount: number;
    amount_due: number;
    amount_paid: number;
    attempts: number;
    created_at: number;
    currency: string;
    entity: string;
    id: string;
    notes: DonatorDetails
    offer_id: number;
    receipt: string;
    status: string;
  }
