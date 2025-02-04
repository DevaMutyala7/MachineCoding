import { TodoDiv, TodoWrapper } from "./styledElements";
import { Todo as TodoType } from "./types";
import "./index.css";

function Todo({
  todo,
  updateTodo,
  deleteTodo,
}: {
  todo: TodoType;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <TodoWrapper>
      <TodoDiv>
        <input
          type="radio"
          checked={todo.isCompleted}
          onChange={() => updateTodo(todo.id)}
        />
        <p className={todo.isCompleted ? "completed" : ""}> {todo.todo}</p>
      </TodoDiv>
      <div style={{ cursor: "pointer" }} onClick={() => deleteTodo(todo.id)}>
        X
      </div>
    </TodoWrapper>
  );
}

export default Todo;
