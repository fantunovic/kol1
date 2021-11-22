import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input text here"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <View style={styles.button}>
      <Button title="DODAJ" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
   
    alignItems: 'center',
    padding: 10
   
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 100
  },

  button: {
    padding: 10
  }

});

export default GoalInput;