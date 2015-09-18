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

# seo in Angular
web爬虫对于javascript富文本客户端应用无能为力，为了让应用的运行过程中给爬虫提供支持，
我们需要在头部添加meta标签。
这个元标记会让爬虫请求一个带有空的转义片段参数的连接，服务器根据请求返回对应的html代码片段
```
<meta name='fragment' content='!'/>
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

```

<input ng-model="expressionTest" placeholder="enter an expression"/>
{{expressionResult}}

```


```
 $scope.$watch('expressionTest', function (newVal, oldVal, scope) {
    if (newVal !== oldVal) {
        var parseFn = $parse(newVal);
        $scope.expressionResult = parseFn(scope);
    }
});

```

##$interpolate

```
$interpolate(text, [mustHaveExpression], [trustedContext], [allOrNothing])
test: 需要编译的字符串
mustHaveExpression：如果这个参数的值被设置为true,那么上面的text中必须含有嵌入其中的表达式，不然将会返回null,而不是我们预期的interpolation function
trustedContext[string] 如果提供了这个参数值，那么在返回相应的函数之前，将会使用$sce.getTrusted(interpolatedResult, trustedContext)对返回的结果做处理。
allOrNothing[boolean] 如果这个参数的值被设置为true，那么只有text中所有嵌入的表达式没有一个被转换为undefined的时候才会返回我们期望的函数。

```

使用：在emailBody里面属于{{toWho}},会在previewText得到toWho的值

```
<input ng-model="toWho">
<textarea ng-model="emailBody"></textarea>
<pre>{{previewText}}</pre>

```

```
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

## injector

```
var myModule = angular.module('myModule', []);
myModule.service('myService', function() {
			this.my = 0;
});

var herModule = angular.module('herModule', []);
herModule.service('herService', function() {
			this.her = 1;
});

var injector = angular.injector(["myModule","herModule"]);
alert(injector.get("myService").my);
alert(injector.get("herService").her);

```

angular中三种声明依赖的方式

```
// 创建myModule模块、注册服务
var myModule = angular.module('myModule', []);
myModule.service('myService', function() {
			this.my = 0;
});

// 获取injector
var injector = angular.injector(["myModule"]);

//inference(推荐)
injector.invoke(function(myService){alert(myService.my);});

//annotation
function explicit(serviceA) {alert(serviceA.my);};
explicit.$inject = ['myService'];
injector.invoke(explicit);

//inline
injector.invoke(['myService', function(serviceA){alert(serviceA.my);}]);

```
##跨域 CORS cross origin resources sharing 
