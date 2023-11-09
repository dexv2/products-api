import { ProductArrayMapper } from "../mappers/products";
import { ToyShopProduct } from "../models/product"
import { ProductDto, ProductsDto } from "../types"

export class ToyShopController {
    async getAllProducts() {
        const products = await ToyShopProduct.find({});
        return this.convertToCsvMultiple(ProductArrayMapper.toDto(products))
    }

    async createProduct(name: string, price: number) {
        const productDetails: ProductDto = {name, price}
        const product = new ToyShopProduct(productDetails)
        await product.save()
        return this.convertToCsvSingle(productDetails)
    }

    private convertToCsvSingle(product: ProductDto) {
        const titles = Object.keys(product)
        const details = Object.values(product).join(',')
        const csv = [
            titles.join(','),
            details
        ].join('\r\n')

        console.log({csv})
        return csv
    }

    private convertToCsvMultiple(products: ProductsDto) {
        if (!products.length) return ''

        const titles = Object.keys(products[0])
        const details = products.map((x) => Object.values(x).join(',')).join('\r\n')
        const csv = [
            titles.join(','),
            details
        ].join('\r\n')

        return csv
    }
}
