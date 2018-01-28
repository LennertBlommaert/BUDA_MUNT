import React from 'react';
import { Text, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react/native';

const DemandList = () => {

  return (
    <ScrollView>
        {
          demands.sort(
              (a, b) => isoToTimeStamp(b.created) - isoToTimeStamp(a.created)
            ).map(
              d => (
                <Text>{d.firstName}</Text>
              )
            )
        }
    </ScrollView>
  );

};

DemandList.propTypes = {};

export default inject(
  ({store}) => {
    return {demands: store.demands};
  }
)(
  observer(DemandList)
);
