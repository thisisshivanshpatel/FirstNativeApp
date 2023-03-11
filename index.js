/**
 * @format
 */

import { AppRegistry } from "react-native";
// import App from './App';
// import AppPro from "./AppPro";
import { name as appName } from "./app.json";
import App2Pro from "./App2Pro";

AppRegistry.registerComponent(appName, () => App2Pro);
