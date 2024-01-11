import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/Routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
