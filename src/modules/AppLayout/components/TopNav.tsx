'use client'

import { RootState } from "@/lib/store";
import { GiftFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function TopNav(){

    const cartItems  = useSelector((state: RootState) => state.cart.items);

    return(
        <div className="flex justify-between border-b py-4 md:px-10 px-4 w-full fixed bg-white z-10 top-0">
            <Link className="flex gap-2" href={"/"}>
                <GiftFilled style={{color:"#DB4444"}} />
                <span className="text-lg font-semibold">Blinqpay Shop</span>
            </Link>

            <Link href="/cart" className="text-black hover:text-black focus:text-black">
                <Badge count={cartItems.length}
                >
                        <ShoppingCartOutlined style={{fontSize:'24px'}} />
                </Badge>
            </Link>
            
        </div>
    )
}