import React from 'react';
import { Header } from 'semantic-ui-react';

class UserWelcome extends React.Component {
    render() {
        return <Header as='h1' textAlign='center'>User must have an assigned role to view the Guide!</Header>
    }
}

export default UserWelcome;