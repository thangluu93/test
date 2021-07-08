import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {CartActions, CartSelectors} from './cart.slice';
import {map, switchMap} from 'rxjs/operators';
import {timer} from 'rxjs';

@Injectable()
export class CartEffect {

  constructor(
    private readonly action$: Actions,
    private readonly store: Store
  ) {
  }

  readonly cartEffect = createEffect(() => this.action$.pipe(
    ofType(CartActions.addToCart.trigger),
    concatLatestFrom(() => this.store.select(CartSelectors.selectCartState)),
    switchMap(([{_payload}, cart]) => {
      return timer(300).pipe(
        map(() => CartActions.addToCart.success({
          payload: cart
        }))
      );
    })
  ));
}
