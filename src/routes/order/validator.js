const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{

  order(){
    return [
      check('productsId')
        .not()
        .isEmpty()
        .withMessage('سبد خرید خالی است'),

    ]
  }

  postalInformation(){
    return [
      check('FName')
        .not()
        .isEmpty()
        .withMessage('نام خریدار نباید خالی باشد'),
        check('LName')
        .not()
        .isEmpty()
        .withMessage('نام خانوادگی خریدار نباید خالی باشد'),
        check('email')
        .not()
        .isEmpty()
        .withMessage(' ایمیل خریدار نباید خالی باشد'),
        check('email')
        .isEmail()
        .withMessage('ایمیل صحیح نیست'),
        check('mobile')
        .not()
        .isEmpty()
        .withMessage('شماره موبایل نباید خالی باشد'),
        check('address')
        .not()
        .isEmpty()
        .withMessage('آدرس خریدار نباید خالی باشد'),
        check('postalCode')
        .not()
        .isEmpty()
        .withMessage('کد پستی خریدار نباید خالی باشد'),
        
    ]
  }
}