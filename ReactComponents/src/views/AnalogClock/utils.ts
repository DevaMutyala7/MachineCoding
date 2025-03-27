type ClockState = {
  hours: number;
  minutes: number;
  seconds: number;
};

export enum ActionType {
  UPDATE_CLOCK = "UPDATE_CLOCK",
}

type ClockAction = {
  type: ActionType;
};

function clockReducer(state: ClockState, action: ClockAction): ClockState {
  switch (action.type) {
    case ActionType.UPDATE_CLOCK:
      let newHours = state.hours;
      if (newHours === 11 && state.minutes === 0) {
        newHours = 0;
      } else if (newHours < 11 && state.minutes === 0) {
        newHours += 1;
      }
      let newSeconds = state.seconds === 59 ? 0 : state.seconds + 1;
      let newMinutes = state.seconds === 59 ? state.minutes + 1 : state.minutes;

      return {
        ...state,
        minutes: newMinutes,
        seconds: newSeconds,
        hours: newHours,
      };

    default:
      return state;
  }
}

export { clockReducer };
