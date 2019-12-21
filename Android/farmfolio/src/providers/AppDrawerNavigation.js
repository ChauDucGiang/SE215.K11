import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../pages/home/home';
import OpenInvest from '../pages/open-invest/OpenIvest';
import Detail from '../pages/detail/detail';
import HowItWorks from '../pages/how-it-works/howItWorks';
import PastIvest from '../pages/past-invest/pastInvest';
import About from '../pages/about/about';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        drawerLabel: 'Trang chủ',
      },
    },
    OpenInvest: {
      screen: OpenInvest,
      navigationOptions: {
        header: null,
        drawerLabel: 'Đầu tư mở',
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        header: null,
        drawerLabel: 'Chi tiết',
      },
    },
    HowItWorks: {
      screen: HowItWorks,
      navigationOptions: {
        header: null,
        drawerLabel: 'Cách thức',
      },
    },
    PastInvest: {
      screen: PastIvest,
      navigationOptions: {
        header: null,
        drawerLabel: 'Đầu tư cũ',
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        header: null,
        drawerLabel: 'Về chúng tôi',
      },
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'right',
    contentOptions: {
      labelStyle: {
        fontSize: 20,
        paddingTop: 10,
      },
    },
  },
);

const AppDrawerNavigation = createAppContainer(MyDrawerNavigator);
export default AppDrawerNavigation;
