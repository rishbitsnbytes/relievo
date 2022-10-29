import { BtnProvider } from "../contexts/";

const CombinedProvider = ({ children }) => {
    return <BtnProvider>
        {children}
    </BtnProvider>
}

export { CombinedProvider };