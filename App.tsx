/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Button} from 'react-native';
import {useMoonPaySdk} from '@moonpay/react-native-moonpay-sdk';

function App(): JSX.Element {
  const {openWithInAppBrowser} = useMoonPaySdk({
    sdkConfig: {
      flow: 'buy',
      environment: 'sandbox',
      params: {
        apiKey: 'pk_test_key',
      },
    },
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => {
          openWithInAppBrowser();
        }}
        title="Launch Moon Pay"
      />
    </View>
  );
}

export default App;
