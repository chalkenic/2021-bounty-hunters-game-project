import { CssBaseline, ThemeProvider } from "@material-ui/core";
import "./App.css";
import AppTheme from "./styles/AppTheme";
import useStylesBase from "./styles/StylesBase";
import clsx from "clsx";
import AppRouter from "./pages/AppRouter";

function App() {
  const classesBase = useStylesBase();

  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <div className={clsx(classesBase.root, classesBase.overrides)}>
          <main>
            <AppRouter />
          </main>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
