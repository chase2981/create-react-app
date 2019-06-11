import * as FlexPlugin from "flex-plugin";
import { RootContainerFlexPlugin } from './components/RootContainer/RootContainerFlexPlugin';
import { isHostedByTwilio, isProduction } from './environments/environment';
import { loadStyles } from './loadStyles';


if (isHostedByTwilio()) {
  loadStyles();
}

if (isProduction() && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js').then(function (reg) {
  });
}

FlexPlugin.loadPlugin(RootContainerFlexPlugin);

