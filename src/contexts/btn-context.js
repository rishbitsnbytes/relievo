import React, { useReducer, createContext, useContext } from "react";
import { btnReducerFunction } from "reducers";

const initialBtnState = {
  buttonId: "",
  buttonText: "Primary",
  buttonColor: "#6a6696",
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
    vertical: 15,
    horizontal: 30,
  },
  boxShadow: {
    vertical: 0,
    horizontal: 0,
    blurRadius: 2,
    spreadRadius: 1,
    color: "#d7d7d9",
  },
  hover: {
    buttonColor: "#5c4f8c",
    fontColor: "#ffffff",
    borderColor: "#6a6696",
  },
};

const btnContext = createContext(initialBtnState);

const BtnProvider = ({ children }) => {
  const [btnState, btnDispatch] = useReducer(
    btnReducerFunction,
    initialBtnState
  );

  return (
    <btnContext.Provider value={{ btnState: { ...btnState }, btnDispatch }}>
      {children}
    </btnContext.Provider>
  );
};

const useBtn = () => useContext(btnContext);

export { useBtn, BtnProvider, initialBtnState };
