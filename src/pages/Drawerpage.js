import { createDrawerNavigator,createStackNavigator } from 'react-navigation-drawer';
//import OverviewPage from './src/pages/OverviewPage';
import React from 'react';
import { View } from 'native-base';






const Drawer = createDrawerNavigator(
  {
    Home:{ screen: Home},
    Profile:{ screen: Profile},
    Settings:{ screen: Settings}

  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
  }
)
const AppNavigator = createStackNavigator(
  {
    Drawer : {screen: Drawer},
  },
  {
    initialRouteName: "Drawer",
  }
)
const AppContainer = createAppContainer(AppNavigator);


export default class Drawerpage extends React.Component{ 
  render(){

    return (
      <View>
      <AppContainer />
      </View>
    );
  }

}