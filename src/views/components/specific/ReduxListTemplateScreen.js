import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { users } from '../../../data/locals/mockData';
import { userLogoutRequest } from '../../../process/actions';

class ReduxListTemplateScreen extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
    const userLogin = state.userLogin;
    return {
        userLogin
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userLogoutRequest
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxListTemplateScreen);

