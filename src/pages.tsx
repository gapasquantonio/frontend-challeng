import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./routes/HomePage";
import NotFound from "./routes/NotFound";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
