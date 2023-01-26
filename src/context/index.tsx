import {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useReducer,
  ReactNode,
} from "react";

interface IUiContext {
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
  switch (action.type) {
    case "toggleChatPanel":
      return { ...state, isChatPannelOpen: !state.isChatPanelOpen };

    case "toggleParticipantsPanel":
      return {
        ...state,
        isParticipantsPannelOpen: !state.isParticipantsPanelOpen,
      };

    default:
      return state;
  }
};

const UiProvider = ({ children }: { children: ReactNode }) => {
  const InitialState = {
    isChatPanelOpen: false,
    isParticipantsPanelOpen: false,
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
