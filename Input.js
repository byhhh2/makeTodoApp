//Input.js
//TextInput
import React from 'react';
import {ScrollView, View, Text, StyleSheet, TextInput} from 'react-native';

const Input = (
  {inputValue, inputChange}, //인자로 받아옴 (부모 App.js)
) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="what needs to be done?" //입력하기 전에 보여주는
      placeholderTextColor="#CACACA"
      selectionColor="#666666" // TextInput의 커서 스타일
      onChangeText={inputChange} //  텍스트가 바뀔 때 마다 함수 적용, 쓸때마다 App.js의 state바뀜
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2, //그림자 넣기
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Input;
