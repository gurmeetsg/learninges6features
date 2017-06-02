const COL_SEPARATOR = ',';
import { ObjectFormatter } from './formatutils'
class Customer{
    constructor(id, name, address, credit, status){
        // Destructuring
        [this.id, this.name, this.address,
            this.credit, this.status] = arguments;
    }

    format(){
        //let formattedMessage = `${this.id}, ${this.name},${this.address}, ${this.credit}, ${this.status}`
       // return formattedMessage;
        let formattedMessage = ObjectFormatter.format(this).toUpperCase();
        return formattedMessage;
    }

    static createCustomer(csvString) {
        let customer = null;

        if(csvString) {
            let splittedCsvString  = csvString.split(COL_SEPARATOR);
            //  Spread operator
            customer = new Customer(...splittedCsvString);
        }
        return customer;
    }


}

export { Customer };