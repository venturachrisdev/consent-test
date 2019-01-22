import {Dispatch} from "redux";
import {FetchConsentItemsAction} from "./actions";
import { FETCH_CONSENT_ITEMS, FETCH_CONSENT_ITEMS_SUCCESS } from "./constants";
import ConsentItemEntity from "../../core/entities/ConsentItemEntity";

export const fetchConsentItems = () => {
  return (dispatch: Dispatch<FetchConsentItemsAction>) => {
    dispatch({ type: FETCH_CONSENT_ITEMS });
    // simulate an http call
    dispatch({
      type: FETCH_CONSENT_ITEMS_SUCCESS,
      payload: [
        new ConsentItemEntity(1, 'Receive newsletter'),
        new ConsentItemEntity(2, 'Be shown targeted ads'),
        new ConsentItemEntity(3, 'Contribute to anonymous visit statistics'),
      ],
    })
  }
};
