import { Inject, Injectable } from "@nestjs/common";
import { PaypalService } from "./paypal.service";

@Injectable()
export class PaypalProductsService{
    constructor(private readonly paypal: PaypalService) {
        
    }
}