import * as React from 'react';
import { match } from 'react-router-dom';
import { IChannel } from '../../types';
import Channel from './Channel';

interface IProps {
  match: match<Record<string, string>>;
  channels: IChannel[];
}

const SelectedChannel: React.FunctionComponent<IProps> = ({
  match,
  channels,
}) => {
  if (!channels) throw new Error('no channels');
  if (!match) throw new Error('no match');

  const { params } = match;

  if (!match) return <p>No match params</p>;

  const { channelId: selectedChannelId } = params;

  if (!selectedChannelId) return <p>Invalid channelId</p>;

  const selectedChannel = channels.find(
    (c: IChannel) => c.id === selectedChannelId,
  );

  if (!selectedChannel) {
    return (
      <div>
        <p>Could not find channel with id {selectedChannelId}</p>
        <pre>{JSON.stringify(channels, null, '  ')}</pre>
      </div>
    );
  }

  return <Channel channel={selectedChannel} />;
};

export default SelectedChannel;
