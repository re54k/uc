'use strict';

//var menuAction = require('./menuAction');

module.exports = Reflux.createStore({
	//listenables: menuAction,

	getDefaultProps: function() {
		return {
			groups: [{
				title: '监控数据',
				icon: '',
				items: [{
					label: '新激活登录用户',
					name: 'newActivatedUser'
				}, {
					label: '已激活登录用户',
					name: 'pastActivatedUser'
				}, {
					label: '消费数据',
					name: 'consumptionData'
				}, {
					label: '金币数据',
					name: 'goldData'
				}]
			}, {
				title: '用户数据',
				icon: '',
				items: [{
					label: '用户画像',
					name: 'userFigure'
				}, {
					label: '用户查询',
					name: 'userSearch'
				}]
			}]
		};
	}

	//onMenuStateChange: function(state) {
	//	this.trigger(state);
	//}
});