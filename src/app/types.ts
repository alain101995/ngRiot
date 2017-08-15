export interface IRunePages {
  id: number;
  name: string;
  current: boolean;
  slots: ISlot[];
}

export interface ISlot {
  runeSlotId: number;
  runeId: number;
}

export interface ILeague {
  name: string;
  tier: string;
  queue: string;
  entries: IEntries[];
}

export interface IEntries {
  playerOrTeamId: string;
  playerOrTeamName: string;
  leaguePoints: number;
  rank: string;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export interface IChampmData {
playerId: number;
championId: number;
championLevel: number;
championPoints: number;
lastPlayTime: number;
championPointsSinceLastLevel: number;
championPointsUntilNextLevel: number;
chestGranted: boolean;
tokensEarned: number;
}

export interface IPlayerMatches {
  matches: IMatches[];
}
export interface IMatches {
  platformId: string;
  gameId: number;
  champion: number;
  queue: number;
  season: number;
  timestamp: number;
  role: string;
  lane: string;
}
