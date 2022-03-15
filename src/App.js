import Status from "./components/Status";
import Content from "./components/Content.jsx";
import Card from "./components/Card";
import Persona from "./components/Persona";
import Title from "./components/Title";
import Footer from "./components/Footer";
import "./style.css"

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      // "'Gotham', sans-serif",
      "'Gotham Light', sans-serif",
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <base target="_blank"></base>
      <Card style={{ position: "relative" }}>
        <Status />
        <Title />
        <Content />
        <Persona />
        <Footer />
      </Card>
    </ThemeProvider>

  );
}

export default App;