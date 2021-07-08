import {createSlice, noopReducer, PayloadAction} from 'ngrx-slice';
import {Item} from '../constant/interface';
import {ActionReducer} from '@ngrx/store';
import {act} from '@ngrx/effects';

let cart:Item = {
  id: '',
  price: 0,
  extra:[],
  price_str: '',
  editable: true,
  product_name: '',
  quantity: 0
}

const {
  selectors: CartSelectors,
  actions: CartActions,
  ...cartFeature
} = createSlice({
  name: "cart",
  initialState: {
    id: '',
    price: 0,
    extra:[],
    price_str: '',
    editable: false,
    product_name: '',
    quantity: 0
  } as Item,
  reducers: {
    addToCart: {
      success: (state, action: PayloadAction) => ({
        ...state,
        id: action.payload.id,
        price: action.payload._payload.price,
        extra: action._payload.payload.extra,
        price_str: action.price_str,
        editable: true,
        product_name: action.payload.product_name,
        quantity: action.payload.quantity
      }),
      trigger: noopReducer<Item, {payload: Item}>()
    }
  }
})

export {CartSelectors, CartActions, cartFeature}
