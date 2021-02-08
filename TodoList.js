//TodoList.js
//todo들 나열

import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos}) => {
  //App에서 todo배열 가져옴
  todos = todos.map((todo, i) => {
    //각각의 todo에 대한 새로운 Todo 컴포넌트를 만들고
    //각 Todo컴포넌트의 속성으로 todo객체를 전달
    return <Todo key={todo.todoIndex} todo={todo} />; //키는 인덱스 (가상 DOM으로 diff가 구해지면서 바뀌는 항목을 리액트가 식별하는데 도움 )
  });
  return <View>{todos}</View>;
};

export default TodoList;
