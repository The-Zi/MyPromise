// @authors The-Zi (the.zi@foxmail.com)
// @date    2018-01-29 21:17:06
// @version 1.0.0

// MyPromise：以ES5实现，ES6中对异步操作的封装Promise
// 参数：fn，必须
// 参数类型：Function
// 返回值：无返回值
;function MyPromise(fn) {
    // 成功操作和失败操作
    this.resolveActiver = function() {  };
    this.rejectActiver = function() {  };

    // methods 方法：往MyPromise构造函数的原型对象上添加方法，方法名不能重复
    // 参数：name(方法名)，必须；fn(方法函数)，必须；
    // 参数类型：name, String；fn，Function；
    // 返回值：Boolean
    function methods(name, fn) {
        if(typeof name === "string" && typeof fn === "function") {
            if (MyPromise.prototype[name] == null) {
                MyPromise.prototype[name] = fn;
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    // resolve 方法：异步操作成功时执行的动作
    // 参数：可选
    // 参数类型：任意类型
    // 返回值：无
    methods("resolve", function(param) {
        setTimeout(function () {
            this.resolveActiver(param);
        }.bind(this), 0);
    });

    // reject 方法：异步操作失败时执行的动作
    // 参数：可选
    // 参数类型：任意类型
    // 返回值：无
    methods("reject", function(param) {
        setTimeout(function () {
            this.rejectActiver(param);
        }.bind(this), 0);
    });

    // then 方法：设置异步操作成功和失败时执行的动作
    // 参数：resolve(成功)，必须；reject(失败)，可选；
    // 参数类型：Function
    // 返回值：返回MyPromise实例对象，支持链式写法
    methods("then", function(resolve, reject) {
        if (reject == undefined) {
            reject = resolve;
        }
        
        if (typeof resolve === "function") {
            this.resolveActiver = resolve;
        }
        
        if (typeof reject === "function") {
            this.rejectActiver = reject;
        }
        
        return this
    });
    
    // catch 方法：设置异步操作失败后的动作，与 then 方法的第二个参数效果一样，同时使用时 catch 方法设置的优先
    // 参数：reject ，必须
    // 参数类型：Function    // 返回值： 无
    // 返回值：返回MyPromise实例对象，支持链式写法
    methods("catch", function(reject) {
        if (typeof reject === "function") {
            this.rejectActiver = reject;
        }
        
        return this
    });


    // 只有在参数正确的情况下才执行
    if (typeof fn === "function" && MyPromise.prototype.resolve != null && MyPromise.prototype.reject != null) {
        fn(this.resolve.bind(this), this.reject.bind(this));
    }
}