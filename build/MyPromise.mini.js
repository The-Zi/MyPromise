function MyPromise(t){function e(t,e){return"string"==typeof t&&"function"==typeof e&&(null==MyPromise.prototype[t]&&(MyPromise.prototype[t]=e,!0))}this.resolveActiver=function(){},this.rejectActiver=function(){},e("resolve",function(t){setTimeout(function(){this.resolveActiver(t)}.bind(this),0)}),e("reject",function(t){setTimeout(function(){this.rejectActiver(t)}.bind(this),0)}),e("then",function(t,e){return void 0==e&&(e=t),"function"==typeof t&&(this.resolveActiver=t),"function"==typeof e&&(this.rejectActiver=e),this}),e("catch",function(t){return"function"==typeof t&&(this.rejectActiver=t),this}),"function"==typeof t&&null!=MyPromise.prototype.resolve&&null!=MyPromise.prototype.reject&&t(this.resolve.bind(this),this.reject.bind(this))}