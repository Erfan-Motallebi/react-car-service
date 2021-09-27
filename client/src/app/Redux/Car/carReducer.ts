import { PICK_DATE, RETURN_DATE } from "./Constants";

export interface IActions {
  type: string;
  payload: any;
}

interface IStates {
  pickDate: Date;
  returnDate: Date;
}

const initialStates: IStates = {
  pickDate: new Date(),
  returnDate: new Date(),
};

export const carReducer = (states = initialStates, actions: IActions) => {
  switch (actions.type) {
    case PICK_DATE:
      return {
        ...states,
        pickDate: actions.payload,
      };
    case RETURN_DATE:
      return {
        ...states,
        returnDate: actions.payload,
      };
    default:
      return states;
  }
};
