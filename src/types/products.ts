import { components } from '../schemas'

export type ProductDto = components['schemas']['Product']
export type ProductsDto = components['schemas']['Products']

export interface Products extends ProductsDto {}
