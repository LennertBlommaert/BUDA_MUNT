import React from 'react';
import InvisionWebView from '../../components/InvisionWebView';

const Profile = () => (
  <InvisionWebView screen={'SQFTXXX3WDY#/279033320_Personal_Profile'} />
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
