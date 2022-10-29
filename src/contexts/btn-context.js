import React, { useState, createContext, useContext } from "react";
import { buttonsData } from "../data/btnData";

const btnContext = createContext({ btnsData: [] });

const BtnProvider = ({ children }) => {

    const initialState = {
        btnText: buttonsData[0]?.buttonText,
        btnId: buttonsData[0]?.buttonId,
    };

    const [btnComp, setBtnComp] = useState(initialState);

    const handleTextChange = (e) => {
        setBtnComp({ ...btnComp, btnText: e.target.value })
    }

    return <btnContext.Provider
        value={{ btnComp, handleTextChange }}>
        {children}
    </btnContext.Provider>
}

const useBtn = () => useContext(btnContext);

export { useBtn, BtnProvider };