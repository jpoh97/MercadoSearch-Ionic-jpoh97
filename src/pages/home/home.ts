import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MercadoLibreProvider } from '../../providers/mercadolibre/mercadolibre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  informationProduct:any = [];
  product:string = ""
  exist:boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private myMercado: MercadoLibreProvider) {

  }

  serchProduct() {
    this.myMercado.searchProduct(this.product)
        .then((data) => {
          this.exist = true;
          this.informationProduct = data;
          console.log(this.informationProduct);
        }).catch( (err) => {
          console.log(err);
        });
  }


}
