import React from "react";
import UseState from "../components/UseStates/UseStateWithLocalStorage";
import Counter from "../components/UseStates/Counter";
import TodoList from "../components/UseStates/TodoListUsingArray";
import ProfileWithObject from "../components/UseStates/ProfileWithObject";
import ShoppingList from "../components/UseStates/ShoppingList";

const UseStateLayout = () => {
  return (
    <div>
      <UseState />
      <Counter />
      <TodoList />
      <ProfileWithObject />
      <ShoppingList />
    </div>
  );
};

export default UseStateLayout;
