import { Request, Router } from 'express';
import { ProductDto, ProductsDto } from '../types';
import { ToyUniverseController } from '../controllers/toyUniverseController';

export class ToyUniverseRouter {
    static basePath = '/api/toyuniverse'
    router: Router

    constructor(private toyUniverseController: ToyUniverseController) {
        this.router = Router()
        this.getAllProducts()
        this.createProduct()
    }

    private getAllProducts() {
        /**
         * @openapi
         * /api/toyuniverse:
         *     get:
         *     description: Get toy products from toy universe
         *     operationId: toyUniverse
         *     tags:
         *         - toyuniverse
         *     responses:
         *         '200':
         *             $ref: '#/components/responses/ProductsJson'
         *         '500':
         *             $ref: '#/components/responses/InternalServerError'
         *         '404':
         *             $ref: '#/components/responses/NotFoundError'
         */

        this.router.get('/', async (req: Request<{}, ProductsDto>, res) => {
            res.send(await this.toyUniverseController.getAllProducts())
        })
    }

    private createProduct() {
        this.router.post('/', async (req: Request<{}, {}, ProductDto>, res) => {
            const { name, price } = req.body
            res.send(await this.toyUniverseController.createProduct(name, price))
        })
    }
}

export const router = Router();
