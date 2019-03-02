import flyd from 'flyd';
import { zeroPatchFcn, IState, IPatchFcn, zeroState } from './types';
import { convertTemp } from './helpers';

const update = flyd.stream(zeroPatchFcn);

const actions = {
  setPrecipitations(active: boolean) {
    update(state => ({
      ...state,
      conditions: {
        ...state.conditions,
        precipitations: active,
      },
    }));
  },

  setSky(value: string) {
    update(state => ({
      ...state,
      conditions: {
        ...state.conditions,
        sky: value,
      },
    }));
  },

  incrementTemperature(amount: number) {
    update(state => ({
      ...state,
      temperature: {
        ...state.temperature,
        value: state.temperature.value + amount,
      },
    }));
  },

  toggleTemperatureUnits() {
    update(state => {
      const value = state.temperature.value;
      const newUnits = state.temperature.units === 'C' ? 'F' : 'C';
      const newValue = convertTemp(value, newUnits);
      return {
        ...state,
        temperature: {
          ...state.temperature,
          value: newValue,
          units: newUnits,
        },
      };
    });
  },
};

const getState = flyd.scan(
  (state: IState, doPatch: IPatchFcn) => doPatch(state),
  zeroState,
  update,
);

const store = {
  actions,
  getState,
};

export default store;
