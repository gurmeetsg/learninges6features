/**
 * Created by g.gulati on 6/2/17.
 */
import {InternetCustomer} from './internetcustomer';
import {Customer} from './customer';


let customer = new InternetCustomer(10,'Northwind Traders','Bangalore',12000, true,'http://blogs.msdn.com/nwt');

console.log(customer.format());
console.log(customer instanceof InternetCustomer);

let customerCSVString = '10,Northwind,NCR,34930,true';
let anotherCustomer = Customer.createCustomer(customerCSVString);

console.log(anotherCustomer.format());
