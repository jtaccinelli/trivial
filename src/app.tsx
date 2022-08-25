import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "~/store";

function App() {
  return (
    <div className="mx-0">
      <PersistGate persistor={persistor}>
        <Provider store={store}>Test</Provider>
      </PersistGate>
    </div>
  );
}

export default App;
