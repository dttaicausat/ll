import {ADD,MINUS,REMOVE} from "./ActionName";
import axios from "axios";
import ListItem from "../Products/product";
let love=[];
 function productData(){
  axios
  .get("http://localhost:5000/product")
  .then((response) => {
    love= response.data
  
  })
  .catch((error) => {
    console.log(error.message);
  });
 }

 productData();
const intinitial = {


  Product:ListItem ,
  OnProcessing: []
  ,
  AddProduct:false,
}

const CartReducer = (state = intinitial, action) => {
  switch (action.type) {
    case ADD:
  
      const Item = state.Product.find((p) => p.id === action.payload.id);
      const inCart = state.OnProcessing.find((p) =>
        p.id === action.payload.id ? true : false
      );
      return {
        ...state,
        OnProcessing: inCart
          ? state.OnProcessing.map((p) =>
            p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
          )
          : [...state.OnProcessing, { ...Item, quantity: 1 }],AddProduct:true
      };
    case MINUS:

      return {
        ...state, OnProcessing:
          state.OnProcessing.map((p) => p.id === action.payload.id ? { ...p, quantity: (p.quantity===0)?0:p.quantity-1 } : p)
      }
      case REMOVE:
        return{
          ...state, OnProcessing:state.OnProcessing.filter((p) => p.id !== action.payload.id)
        }
    default: return state;
  }
};
export default CartReducer;