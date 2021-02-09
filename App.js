//메인 파일
import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0; //todo의 index

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '', //TextInput의 현재 state저장할 값
      todos: [], //todo들
      type: 'All', //현재 보고 있는 todo의 타입
    };
    this.submitTodo = this.submitTodo.bind(this); //메서드를 생성자 내 클래스에 바인딩
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  inputChange(inputValue) {
    //전달 받은 inputValue의 값을 이용해서 state를 갱신
    console.log('Input Value :', inputValue);
    this.setState({inputValue});
  }

  submitTodo() {
    //todo목록에 항목을 추가
    // inputValue가 비어있는지 공백만 있는지 확인하고 비어있으면 아무것도 하지 않고 반환
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      //비어있지 않으면 todo변수 생성, title...객체 등
      title: this.state.inputValue,
      todoIndex,
      conplete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo]; //새로운 todo를 기존 배열에 추가
    this.setState({todos, inputValue: ''}, () => {
      //state지정
      console.log('state: ', this.state); //상태가 설정되면 콜백함수 전달
    });
  }

  toggleComplete(todoIndex) {
    //todo들 중에서 index로 todo찾아서 complet를 현재와 반대되게
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({todos});
  } //완료누르면 완료로 전환

  deleteTodo(todoIndex) {
    //전달된 인덱스의 todo를 제외한 모든 todo들 반환해서 state를 나머지 todo들로 재지정
    let {todos} = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({todos});
  } //todo삭제

  setType(type) {
    this.setState({type});
  }

  render() {
    const {inputValue, todos, type} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          {/*Input.js에게 넘겨주기*/}
          <TodoList
            type={type}
            todos={todos}
            deleteTodo={this.deleteTodo}
            toggleComplete={this.toggleComplete}
          />
          <Button submitTodo={this.submitTodo} />
          {/*Button.js에 넘겨주기 */}
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
