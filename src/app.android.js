import React from 'react'; // eslint-disable-line app
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	//change this
	statusBarTextColorScheme: 'light', // eslint-disable-line app
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'movieapp.Movies',
		title: 'Movies',
		navigatorStyle,
		leftButtons: [
			{
				id: 'sideMenu'
			}
		]
	},
	drawer: {
		left: {
			screen: 'movieapp.Drawer'
		}
	}
});
