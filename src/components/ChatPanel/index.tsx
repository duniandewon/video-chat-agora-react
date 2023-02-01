import Panel from "../Panel";

import { useUiContext } from "../../context";

const ChatPanel = () => {
  const { state } = useUiContext();
  const { pannelWidth, isChatPanelOpen } = state;

  return (
    <Panel width={pannelWidth} open={isChatPanelOpen}>
      ChatPanel
    </Panel>
  );
};

export default ChatPanel;
