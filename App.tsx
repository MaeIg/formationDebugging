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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Operations from './src/operations';

const NumberInput: FunctionComponent<{
  title: string;
  onChange: (value: number) => void;
}> = ({title, onChange}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={text => {
          onChange(Number(text));
        }}
      />
    </View>
  );
};

const App = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [multiplyResult, setMultiplyResult] = useState(0);
  const [substractResult, setSubtractResult] = useState(0);

  const onMultiplyPress = () => {
    setMultiplyResult(Operations.multiply(value1, value2));
  };

  const onSubstractPress = () => {
    setSubtractResult(Operations.substract(value1, value2));
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NumberInput
          title="Value 1"
          onChange={value => {
            setValue1(value);
          }}
        />
        <NumberInput
          title="Value2"
          onChange={value => {
            setValue2(value);
          }}
        />
        <Button title="Multiply" onPress={onMultiplyPress} />
        <Button title="Subtract" onPress={onSubstractPress} />
        <Text style={styles.resultText}>Multiply result: {multiplyResult}</Text>
        <Text style={styles.resultText}>
          Subtract result: {substractResult}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    height: 36,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  resultText: {
    fontSize: 36,
    fontWeight: '400',
    marginBottom: 12,
    alignSelf: 'center',
    marginTop: 36,
  },
});

export default App;
