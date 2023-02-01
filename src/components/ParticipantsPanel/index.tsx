import Panel from "../Panel";

import { useUiContext } from "../../context";

const ParticipantsPanel = () => {
  const { state } = useUiContext();
  const { pannelWidth, isParticipantsPanelOpen } = state;

  return (
    <Panel width={pannelWidth} open={isParticipantsPanelOpen}>
      ParticipantsPanel
    </Panel>
  );
};

export default ParticipantsPanel;
