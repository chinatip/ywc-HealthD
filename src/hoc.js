import React from 'react';
import { compose } from 'recompose'; 

import { MISSIONS, USERS } from './data';

export const WithUserData = (Component) => {
  return class UserData extends React.Component {
    constructor(props) {
      super();

      const data = USERS;

      this.state = { data };
    }

    handleUpdate(updateData) {
      this.setState({
        data: updateData
      });
    }

    render() {
      const { data } = this.state;

      return <Component users={data} onUserDataUpdate={this.handleUpdate} {...this.props} />;
    }
  }
};

export const WithMissionData = (Component) => {
  return class MissionData extends React.Component {
    constructor(props) {
      super();

      const data = MISSIONS;

      this.state = { data };
    }

    handleUpdate(updateData) {
      this.setState({
        data: updateData
      });
    }

    render() {
      const { data } = this.state;

      return <Component missions={data} onMissionDataUpdate={this.handleUpdate}  {...this.props} />;
    }
  }
};

export const WithData = compose(WithUserData, WithMissionData);