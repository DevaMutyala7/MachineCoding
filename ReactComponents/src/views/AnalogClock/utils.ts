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

function updateMinSec(time: number) {
  return time === 59 ? 0 : time + 1;
}

function clockReducer(state: ClockState, action: ClockAction): ClockState {
  switch (action.type) {
    case ActionType.UPDATE_CLOCK:
      let newHours = state.hours;
      if (newHours === 11) {
        newHours = 0;
      } else {
        newHours += 1;
      }
      let newSeconds = updateMinSec(state.seconds);
      let newMinutes = updateMinSec(state.minutes);

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
