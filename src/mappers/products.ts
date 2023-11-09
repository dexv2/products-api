import { ProductDto, ProductsDto } from "../types"

export const ProductObjectMapper = {
    toDto(product: ProductDto): ProductDto {
        return {
            name: product.name,
            price: product.price
        }
    }
}

export const ProductArrayMapper = {
    toDto(products: ProductsDto): ProductsDto {
        let data = []
        for (let i = 0; i < products.length; i++) {
            data.push(ProductObjectMapper.toDto(products[i]))
        }

        return data
    }
}
