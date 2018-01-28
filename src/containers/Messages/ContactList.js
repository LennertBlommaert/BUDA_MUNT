import React from 'react';
import {Text, View} from 'react-native';
import { inject, observer } from 'mobx-react/native';

const ContactList = () => {

  return (
    <ScrollView>
        {
          contacts.sort(
              (a, b) => isoToTimeStamp(b.created) - isoToTimeStamp(a.created)
            ).map(
              c => (
                <Text>{c.firstName}</Text>
              )
            )
        }
    </ScrollView>
  );

};

ContactList.propTypes = {};

export default inject(
  ({store}) => {
    return {contacts: store.contacts};
  }
)(
  observer(ContactList)
);
