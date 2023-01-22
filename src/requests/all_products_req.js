import { loadProducts } from "../store/reducers/all_products";

export const load_products = dispatch => {
  fetch('http://localhost:3333/products/all')
    .then(resp => resp.json())
    .then(json => dispatch(loadProducts(json)))
}