// استيراد الوحدات المطلوبة من مكتبة Express
import { Request, Response, NextFunction } from "express"; 
// - Request: يمثل الطلب المرسل من العميل.
// - Response: يمثل الاستجابة التي يتم إرسالها إلى العميل.
// - NextFunction: يستخدم لتمرير التحكم إلى الـ middleware التالي في السلسلة.

// استيراد مكتبة express-async-handler
import asyncHandler from 'express-async-handler'; 
// - هذه المكتبة تساعد في التعامل مع الأخطاء داخل الدوال غير المتزامنة async/await.

// استيراد تعريف الواجهة (interface) الخاصة بـ Categories
import { Categories } from "./categories.interface"; 
// - Categories تعرف الشكل المتوقع للكائنات في التصنيفات.

// استيراد النموذج (schema) الخاص بالتصنيفات
import categoriesSchema from "./categories.schema"; 
// - هذا هو النموذج الخاص بـ MongoDB الذي يتم من خلاله إدارة البيانات.

class CategoriesService { 
    // تعريف فئة (class) تقوم بتنفيذ الخدمات المتعلقة بالتصنيفات.

    // تعريف وظيفة لجلب جميع التصنيفات
    getAll = asyncHandler(async (req: Request, res: Response, next: NextFunction) => { 
        // استخدام asyncHandler للتعامل مع الأخطاء.
        const categories: Categories[] = await categoriesSchema.find(); 
        // - البحث عن جميع التصنيفات باستخدام Mongoose.
        res.status(200).json({ data: categories }); 
        // - إرسال الاستجابة بالتصنيفات مع رمز الحالة 200 (نجاح).
    });

    // تعريف وظيفة لإنشاء تصنيف جديد
    createOne = asyncHandler(async (req: Request, res: Response, next: NextFunction) => { 
        const category: Categories = await categoriesSchema.create(req.body); 
        // - إنشاء تصنيف جديد باستخدام البيانات القادمة من الطلب (req.body).
        res.status(201).json({ data: category }); 
        // - إرسال الاستجابة مع التصنيف الذي تم إنشاؤه ورمز الحالة 201 (تم الإنشاء).
    });

    // تعريف وظيفة لجلب تصنيف معين باستخدام معرّف (ID)
    getOne = asyncHandler(async (req: Request, res: Response, next: NextFunction) => { 
        const category: Categories | null = await categoriesSchema.findById(req.params.id); 
        // - البحث عن تصنيف باستخدام `id` من الطلب.
        res.status(200).json({ data: category }); 
        // - إرسال الاستجابة بالتصنيف الذي تم العثور عليه.
    });

    // تعريف وظيفة لتحديث تصنيف معين
    updateOne = asyncHandler(async (req: Request, res: Response, next: NextFunction) => { 
        const category: Categories | null = await categoriesSchema.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        ); 
        // - تحديث التصنيف باستخدام `id` والبيانات الجديدة.
        // - `new: true` تعني أن النتيجة تعود بالكائن المحدث.
        res.status(200).json({ data: category }); 
        // - إرسال الاستجابة مع التصنيف المحدث.
    });

    // تعريف وظيفة لحذف تصنيف معين
    deleteOne = asyncHandler(async (req: Request, res: Response, next: NextFunction) => { 
        const category: Categories | null = await categoriesSchema.findByIdAndDelete(req.params.id); 
        // - حذف التصنيف باستخدام `id`.
        res.status(204).json(); 
        // - إرسال استجابة بدون محتوى ورمز الحالة 204 (لا يوجد محتوى).
    });
}

// إنشاء كائن من الفئة CategoriesService
const categoriesService = new CategoriesService(); 

// تصدير الكائن لاستخدامه في أماكن أخرى من التطبيق
export default categoriesService;
