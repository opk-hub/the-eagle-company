import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryForm from "./components/EntryForm";
import RaceTrack from "./components/RaceTrack";
import Result from "./components/Result";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryForm />} />
        <Route path="/race-track" element={<RaceTrack />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
