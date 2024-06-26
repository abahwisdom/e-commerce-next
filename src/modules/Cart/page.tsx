'use client'

import { addItem, reduceItemQuantity, removeItem } from "@/lib/features/cartSlice";
import { Product } from "@/lib/services/types/Product";
import { RootState } from "@/lib/store";
import { CloseCircleOutlined, GiftFilled, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

    const router = useRouter();

    const cartItems  = useSelector((state: RootState) => state.cart.items);
    const subTotal  = useSelector((state: RootState) => state.cart.totalAmount);

    const dispatch = useDispatch()

    const handleAddToCart = (product:Product) => {
        dispatch(addItem({
            ...product,
            quantity: 1
        }))
    }

    const handleReduceQuantity = (product:Product) => {
        dispatch(reduceItemQuantity(product.id))
    }

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-114px)]">
        {cartItems && cartItems?.length>0 && <>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
            <thead>
                <tr className="text-left">
                <th className="py-2 font-medium">Product</th>
                <th className="py-2 font-medium">Price</th>
                <th className="py-2 font-medium">Quantity</th>
                <th className="py-2 font-medium">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(item => (
                <tr key={item.id} className="border">
                    <td className="p-2 flex items-center min-w-[200px]">
                    <Image src={item.image} alt={item.title} height={40} width={40} className="w-10 h-10 mr-4 p-2" />
                    {item.title}
                    </td>
                    <td className="p-2">${Math.round(item.price * 100) / 100}</td>
                    <td className="p-2">
                    <div className="flex gap-4 p-2 border w-fit items-center rounded-md">
                        <Button
                        type="dashed"
                        style={{ background: '#e5e7eb', padding: '6px 8px', height: 'fit-content' }}
                        disabled={item.quantity === 1}
                        onClick={() => handleReduceQuantity(item)}
                        >
                        <MinusOutlined />
                        </Button>
                        <div>{item.quantity}</div>
                        <Button
                        type="dashed"
                        style={{ background: '#e5e7eb', padding: '6px 8px', height: 'fit-content' }}
                        onClick={() => handleAddToCart(item)}
                        >
                        <PlusOutlined />
                        </Button>
                    </div>
                    </td>
                    <td className="p-2">${item.price * item.quantity}</td>
                    <td className="p-2">
                    <Popconfirm
                        title="Remove Item"
                        description={`Are you sure you want to remove ${item.title} from cart?`}
                        onConfirm={()=>handleRemoveItem(item.id)}
                        okText="Remove item"
                        cancelText="Cancel"
                    >
                    <button className="text-red-600">
                        <CloseCircleOutlined />
                    </button>
                    </Popconfirm>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
            <Button type="default"
            onClick={()=>router.push('/')}
            >Return to Shop</Button>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded">
            <h2 className="text-xl mb-2">Cart Total</h2>
            <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${Math.round(subTotal * 100) / 100}</span>
            </div>
            <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
            </div>
            <div className="flex justify-between">
            <span>Total:</span>
            <span>${Math.round(subTotal * 100) / 100}</span>
            </div>
            <Button type="primary" className="text-white px-4 py-2 mt-2 rounded w-full">Checkout</Button>
        </div>
        </>}
        {!cartItems || cartItems?.length === 0 &&
         <div className="text-center flex flex-col gap-4 justify-center items-center h-[calc(100vh-260px)]">
          <GiftFilled style={{fontSize:'60px', color:"#62595929"}} className='text-[#DB4444]' />
          <div className='flex flex-col'>
            <span className='text-lg'>No Items In Cart</span>
            <Button type="primary" className="text-white px-4 py-2 mt-2 rounded w-full"
            onClick={()=>router.push('/')}
            >Continue Shopping</Button>
          </div>
        </div>
      }
    </div>

  );
};

export default Cart;
