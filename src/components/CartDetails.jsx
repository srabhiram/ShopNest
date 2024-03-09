import {  useSelector } from "react-redux"

const CartDetails = () => {
    const cartData = useSelector((state=>state.cartData))
    console.log(cartData);
  return (
    <div>CartDetails</div>
  )
}

export default CartDetails