AngularJS 省份城市联动
=================

类似淘宝收货地址的所在地。过于仓促，暂时先这样子吧。


使用说明
=================

添加`angular.city.select`模块到你的应用。

```javascript
angular.module('myApp', ['angular.city.select', ...]);
```

html标记
```html
<city-select ng-model="item.city"></city-select>
```

ng-model必须是一个带有`*.city`对象，另一方面，对于初始化，支持两种方式分别是：

```javascript
// 按名称顺序，当未找到时中止。
$scope.item = {
	city: [ '安徽', '芜湖', '弋江' ]
};

// 按区域ID
$scope.item.city = '340203';
```

bower install
=================

```bash
$ bower install angular-city-select --save
```
