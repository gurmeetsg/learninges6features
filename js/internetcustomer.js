/**
 * Created by g.gulati on 6/2/17.
 */
import {Customer} from './customer';
import { ObjectFormatter } from './formatutils'


class InternetCustomer extends Customer{
    constructor(id, name, address, credit, status,blogUrl){
        // Destructuring
        super(...arguments);
        this.blogUrl = blogUrl;
    }
    format(){
        let formattedMessage = ObjectFormatter.format(this).toUpperCase();

        return formattedMessage;
    }

}

export { InternetCustomer };
