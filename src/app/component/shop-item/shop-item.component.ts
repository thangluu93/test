import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Actions, concatLatestFrom, ofType} from '@ngrx/effects';
import {CartActions, CartSelectors} from '../../cart/cart.slice';
import {switchMap} from 'rxjs/operators';
import {timer} from 'rxjs';
import {Item} from '../../constant/interface';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input() data: any;
  productDetails: productItem;

  constructor(private router: Router, private readonly store: Store, private action$: Actions) {
    this.productDetails = {
      description: '', id: '', image: '', isBestSeller: undefined, isNew: undefined, name: '', price: 0
    };
  }

  cart$ = this.store.select(CartSelectors.selectCartState)

  ngOnInit(): void {
    this.productDetails = {
      id: this.data['id'],
      name: this.data.name['vi'],
      image: this.data.image[0],
      description: this.data.description['vi'],
      price: this.data.price,
      isNew: this.data.isNew,
      isBestSeller: this.data.isBestSeller
    };
  }

  addToCart() {
    console.log('add to cart');
    let itemCart: Item = {
      id: this.productDetails.id,
      quantity: 1,
      product_name: this.productDetails.name,
      price: this.productDetails.price,
      editable: true,
      extra: [],
      price_str: this.productDetails.price.toString()
    }
    this.store.dispatch(
      CartActions.addToCart.trigger({payload: itemCart})
    )
  }

  loadProductDetails() {
    this.router.navigate(['/shop/item/', this.data.id]);
  }
}

interface productItem {
  id: string,
  name: string,
  image: string,
  description: string,
  price: number,
  isNew: boolean | undefined,
  isBestSeller: boolean | undefined
}
