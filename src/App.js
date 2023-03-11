import { ColorModeContext, tokens, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";

function App() {
  const [colorMode, theme] = useMode();
  // const colors = tokens(theme.palette.colorMode);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <div className="app">
            <main className="content">
              <Topbar />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
