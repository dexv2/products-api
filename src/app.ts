import './config/mongo'
import 'dotenv/config'
import express from 'express'
import { KidsWorldRouter, ToyShopRouter, ToyUniverseRouter } from './routes'
import { logger } from './middlewares'
import { KidsWorldController } from './controllers/kidsWorldController'
import { ToyUniverseController } from './controllers/toyUniverseController'
import { ToyShopController } from './controllers/toyShopController'

const app = express()
app.use(logger)
app.use(express.json())

const kidsWorldController = new KidsWorldController()
const kidsWorldRouter = new KidsWorldRouter(kidsWorldController)
const toyUniverseController = new ToyUniverseController()
const toyUniverseRouter = new ToyUniverseRouter(toyUniverseController)
const toyShopController = new ToyShopController()
const toyShopRouter = new ToyShopRouter(toyShopController)

app.use(KidsWorldRouter.basePath, kidsWorldRouter.router)
app.use(ToyShopRouter.basePath, toyShopRouter.router)
app.use(ToyUniverseRouter.basePath, toyUniverseRouter.router)

const port = 3002

app.listen(port, () => {
    console.log(`Products API listening at http://localhost:${port}`)
})
