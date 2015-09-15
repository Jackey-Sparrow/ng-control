# ng-basic

# angular in IE

-angularJs1.2 support ie8

-angularJs1.3 not support ie8

-在连接处将id="ng-app"添加到根元素，使用ng-app属性
```
<!doctype html>
  <html xmlns:ng="http://angularjs.org" id="ng-app" ng-app="myApp">
    ...
  </html>

```

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

html```

<input ng-model="expressionTest" placeholder="enter an expression"/>
{{expressionResult}}
```

js```
 $scope.$watch('expressionTest', function (newVal, oldVal, scope) {
    if (newVal !== oldVal) {
        var parseFn = $parse(newVal);
        $scope.expressionResult = parseFn(scope);
    }
});

```
##$interpolate

使用：在emailBody里面属于{{toWho}},会在previewText得到toWho的值

html```
<input ng-model="toWho">
<textarea ng-model="emailBody"></textarea>
<pre>{{previewText}}</pre>
```

js```
 $scope.$watch('emailBody', function (body) {
    if (body) {
        var template = $interpolate(body);
        $scope.previewText = template({toWho: $scope.toWho});
    }
});

```


##$eval
##$evalAsync()
##attrs.$observe
