import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export const KidsWorldProduct = mongoose.model('KidsWorld', productSchema)
export const ToyUniverseProduct = mongoose.model('ToyUniverse', productSchema)
export const ToyShopProduct = mongoose.model('ToyShop', productSchema)
