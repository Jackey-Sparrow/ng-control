
# 触发ngIf等指令的时候，

    如果ng-if=true, 则会在dom元素上添加ng-enter,ng-enter-active

    如果ng-if=false, 则会在dom元素上添加ng-leave,ng-leave-active

```
 事件   初始类     终结类            触发css类变化的指令

-enter .ng-enter .ng-enter-active  ngRepeat ngInclude ngIf ngView

-leave .ng-enter .ng-leave-active  ngRepeat ngInclude ngIf ngView

-move  .ng-move  .ng-move-active   ngRepeat

```

```
 事件              初始类           终结类                 触发css类变化的指令

-hide an element  .ng-hide-add    .ng-hide-add-active     ngShow ngHide

-show an element  .ng-hide-remove .ng-hide-remove-active  ngShow ngHide

-adding a class   .Class-add      .CLASS-add-active       ngClass and class="{{expression}}"
  to an element

-removing a class .Class-remove    .CLASS-remove-active   ngClass and class="{{expression}}"
  from an element

```