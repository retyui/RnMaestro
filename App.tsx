import React from "react";
import { TouchableOpacity, View, Text, Pressable } from "react-native";

function App() {

  return <View style={{ padding: 30 }}>
    <View style={{height:100}}/>
    <TouchableOpacity>
      <Text>Hi</Text>
      <View style={{ width: 10, height: 10, backgroundColor: "red" }} />
      <Text>there</Text>
      <View style={{ width: 10, height: 10, backgroundColor: "red" }} />
      <Text>again</Text>
    </TouchableOpacity>
    <View style={{height:50}}/>
    <Pressable>
      <Text>Hi</Text>
      <View style={{ width: 20, height: 20, backgroundColor: "gold" }} />
      <Text>there</Text>
      <View style={{ width: 10, height: 10, backgroundColor: "gold" }} />
      <Text>again</Text>
    </Pressable>
    <View style={{height:50}}/>
    <TouchableOpacity accessible={false}>
      <Text>Hi</Text>
      <View style={{ width: 20, height: 20, backgroundColor: "blue" }} />
      <Text>there</Text>
      <View style={{ width: 10, height: 10, backgroundColor: "blue" }} />
      <Text>again</Text>
    </TouchableOpacity>
    <View style={{height:50}}/>
    <Pressable accessible={false}>
      <Text>Hi</Text>
      <View style={{ width: 20, height: 20, backgroundColor: "pink" }} />
      <Text>there</Text>
      <View style={{ width: 10, height: 10, backgroundColor: "pink" }} />
      <Text>again</Text>
    </Pressable>
  </View>;

}

export default App;
