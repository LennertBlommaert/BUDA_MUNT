import React from 'react';
import { string } from 'prop-types';
import HeaderText from '../../../components/HeaderText';

const DemandName = ({ name }) => (
  <HeaderText fontSize={20}>{name}</HeaderText>
);

DemandName.propTypes = {
  name: string.isRequired,
};

export default DemandName;
