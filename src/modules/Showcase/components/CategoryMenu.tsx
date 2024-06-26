import getCategories from "@/common/utils/getCategories";
import { Product } from "@/lib/services/types/Product";
import { Button} from "antd";
import React from "react";


interface CategoryMenuProps {
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
    selectedCategory: string,
    products: Product[]
}

export default function CategoryMenu({setSelectedCategory, selectedCategory, products}: CategoryMenuProps){

    const categories = getCategories(products);

    return (
        <div className="flex justify-between p-2 mb-4 border rounded-md overflow-auto">
            <div className="flex gap-2">
                {categories.map((category) => (
                    <Button key={category} type={selectedCategory===category ?"primary" : "text"} className="capitalize"
                    onClick={() => setSelectedCategory(category)}
                    >{category}</Button>
                ))}
            </div>
            <Button type="text"
            onClick={() => setSelectedCategory("")}
            >
                <span className="font-semibold">View all</span>
            </Button>
        </div>
    )
}