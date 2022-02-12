import * as React from 'react';
import { match } from 'react-router-dom';
import { ITeam } from '../../types';
import Team from './Team';

interface IProps {
  match: match<Record<string, string>>;
  teams: ITeam[];
}

const SelectedTeam: React.FunctionComponent<IProps> = ({
  match,
  teams,
}) => {
  if (!match) throw new Error('no match');

  const { params } = match;

  if (!params) throw new Error('no match params');

  const { teamId: selectedTeamId } = params;

  if (!selectedTeamId) throw new Error(`undefined teamId`);

  const selectedTeam = teams.find(
    (t: ITeam) => t.id === selectedTeamId,
  );

  if (!selectedTeam) {
    throw new Error(
      `Invalid could not find team with id {selectedTeamId}`,
    );
  }

  return <Team team={selectedTeam} />;
};

export default SelectedTeam;
