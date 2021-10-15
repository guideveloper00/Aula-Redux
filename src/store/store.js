import { createStore, combineReducers } from "redux";
import calculatorReducer from "./calculator/calculator.reducer"
import productsReducer from "./products/products.reducer";
 
const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productsReducer
})

const store = createStore(rootReducer)


export default store;