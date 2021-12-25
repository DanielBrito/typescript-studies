import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon id="invite" />
        <SettingsIcon id="settings" />
      </div>
    </Container>
  );
};

export default ChannelButton;
