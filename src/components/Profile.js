import React, { Component } from 'react';

const profile = {
  name: 'นาย YWC',
  lastname: '#15',
  missions: [
    { 
      name: 'mission',
      activeDate: {
        startDate: '01/01/2018',
        endDate: '07/01/2018'
      },
      detail: 'blah blah'

    }
  ]
};

class Profile extends Component {
  render() {
    return (
      <div>
        Profile
      </div>
    );
  }
}

export default Profile;
