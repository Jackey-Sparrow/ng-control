
# ����ngIf��ָ���ʱ��

    ���ng-if=true, �����domԪ�������ng-enter,ng-enter-active

    ���ng-if=false, �����domԪ�������ng-leave,ng-leave-active

```
 �¼�   ��ʼ��     �ս���            ����css��仯��ָ��

-enter .ng-enter .ng-enter-active  ngRepeat ngInclude ngIf ngView

-leave .ng-enter .ng-leave-active  ngRepeat ngInclude ngIf ngView

-move  .ng-move  .ng-move-active   ngRepeat

```

```
 �¼�              ��ʼ��           �ս���                 ����css��仯��ָ��

-hide an element  .ng-hide-add    .ng-hide-add-active     ngShow ngHide

-show an element  .ng-hide-remove .ng-hide-remove-active  ngShow ngHide

-adding a class   .Class-add      .CLASS-add-active       ngClass and class="{{expression}}"
  to an element

-removing a class .Class-remove    .CLASS-remove-active   ngClass and class="{{expression}}"
  from an element

```