import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import { NotesRouter } from "./src/router/NotesRouter";
import { Provider } from "react-redux";
import { store } from "./src/slices/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" />
        <NativeRouter>
          <NotesRouter></NotesRouter>
        </NativeRouter>
      </Provider>
    </>
  );
}
