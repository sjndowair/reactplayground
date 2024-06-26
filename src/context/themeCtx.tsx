import {
  ReactNode,
  useCallback,
  useReducer,
  useMemo,
  createContext,
  FC,
} from "react";

interface IThemeState {
  isDark: boolean;
}

const initialState: IThemeState = {
  isDark: false,
};

type TThemeAction = {
  type: "TOGGLE_THEME";
};

export const ThemeContext = createContext(initialState);
ThemeContext.displayName = "ThemeContext";

const themeReducer = (
  state: IThemeState,
  action: TThemeAction
): IThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { isDark: !state.isDark };
    default:
      return state;
  }
};

export const ThemeModeProvider: FC<{
  children?: string | JSX.Element | ReactNode;
}> = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const toggleTheme = useCallback(() => {
    dispatch({ type: "TOGGLE_THEME" });
  }, [dispatch]);

  const value = useMemo(
    () => ({ ...state, toggleTheme }),
    [state, toggleTheme]
  );
  return (
    <ThemeContext.Provider value={value} {...props}></ThemeContext.Provider>
  );
};

interface IUseThemeProps extends IThemeState {
  toggleTheme(): void;
}

export const useTheme = () => {};
