import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  //state === {count : number}
  //action === {type: 'increment' || 'decrement', paylord: 1 }

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.paylord };
    case "decrement":
      return { ...state, count: state.count - action.paylord };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", paylord: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", paylord: 1 });
        }}
      />
      <Text>Cunrrent counter : {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

/* -------------------

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Cunrrent counter : {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;



---------------------- */
