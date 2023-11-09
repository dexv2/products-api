import { Request, Router } from 'express'
import { ProductDto } from '../types'
import { KidsWorldController } from '../controllers/kidsWorldController'

export class KidsWorldRouter {
    static basePath = '/api/kidsworld'
    router: Router

    constructor(private kidsWorldController: KidsWorldController) {
        this.router = Router()
        this.getAllProducts()
        this.createProduct()
    }

    private getAllProducts() {
        /**
         * @openapi
         * /api/kidsworld:
         *     get:
         *     description: Get toy products from kids world
         *     operationId: kidsWorld
         *     tags:
         *         - kidsworld
         *     responses:
         *         '200':
         *             $ref: '#/components/responses/ProductsXml'
         *         '500':
         *             $ref: '#/components/responses/InternalServerError'
         *         '404':
         *             $ref: '#/components/responses/NotFoundError'
         */

        this.router.get('/',/** logger, */ async (req: Request<{}, string>, res) => {
            res.header('Content-Type', 'application/xml')
            res.send(await this.kidsWorldController.getAllProducts())
        })
    }

    private createProduct() {
        this.router.post('/', async (req: Request<{}, string, ProductDto>, res) => {
            const { name, price } = req.body
            res.header('Content-Type', 'application/xml')
            res.send(await this.kidsWorldController.createProduct(name, price))
        })
    }
}
