// import Cart from "@/modules/Cart/page";

import dynamic from 'next/dynamic';

const DynamicCart= dynamic(() => import('@/modules/Cart/page'));

export default function CartPage(){
    return <DynamicCart/>
}