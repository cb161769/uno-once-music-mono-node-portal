import { Injectable } from "@nestjs/common";
import { PaypalService } from "./paypal.service";

@Injectable()
export class PaypalSubscriptionsService{
constructor(private readonly paypal: PaypalService){
}

}