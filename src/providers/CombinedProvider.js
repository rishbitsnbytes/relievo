import { BtnProvider, BoxShadowProvider } from "../contexts/";

const CombinedProvider = ({ children }) => {
  return (
    <BtnProvider>
      <BoxShadowProvider>{children}</BoxShadowProvider>
    </BtnProvider>
  );
};

export { CombinedProvider };
