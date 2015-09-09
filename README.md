# ng-basic

# angular in IE

# how to reduce watchers
- use {{::xx}} instead of ng-bind in one-way binding, ng-bind has one watcher than {{:;xx}}
- use expression in the below situation
```
<img data-ng-src="xxxxx{{isCheck?'xx-checked':'xx-unchecked'}}" />
```
- if you can , try to use css to control the show/hide
- remove useless scope in directive
- try to use ng-if

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

##$parse(expression)
##$eval
##$evalAsync()
##attrs.$observe
