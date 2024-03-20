import { BsCart4 } from "react-icons/bs"

export default function Emptycart() {
  return (
    <div className=" flex h-screen flex-col justify-center items-center gap-3">
                <BsCart4 size={90} />
                <p className=" opacity-50">Cart is Empty!</p>
                <p className="font-medium">Continue Shopping!</p>
              </div>
  )
}
