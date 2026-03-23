import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CounterContextProvider from "./context/CounterContext";
import Contact from "./routes/Contact";
import Home from './routes/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
