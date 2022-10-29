import React, { useReducer, createContext, useContext } from "react";
import { btnReducerFunction } from "reducers";

const initialBtnState = {
  buttonId: "",
  buttonText: "Primary",
  buttonColor: "#44c767",
  bgColor: "#212121",
  font: {
    type: "Arial",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },
  border: {
    size: 1,
    color: "#18ab29",
    radius: 25,
  },
  padding: {
    vertical: 16,
    horizontal: 31,
  },
  boxShadow: {
    vertical: 1,
    horizontal: 1,
    blurRadius: 5,
    spreadRadius: 1,
    color: "#44c767",
  },
  hover: {
    buttonColor: "#5cbf2a",
    fontColor: "#ffffff",
    borderColor: "#18ab29",
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
