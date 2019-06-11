import * as React from "react";
import { Manager, ChatSessionState, WorkerAttributes, RootContainer, Actions, FlexState, ITask, StateHelper, TaskReservationStatus, TaskHelper } from '@twilio/flex-ui';

interface Props {
  session?: ChatSessionState.ChatSessionState,
  worker?: WorkerAttributes,
  leadCard?: any,
  updateLeadCard: (newVal) => void;
  manager: Manager;
  state: FlexState;
}

interface State {
}

export class RootContainerComponent extends React.Component<Props, State> {


  constructor(public props) {
    super(props);
    Actions.addListener("beforeLogout", payload => this.logout(payload));
    // Actions.invokeAction('NavigateToView', { viewName: 'task-lookup' });
  }

  logout(payload) {

  }

  render() {
    return null;
  }

}
