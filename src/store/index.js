import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';
import { cartReducer } from './reducers/cart';
import { productReducer } from './reducers/product';
import { allProductsReducer } from './reducers/all_products';

const rootReducer = combineReducers({
  category: categoriesReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  all_products: allProductsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));