import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/general/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="about" element={<div>About Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
