import { Product } from "@/lib/services/types/Product";

export default function getCategories(products: Product[] | undefined): string[] {

    if (!products) {
        return [];
    }

    const categories = new Set<string>();

    products.forEach(product => {
        categories.add(product.category);
    });

    return Array.from(categories);
}