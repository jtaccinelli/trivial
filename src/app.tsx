import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import { store, persistor } from "~/store";
import Router from "~/routes";

function App() {
  return (
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Router />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  );
}

export default App;
