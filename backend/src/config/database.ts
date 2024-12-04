
// استيراد مكتبة Mongoose للعمل مع قاعدة بيانات MongoDB
import mongoose from "mongoose"; 

// تعريف دالة dbConnection للاتصال بقاعدة البيانات
const dbConnection = () => { 
    // الاتصال بقاعدة البيانات باستخدام الرابط المخزن في المتغير البيئي DB
    mongoose.connect(process.env.DB!) // `process.env.DB!` يشير إلى أن المتغير DB موجود بشكل مؤكد (باستخدام `!` لتجاوز التحقق من null أو undefined).
    .then(() => { 
        // عند نجاح الاتصال، يتم طباعة رسالة في وحدة التحكم
        console.log("Connected to DB");
    }).catch((error) => { 
        // إذا فشل الاتصال، يتم طباعة الخطأ في وحدة التحكم
        console.log(error); 
    });
}

// تصدير الدالة لاستخدامها في أماكن أخرى من التطبيق
export default dbConnection; 
