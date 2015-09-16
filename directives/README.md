#内置指令


## ng-href
## ng-src
## ng-disabled
## ng-checked
## ng-readonly
## ng-selected
## ng-class
## ng-style

## ng-app
任何具有ng-app属性的dom元素将被标记为$rootScope的起始点


## ng-controller

## ng-include

```
<div ng-include='/templates/templateName.html'
    ng-controller='myCtrl' ng-init='name="world"'>
    hello {{name}}
</div>

```

## ng-switch

```
<input type="text" ng-model="person.name"/>
<div ng-switch on='person.name'>
    <p ng-switch-default>add the winner is</p>
    <h1 ng-switch-when='Ari'>{{person.name}}</h1>
</div>
```

## ng-repeat

## ng-view

## ng-controller

## ng-if
ng-if和ng-show（隐藏dom）的区别是真正生成或移除节点