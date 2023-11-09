import { ProductArrayMapper } from "../mappers/products"
import { KidsWorldProduct } from "../models/product"
import { ProductDto, ProductsDto } from "../types"

export class KidsWorldController {
    async getAllProducts() {
        const products = await KidsWorldProduct.find({});
        return this.convertToXmlMultiple(ProductArrayMapper.toDto(products))
    }

    async createProduct(name: string, price: number) {
        const productDetails: ProductDto = {name, price}
        const product = new KidsWorldProduct(productDetails)
        await product.save()
        return this.convertToXmlSingle(productDetails)
    }

    private convertToXmlSingle(product: ProductDto) {
        let data = `<?xml version='1.0' encoding='UTF-8'?>`
        data += this._convertToXmlSingle(product)
        return data
    }

    private _convertToXmlSingle(product: ProductDto) {
        const data = `<Product>
            <name>${product.name}</name>
            <price>$${product.price}</price>
        </Product>`

        return data
    }

    private convertToXmlMultiple(products: ProductsDto) {
        let data = `<?xml version='1.0' encoding='UTF-8'?>`
        data += `<Products>`
        for (let i = 0; i < products.length; i++) {
            data += this._convertToXmlSingle(products[i])
        }
        data += `</Products>`

        return data
    }
}
