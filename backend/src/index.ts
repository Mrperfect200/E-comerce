import express from 'express';
import categoriesRouter from "./categories/categories.route";
import subcategoriesRoute from "./subcategories/subcategories.route";
import globalErrors from "./middlewares/errors.middleware";
import ApiErrors from "./utils/apiErrors";
import productsRoute from './products/products.route';

declare module "express" {
    interface Request {
        filterData?: any;
    }
}

const mountRoutes = (app: express.Application) => {
    app.use('/api/v1/categories', categoriesRouter);
    app.use('/api/v1/subcategories', subcategoriesRoute);
    app.use('/api/v1/products', productsRoute);
    app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        next(new ApiErrors(`route ${req.originalUrl} not found`, 400));
    });
    app.use(globalErrors);
}

export default mountRoutes;