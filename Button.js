//Button.js
//submit 버튼
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const Button = ({submitTodo}) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight //뷰 감싸는거 가능
      style={styles.button}
      underlayColor="#efefef" //버튼 누르면 바뀌는 색상
      onPress={submitTodo}>
      <Text style={styles.submit}>Submit</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end', //justifyContent축과 수직인 축으로 정렬하는 방식
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});

export default Button;
