import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Congrats from "./pages/Congrats";
import Odysseus from "./pages/Odysseus";
import Penelope from "./pages/Penelope";
import Telemachus from "./pages/Telemachus";
import Athena from "./pages/Athena";
import Poseidon from "./pages/Poseidon";
import Zeus from "./pages/Zeus";
import Hermes from "./pages/Hermes";
import Calypso from "./pages/Calypso";
import Circe from "./pages/Circe";
import Sirens from "./pages/Sirens";

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

      {/* readable routes 
      <Route path="/challenge/rat" element={<Rat />} />
      <Route path="/challenge/cat" element={<Cat />} />
      <Route path="/challenge/fox" element={<Fox />} />
      <Route path="/challenge/owl" element={<Owl />} />
      <Route path="/challenge/wolf" element={<Wolf />} />
      <Route path="/challenge/bear" element={<Bear />} />
      <Route path="/challenge/lynx" element={<Lynx />} />
      <Route path="/challenge/seal" element={<Seal />} />
      <Route path="/challenge/raven" element={<Raven />} />
      <Route path="/challenge/puma" element={<Puma />} /> */}
      

      <Route path="/challenge/odysseus" element={<Odysseus />} />
<Route path="/challenge/penelope" element={<Penelope />} />
<Route path="/challenge/telemachus" element={<Telemachus />} />
<Route path="/challenge/athena" element={<Athena />} />
<Route path="/challenge/poseidon" element={<Poseidon />} />
<Route path="/challenge/zeus" element={<Zeus />} />
<Route path="/challenge/hermes" element={<Hermes />} />
<Route path="/challenge/calypso" element={<Calypso />} />
<Route path="/challenge/circe" element={<Circe />} />
<Route path="/challenge/sirens" element={<Sirens />} />


      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
