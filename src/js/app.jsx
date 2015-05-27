'use strict';

//var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Menu = require('./components/menu/menu.jsx');
var NewActivatedUser = require('./pages/newActivatedUser.jsx');
var PastActivatedUser = require('./pages/pastActivatedUser.jsx');


var { Route, RouteHandler, Link, DefaultRoute, Redirect } = Router;

var App = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	displayName: 'app',
	render: function () {
		var pathname = this.context.router.getCurrentPathname();
		return (
			<div className="page">
				<header>1</header>
				<main>
					<side>
						<Menu routeName={pathname.slice(1)}/>
					</side>
					<div className="primary">
						<RouteHandler key={pathname}/>
					</div>
				</main>
			</div>
		);
	}
});



var routes = (
	<Route path="/" handler={App}>
		<Route name="newActivatedUser" handler={NewActivatedUser}/>
		<Route name="pastActivatedUser" handler={PastActivatedUser}/>
		<Route name="consumptionData" handler={PastActivatedUser}/>
		<Route name="goldData" handler={PastActivatedUser}/>
		<Route name="userFigure" handler={PastActivatedUser}/>
		<Route name="userSearch" handler={PastActivatedUser}/>

		<Redirect from="/" to="newActivatedUser"/>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.querySelector('body'));
});