import { ThemeModeProvider } from "./context/themeCtx";
import styled from "styled-components";

const Heding = styled.h1`
  color: red;
`;

function App() {
  // const isDark = useTheme();

  return (
    <div className="App">
      <Heding>hello world!</Heding>
    </div>
  );
}

export default App;
