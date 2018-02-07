import React from 'react';
import { inject, observer } from 'mobx-react/native';
import BodyText from '../../../../components/BodyText';

const TextualIndicator = ({ votes, maxProjectVotes }) => (
  <BodyText>
    {votes} / {maxProjectVotes} stemmen
  </BodyText>
);

TextualIndicator.propTypes = {};

export default inject(
  ({ store }) => ({
    maxProjectVotes: store.maxProjectVotes,
  }),
)(
  observer(TextualIndicator),
);
