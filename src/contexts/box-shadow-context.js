import React, { useReducer, createContext, useContext } from "react";
import { boxShadowReducerFunction } from "reducers";

const initialBoxShadowState = {
  inset: false,
  boxId: "",
  boxText: "box",
  boxColor: "#121212",
  bgColor: "#212121",
  font: {
    type: "Gruppo",
    color: "#ffffff",
    size: 20,
    weight: 400,
  },
  border: {
    size: 1,
    color: "#6a6696",
    radius: 1,
  },
  padding: {
    vertical: 50,
    horizontal: 50,
  },
  boxShadow: {
    vertical: 0,
    horizontal: 0,
    blurRadius: 2,
    spreadRadius: 1,
    color: "#dddddd",
  },
  hover: {
    vertical: 0,
    horizontal: 0,
    blurRadius: 2,
    spreadRadius: 1,
    color: "#dddddd",
  },
};

const boxShadowContext = createContext(initialBoxShadowState);

const BoxShadowProvider = ({ children }) => {
  const [boxShadowState, boxShadowDispatch] = useReducer(
    boxShadowReducerFunction,
    initialBoxShadowState
  );

  return (
    <boxShadowContext.Provider
      value={{ boxShadowState: { ...boxShadowState }, boxShadowDispatch }}
    >
      {children}
    </boxShadowContext.Provider>
  );
};

const useBoxShadow = () => useContext(boxShadowContext);

export { useBoxShadow, BoxShadowProvider, initialBoxShadowState };
