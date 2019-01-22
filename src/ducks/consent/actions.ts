import {
  FETCH_CONSENT_ITEMS,
  FETCH_CONSENT_ITEMS_SUCCESS,
  FETCH_CONSENT_ITEMS_FAIL,
} from './constants';
import ConsentItemEntity from "../../core/entities/ConsentItemEntity";

export interface FetchingConsentItems {
  type: FETCH_CONSENT_ITEMS;
}

export interface FetchConsentItemsSuccess {
  type: FETCH_CONSENT_ITEMS_SUCCESS;
  payload: ConsentItemEntity[];
}

export interface FetchConsentItemsFail {
  type: FETCH_CONSENT_ITEMS_FAIL;
  error: string;
}

export type FetchConsentItemsAction =
  | FetchingConsentItems
  | FetchConsentItemsSuccess
  | FetchConsentItemsFail;
