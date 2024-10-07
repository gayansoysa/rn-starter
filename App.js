import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/screens/ComponentsScreen";
import ListScreen from "./src/screens/screens/ListScreen";
import ImageScreen from "./src/screens/screens/ImageScreen";
import CounterScreen from "./src/screens/screens/CounterScreen";

const navigator = createStackNavigator(
  //decides what to show on screen any given time
  {
    //Route objects
    Home: HomeScreen,
    Components: ComponentsScreen,
    Listscreen: ListScreen,
    Imagescreen: ImageScreen,
    Counterscreen: CounterScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My First Starter App",
    },
  }
);

export default createAppContainer(navigator);
