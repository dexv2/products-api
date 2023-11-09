import { ProductArrayMapper } from "../mappers/products";
import { ToyUniverseProduct } from "../models/product"
import { ProductDto } from "../types"

export class ToyUniverseController {
    async getAllProducts() {
        const products = await ToyUniverseProduct.find({});
        return ProductArrayMapper.toDto(products)
    }

    async createProduct(name: string, price: number) {
        const productDetails: ProductDto = {name, price}
        const product = new ToyUniverseProduct(productDetails)
        await product.save()
        return productDetails
    }
}
