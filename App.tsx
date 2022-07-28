/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FunctionComponent, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createIncrement} from './src/increment';

const {increment, getLogMessage} = createIncrement(1);

const LogMessage: FunctionComponent<{
  text: string;
  logNumber: number;
}> = ({text, logNumber}) => {
  return (
    <Text>
      {logNumber} : {text}
    </Text>
  );
};

const App = () => {
  const [value, setValue] = useState(0);
  const [logMessages, setLogMessages] = useState<
    {id: number; message: string}[]
  >([{id: value, message: getLogMessage()}]);

  const onIncrementPress = () => {
    const newValue = increment();
    setValue(newValue);

    const logMessage = getLogMessage();
    setLogMessages(prev => [...prev, {id: newValue, message: logMessage}]);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Button title="Increment" onPress={onIncrementPress} />
      <Text style={styles.resultText}>Value: {value}</Text>
      <Text style={styles.logText}>Logs :</Text>
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        style={styles.list}
        data={logMessages}
        renderItem={({item, index}) => (
          <LogMessage text={item.message} key={item.id} logNumber={index} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  resultText: {
    fontSize: 36,
    fontWeight: '400',
    marginBottom: 12,
    alignSelf: 'center',
    marginTop: 12,
  },
  logText: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 12,
    marginTop: 12,
  },
  list: {
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default App;
