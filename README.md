# ng-basic

# angular in IE

# how to reduce watchers

# some raw usage

## $rootScope.$$phase

angular内部判断状态标志位，用于标识当前是否处于digest状态

```
var phase = this.$root.$$phase;
   if (phase == '$apply' || phase == '$digest') {
       if (fn && ( typeof (fn) === 'function')) {
          fn();
       }
   } else {
       this.$apply(fn);
   }

```