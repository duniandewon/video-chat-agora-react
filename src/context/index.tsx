import {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useReducer,
  ReactNode,
} from "react";

interface IUiContext {
  pannelWidth: number;
  isChatPanelOpen: boolean;
  isParticipantsPanelOpen: boolean;
}

type ACTIONTYPE =
  | { type: "toggleChatPanel" }
  | { type: "toggleParticipantsPanel" };

export const UiContext = createContext<{
  state: IUiContext;
  dispatch: Dispatch<ACTIONTYPE>;
} | null>(null);

const reducer = (state: IUiContext, action: ACTIONTYPE) => {
  const newState = {};
  switch (action.type) {
    case "toggleChatPanel":
      return {
        ...state,
        isChatPanelOpen: !state.isChatPanelOpen,
        isParticipantsPanelOpen: false,
      };

    case "toggleParticipantsPanel":
      return {
        ...state,
        isChatPanelOpen: false,
        isParticipantsPanelOpen: !state.isParticipantsPanelOpen,
      };

    default:
      return state;
  }
};

const UiProvider = ({ children }: { children: ReactNode }) => {
  const InitialState = {
    isChatPanelOpen: false,
    isParticipantsPanelOpen: false,
    pannelWidth: 400,
  };

  const [state, dispatch] = useReducer(reducer, InitialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

const useUiContext = () => {
  const context = useContext(UiContext);

  if (!context)
    throw new Error("useUiContext should be used inside the UiProvider.");

  return context;
};

const toggleChatPanel = (dispatch: Dispatch<ACTIONTYPE>) =>
  dispatch({ type: "toggleChatPanel" });
const toggleParticipantsPanel = (dispatch: Dispatch<ACTIONTYPE>) =>
  dispatch({ type: "toggleParticipantsPanel" });

export { UiProvider, useUiContext, toggleChatPanel, toggleParticipantsPanel };
