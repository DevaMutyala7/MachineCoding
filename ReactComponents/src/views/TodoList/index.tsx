import React, { useState } from "react";
import { Todo as TodoType } from "./types";
import Todo from "./Todo";
import { MyInput, TodosWrapper } from "./styledElements";

function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todo, setTodo] = useState<string>();

  function updateTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setTodos((todos) => {
        return [
          ...todos,
          { id: Date.now(), todo, isCompleted: false } as TodoType,
        ];
      });
      setTodo("");
    }
  }

  function todoCompleted(id: number) {
    setTodos((todos: TodoType[]) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = true;
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <TodosWrapper>
      <MyInput
        name="todo"
        value={todo}
        onChange={updateTodo}
        onKeyDown={handleKeyDown}
      />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            updateTodo={todoCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </TodosWrapper>
  );
}

export default TodoList;
