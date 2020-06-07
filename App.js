/*This is an Example of Sending Text SMS in React Native*/
import React from 'react';
import {
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';

import SmsAndroid from 'react-native-get-sms-android';

export default function App() {
  const sendSMS = async smsNumber => {
    // let phoneNumbers = {
    //   addressList: ['+639491431584'],
    // };

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          message: 'InfoPlus needs access to your storage to read a file.',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission has already been granted
        SmsAndroid.autoSend(
          // JSON.stringify(phoneNumbers),  //Puewede multi recipients
          smsNumber,
          'Why is it sending this message twice?? ',
          fail => {
            console.log('Failed with this error: ' + fail);
          },
          success => {
            console.log('SMS sent successfully');
          },
        );
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          let smsNumber = '09491431584';
          Alert.alert(
            'Hold on!',
            'Do you want to send SMS to ' + smsNumber + ' ?',
            [
              {
                text: 'No',
                onPress: () => {
                  return null;
                },
                style: 'cancel',
              },
              {text: 'YES', onPress: () => sendSMS(smsNumber)},
            ],
          );
        }}>
        <Text style={{fontSize: 30, color: 'white'}}>
          Best SMS App!!! {':('}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
