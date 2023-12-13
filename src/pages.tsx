import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/HomePage";

export default function Pages() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}
