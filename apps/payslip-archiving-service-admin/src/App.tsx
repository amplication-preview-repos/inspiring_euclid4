import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { PayslipList } from "./payslip/PayslipList";
import { PayslipCreate } from "./payslip/PayslipCreate";
import { PayslipEdit } from "./payslip/PayslipEdit";
import { PayslipShow } from "./payslip/PayslipShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"PayslipArchivingService"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="Admin"
            list={AdminList}
            edit={AdminEdit}
            create={AdminCreate}
            show={AdminShow}
          />
          <Resource
            name="Payslip"
            list={PayslipList}
            edit={PayslipEdit}
            create={PayslipCreate}
            show={PayslipShow}
          />
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
