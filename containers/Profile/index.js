import React from 'react';
import { View } from 'react-native';
// import InvisionWebView from '../../components/InvisionWebView';
import Screen from '../../components/Screen';

const Profile = () => (
  <Screen>
    <View />
  </Screen>
);

export default Profile;

// import React from 'react';
// import { inject, observer } from 'mobx-react/native';
// import { bool, object } from 'prop-types';
// import SignIn from '../SignIn/';
// import Info from './Info';
// import Screen from '../../components/Screen';
//
// const Profile = ({ userIsSignedIn, navigation }) => (
//   <Screen navigation={navigation}>
//     {
//       userIsSignedIn ? <Info /> : <SignIn />
//     }
//   </Screen>
// );
//
// Profile.propTypes = {
//   userIsSignedIn: bool.isRequired,
//   navigation: object.isRequired,
// };
//
// export default inject(
//   ({ store }) => ({ userIsSignedIn: store.userIsSignedIn }),
// )(
//   observer(Profile),
// );
