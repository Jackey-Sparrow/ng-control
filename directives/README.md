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
$index
$first
$middle
$last
$even
$odd

## ng-view

## ng-controller

## ng-if
ng-if和ng-show（隐藏dom）的区别是真正生成或移除节点

## {{}}

## ng-bind

## ng-cloak
使用ng-bind会出现喧嚷元素的闪烁，可使用这个来消除

## ng-bind-template

## ng-model

## ng-show

## ng-hide

## ng-change

## ng-form

```
<form name='signUpForm' ng-submit='submit()' novalidate>

<botton type='submit' ng-disabled='signUpForm.$invalid'>Submit</botton>
</form>
```

## ng-click

## ng-select
<select ng-model="city" ng-options="city.name for city in cities"></select>

## ng-submit

## ng-class

## ng-attr-(suffix)