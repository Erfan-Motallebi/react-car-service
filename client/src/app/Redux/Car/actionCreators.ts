import { Dispatch } from "react";
import { IActions } from "./carReducer";
import { PICK_DATE, RETURN_DATE } from "./Constants";

export const dateCreator = (date: Date, choice: "pick" | "return") => {
  return (dispatch: Dispatch<IActions>) => {
    if (choice === "pick") {
      dispatch({
        type: PICK_DATE,
        payload: date,
      });
    }
    if (choice === "return") {
      dispatch({
        type: RETURN_DATE,
        payload: date,
      });
    }
  };
};
