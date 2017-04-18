** 已经提供 [Angular2](https://github.com/cipchk/ngx-address) 版本，Angular1版本不再维护！ **



AngularJS 省份城市联动
=================

类似淘宝收货地址的所在地。过于仓促，暂时先这样子吧。

升级日志
=================
## v1.0.1 

1. 升级地址库为<a href="http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201401/t20140116_501070.html" target="_blank">最新县及县以上行政区划代码（截止2013年8月31日）</a>，去掉`省`、`自治区`等字眼。
2. 修复县区选中值累计问题。
3. 新增邮政编码。


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

onCitySelected 事件

```javascript
app.controller('myController', ['$scope', function($scope){

	$scope.$on('onCitySelected', function(event, item) {
        // item.cn[] 数组，和面板数量相对应。
        // item.id 区域ID
        // item.zip 邮政编码
	}
	
}]);
```

bower install
=================

```bash
$ bower install angular-city-select --save
```
