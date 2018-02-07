import React from 'react';
import { string } from 'prop-types';
import BodyText from '../../../components/BodyText';

const OtherUserName = ({ name, firstName }) => (
  <BodyText fontSize={17}>{firstName} {name}</BodyText>
);

OtherUserName.propTypes = {
  name: string.isRequired,
  firstName: string.isRequired,
};

export default OtherUserName;
