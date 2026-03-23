import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CounterContextProvider from "./context/CounterContext";
import Contact from "./routes/Contact";
import Home from './routes/Home';
import SearchExample1 from "./routes/SearchExample1";
import SearchExample2 from "./routes/SearchExample2";

export default function App() {
  return (
    <CounterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search1" element={<SearchExample1 />} />
            <Route path="/search2" element={<SearchExample2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  )
}
