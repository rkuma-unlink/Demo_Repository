import { Route, Routes } from "react-router-dom";
import "./App.css";

import GenerateLink from "./pages/GenerateLink";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<GenerateLink />} />
      </Routes>
    </>
  );
};
export default App;
