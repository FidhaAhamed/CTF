import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Congrats from "./pages/Congrats";
import Rat from "./pages/Rat";
import Cat from "./pages/Cat";
import Fox from "./pages/Fox";
import Owl from "./pages/Owl";
import Wolf from "./pages/Wolf";
import Bear from "./pages/Bear";
import Lynx from "./pages/Lynx";
import Seal from "./pages/Seal";
import Raven from "./pages/Raven";
import Puma from "./pages/Puma";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/congrats" element={<Congrats />} />

      {/* numeric aliases 
      <Route path="/challenge/1" element={<Rat />} />
      <Route path="/challenge/2" element={<Cat />} />
      <Route path="/challenge/3" element={<Fox />} />
      <Route path="/challenge/4" element={<Owl />} />
      <Route path="/challenge/5" element={<Wolf />} />
      <Route path="/challenge/6" element={<Bear />} />
      <Route path="/challenge/7" element={<Lynx />} />
      <Route path="/challenge/8" element={<Seal />} />
      <Route path="/challenge/9" element={<Raven />} />
      <Route path="/challenge/10" element={<Puma />} /> */}

      {/* readable routes */}
      <Route path="/challenge/rat" element={<Rat />} />
      <Route path="/challenge/cat" element={<Cat />} />
      <Route path="/challenge/fox" element={<Fox />} />
      <Route path="/challenge/owl" element={<Owl />} />
      <Route path="/challenge/wolf" element={<Wolf />} />
      <Route path="/challenge/bear" element={<Bear />} />
      <Route path="/challenge/lynx" element={<Lynx />} />
      <Route path="/challenge/seal" element={<Seal />} />
      <Route path="/challenge/raven" element={<Raven />} />
      <Route path="/challenge/puma" element={<Puma />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
