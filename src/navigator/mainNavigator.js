import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4708Navigator from '../features/BlankScreen4708/navigator';
import BlankScreen4707Navigator from '../features/BlankScreen4707/navigator';
import BlankScreen4706Navigator from '../features/BlankScreen4706/navigator';
import BlankScreen4675Navigator from '../features/BlankScreen4675/navigator';
import EmailAuth4667Navigator from '../features/EmailAuth4667/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen4708: { screen: BlankScreen4708Navigator },
BlankScreen4707: { screen: BlankScreen4707Navigator },
BlankScreen4706: { screen: BlankScreen4706Navigator },
BlankScreen4675: { screen: BlankScreen4675Navigator },
EmailAuth4667: { screen: EmailAuth4667Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
