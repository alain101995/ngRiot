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
}
