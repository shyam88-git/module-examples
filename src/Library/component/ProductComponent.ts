import ProductTemplate from "../templates/ProductTemplate";
export default class ProductComponent extends ProductTemplate
{


    Name="Dell Laptop";
    Price=56000.0;
    Qty=25;
   Total(){

    return this.Price*this.Qty;
   }


   Print(){

        console.log(`Name=${this.Name}\n Price=${this.Price}\n
        Qty=${this.Qty}\n Total=${this.Total()} `);
   }

}

