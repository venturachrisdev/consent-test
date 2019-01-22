import { FetchConsentItemsAction } from "./actions";
import {
  FETCH_CONSENT_ITEMS,
  FETCH_CONSENT_ITEMS_FAIL,
  FETCH_CONSENT_ITEMS_SUCCESS
} from "./constants";
import {consentInitialState, IConsentState } from "./state";


const reducer = (state: IConsentState = consentInitialState, action: FetchConsentItemsAction) => {
  switch(action.type) {
    case FETCH_CONSENT_ITEMS:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case FETCH_CONSENT_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        loaded: true,
      };
    case FETCH_CONSENT_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
