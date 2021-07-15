import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { SideBarProvider } from "./contexts/SideBarContext";

import ServicesPage from "./pages/ServicesPage/";
import SchedulePage from "./pages/SchedulePage/";
import AdminPage from "./pages/AdminPage/";
import ConfigPage from "./pages/ConfigPage/";
import CustomersPage from "./pages/CustomersPage";

function App() {
   return (
      <BrowserRouter>
         <SideBarProvider>
            <Switch>
               <Route path="/" exact component={ServicesPage} />
               <Route
                  path="/:serviceId/schedule"
                  exact
                  component={SchedulePage}
               />
               <Route path="/:serviceId/admin" exact component={AdminPage} />
               <Route path="/:serviceId/config" exact component={ConfigPage} />
               <Route
                  path="/:serviceId/customers"
                  exact
                  component={CustomersPage}
               />
            </Switch>
         </SideBarProvider>
      </BrowserRouter>
   );
}

export default App;
