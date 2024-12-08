import {NextFunction, Request, Response} from 'express';
import subcategoriesSchema from "./subcategories.schema";
import {subcategories} from "./subcategories.interface";
import refactorService from "../refactor.service";

class SubcategoriesService {
    setCategoryId(req: Request, res: Response, next: NextFunction) {
        if (req.params.categoryId && !req.body.category) req.body.category = req.params.categoryId;
        next();
    };

    filterSubcategories(req: Request, res: Response, next: NextFunction) {
        const filterData: any = {};
        if (req.params.categoryId) filterData.category = req.params.categoryId;
        req.filterData = filterData;
        next();
    }

    getAll = refactorService.getAll<subcategories>(subcategoriesSchema);
    createOne = refactorService.createOne<subcategories>(subcategoriesSchema);
    getOne = refactorService.getOne<subcategories>(subcategoriesSchema);
    updateOne = refactorService.updateOne<subcategories>(subcategoriesSchema);
    deleteOne = refactorService.deleteOne<subcategories>(subcategoriesSchema);
}

const subcategoriesService = new SubcategoriesService();
export default subcategoriesService;