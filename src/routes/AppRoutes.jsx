import { Routes, Route } from "react-router-dom";

// Page imports
import {
  HomePage,
  NotFoundPage,
  BtnGeneratorPage,
  BoxShadowGeneratorPage,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/btn" element={<BtnGeneratorPage />} />
      <Route path="/box-shadow" element={<BoxShadowGeneratorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export { AppRoutes };
