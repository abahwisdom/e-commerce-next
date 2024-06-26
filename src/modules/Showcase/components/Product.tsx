import { addItem } from "@/lib/features/cartSlice";
import { Product as ProductType } from "@/lib/services/types/Product";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { Button, Carousel, notification } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Image from "next/image";

export default function Product({ product, productIndex }:{product: ProductType, productIndex: number}){

    const carouselSettings = {
        nextArrow: <RightCircleFilled/>,
        prevArrow: <LeftCircleFilled/>,
        dots:false,
        arrows: true,
        infinite:false
    }

    const [api, contextHolder] = notification.useNotification()

    const router = useRouter();

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({
            ...product,
            quantity: 1
        }))
        
        api.open({
            message: <div className="space-y-2">
            <div className="flex gap-6 items-center">
              <h1>Product added to cart</h1>
              <Button type="primary" className="flex-1 mr-4" onClick={()=>router.push('/cart')}>Go to cart</Button>
            </div>
          </div>,
          placement: 'top',
          })
    }

    return (
        <div className="product space-y-4 p-4 border rounded-md hover:border-[#DB4444] transition ease-in-out delay-150">
            <Carousel {...carouselSettings} >
                <Image src={product.image} alt={product.title} height={200} width={200} className="md:h-[300px] h-[200px] object-center object-contain rounded" priority={productIndex<4} />
                <Image src={product.image} alt={product.title} height={200} width={200} className="md:h-[300px] h-[200px] object-center object-contain rounded" />
            </Carousel>
            <h3 className="font-medium line-clamp-2 h-12">{product.title}</h3>
            <p className="">${product.price}</p>
            <Button type="primary" className="w-full"
            onClick={handleAddToCart}
            >Add to cart</Button>
            {contextHolder}
        </div>
    );
}