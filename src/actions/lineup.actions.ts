import { PARTY_JOINED, PARTY_LEFT } from "../constants";
import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../store";

@Injectable()
export class LineupActions {
  constructor(
    private _ngRedux: NgRedux<IAppState>) {}

  joinLine = ({ numberOfPeople, partyName }) => {
      return this._ngRedux.dispatch({
        type: PARTY_JOINED,
        payload: {
          partyId: 0,
          numberOfPeople,
          partyName
        }
      });
  };

  leaveLine = ({ partyId }) => {
    return this._ngRedux.dispatch({
      type: PARTY_LEFT,
      payload: {
        partyId: parseInt(partyId, 10)
      }
    });
  }
}
