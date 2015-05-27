'use strict';

var classNames = require('classnames');
var Link = Router.Link;
var menuStore = require('./menuStore');
//var menuAction = require('./menuAction');

module.exports = React.createClass({
	displayName: 'menu',
	mixins: [menuStore],

	render: function() {
		var selected = this.props.routeName,
			selectedGroupIndex = null,
			unfold;

		var groups = this.props.groups.map(function(group, i) {
			if ( selectedGroupIndex == null ) {
				$.each(group.items, function(_, item) {
					if ( item.name == selected ) {
						selectedGroupIndex = group;
						unfold = true;
						return false;
					}
				});
			} else {
				unfold = false;
			}

			return <MenuGroup {...group} unfold={unfold} selected={selected} key={i}/>;
		});

		return (
			<div className="manu">
				{groups}
			</div>
		);
	}
});


var MenuGroup = React.createClass({
	render: function() {
		var selected = this.props.selected;
		var classes = classNames({
			'group': true,
			'unfold': this.props.unfold
		});

		var items = this.props.items.map(function(item, i) {
			return <MenuItem {...item}
							 key={i}
				             selected={selected}
				             _toggleFold={this._toggleFold}/>;
		}, this);

		return (
			<div className={classes}>
				{items}
			</div>
		);
	}
});

var MenuItem = React.createClass({
	_handleClick: function() {
		//menuAction.menuStateChange(this.props.name);
	},

	render: function() {
		return (
			<li>
				<Link to={this.props.name} activeClassName="is-selected">{this.props.label}</Link>
			</li>
		);
	}
});