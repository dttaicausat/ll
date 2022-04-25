import { useSelector } from "react-redux";
const Purchase = () => {
  const listCart = useSelector((state) => state.itemReducer);
  let quantity = 0;
  let price = 0;
  listCart.OnProcessing.forEach((element) => {
    quantity += element.quantity === 0 ? 0 : 1;
    price += element.cost * element.quantity;
  });
  return (
    <div className="cart-purchase">
      <div className="cart-purchase-amount">amount : {quantity}</div>
      <div className="cart-purchase-price"> total :{`${price}$`}</div>
      <button>purchase</button>
    </div>
  );
};

export default Purchase;
