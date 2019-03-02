export interface IState {
  conditions: {
    precipitations: boolean;
    sky: string;
  };
  temperature: {
    value: number;
    units: string;
  };
}

export type IPatchFcn = (state: IState) => IState;

export type IUpdateStream = flyd.Stream<IPatchFcn>;

// zero values //////////////////////////////////////////////////////////////////////

export const zeroState: IState = {
  conditions: {
    precipitations: true,
    sky: 'Sunny',
  },
  temperature: {
    value: 22,
    units: 'C',
  },
};

export const zeroPatchFcn: IPatchFcn = state => state;
