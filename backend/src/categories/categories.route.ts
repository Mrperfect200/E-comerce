// استيراد Router من مكتبة Express
import { Router } from "express"; 
// - Router: يستخدم لإنشاء مسارات مخصصة لتنظيم الطلبات في التطبيق.

// استيراد الكائن categoriesService
import categoriesService from "./categories.service"; 
// - يحتوي على الوظائف التي تنفذ العمليات على التصنيفات (CRUD).

// إنشاء كائن Router
const categoriesRouter: Router = Router(); 
// - هذا الكائن سيحتوي على جميع المسارات المتعلقة بالتصنيفات.

// تعريف المسار الأساسي "/"
categoriesRouter.route("/")
    .get(categoriesService.getAll) 
    // - يتم تنفيذ الدالة getAll عند إرسال طلب GET لجلب جميع التصنيفات.
    .post(categoriesService.createOne); 
    // - يتم تنفيذ الدالة createOne عند إرسال طلب POST لإنشاء تصنيف جديد.

// تعريف المسار الديناميكي "/:id" (معرّف التصنيف)
categoriesRouter.route('/:id')
    .get(categoriesService.getOne) 
    // - يتم تنفيذ الدالة getOne عند إرسال طلب GET لجلب تصنيف بناءً على المعرف.
    .put(categoriesService.updateOne) 
    // - يتم تنفيذ الدالة updateOne عند إرسال طلب PUT لتحديث التصنيف بناءً على المعرف.
    .delete(categoriesService.deleteOne); 
    // - يتم تنفيذ الدالة deleteOne عند إرسال طلب DELETE لحذف التصنيف بناءً على المعرف.

// تصدير Router لاستخدامه في ملفات أخرى
export default categoriesRouter; 
// - يمكن استيراده وربطه في ملف التطبيق الرئيسي (main application file) مثل `app.ts`.
