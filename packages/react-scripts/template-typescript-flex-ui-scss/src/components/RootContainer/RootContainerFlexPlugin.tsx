import { FlexPlugin } from "flex-plugin";
import * as React from "react";
import RootContainer from "./RootContainer";
import * as Flex from "@twilio/flex-ui";
import { Manager } from '@twilio/flex-ui';
import rootReducer from '../../reducers';
import { isProduction } from '../../environments/environment';
import { updateConfig } from '../../core/updateConfig';

declare global {
  interface Window {
    devToolsExtension: () => any
  }
}

interface Props { }

interface State {

}

export class RootContainerFlexPlugin extends FlexPlugin {
  state: State = {
    // Form fields

  };

  constructor(props: Readonly<Props>) {
    super("RootContainerFlexPlugin");
    console.log('IS_PRODUCTION', isProduction());
  }

  init(flex, manager: Manager) {
    this.updateConfiguration(manager);
    this.replaceReducer(manager);
    this.registerPlugins(manager);
  }

  protected registerPlugins(manager: Manager) {
    Flex.RootContainer.Content.add(
      // <Provider store={manager.store}>
      <RootContainer key="demo-component" store={manager.store} manager={manager} />,
      // </Provider>,
      {
        sortOrder: -1
      }
    );
  }

  protected replaceReducer(manager: Manager) {
    /* replaceReducer() is the key to writing to flex's react-redux store!!! */
    manager.store.replaceReducer(rootReducer);
  }

  protected updateConfiguration(manager: Manager) {
    manager.updateConfig(updateConfig({}));
  }
}
