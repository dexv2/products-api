import { Request, Router } from 'express'
import { ProductDto } from '../types'
import { ToyShopController } from '../controllers/toyShopController'

export class ToyShopRouter {
    static basePath = '/api/toyshop'
    router: Router

    constructor(private toyShopController: ToyShopController) {
        this.router = Router()
        this.getAllProducts()
        this.createProduct()
    }

    private getAllProducts() {
        /**
         * @openapi
         * /api/toyshop:
         *     get:
         *     description: Get toy products from toy shop
         *     operationId: toyShop
         *     tags:
         *         - toyshop
         *     responses:
         *         '200':
         *             description: OK
         *             content:
         *                 text/csv: {}
         *         '500':
         *             $ref: '#/components/responses/InternalServerError'
         *         '404':
         *             $ref: '#/components/responses/NotFoundError'
         */

        // TODO: validation for undefined values
        this.router.get('/', async (req: Request<{}, string>, res) => {
            res.header('Content-Type', 'text/csv')
            res.send(await this.toyShopController.getAllProducts())
        })
    }

    private createProduct() {
        this.router.post('/', async (req: Request<{}, {}, ProductDto>, res) => {
            const { name, price } = req.body
            res.header('Content-Type', 'text/csv')
            res.send(await this.toyShopController.createProduct(name, price))
        })
    }
}
