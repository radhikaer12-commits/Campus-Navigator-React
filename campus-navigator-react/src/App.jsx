import LandingPage from "./components/LandingPage";
import CampusNavigator from "./components/CampusNavigator";
import { Routes, Route } from "react-router-dom"
import CampusLegend from "./components/CampusLegend";

import "./App.css";
import "./components/howtouse.css";
import "./components/navigationui.css";
import "./components/mylocation.css";
import "./components/searchfilter.css";
import "./components/mapthemepalette.css";
import "./components/filters.css";
import "./components/infopanel.css";
import "./components/ui/toast.css";
import "./components/ui/modal.css";
// import "./components/mobilemenu.css";
import "./components/notifications.css";
import "./components/recentlocations.css";
import Error from "./components/ui/Error";

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/campus-navigator' element={<CampusNavigator />}></Route>

      <Route
        path="/campuslegend"
        element={<CampusLegend />}
      />

      <Route
        path="/campuslegend/feedback"
        element={<CampusLegend />}
      />

      <Route
        path="*"
        element={<Error />}
      />

    </Routes>
  );
}
export default App;