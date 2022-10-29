import { Routes, Route } from "react-router-dom";

// Page imports
import { HomePage, NotFoundPage, BtnGeneratorPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/btn" element={<BtnGeneratorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export { AppRoutes };
