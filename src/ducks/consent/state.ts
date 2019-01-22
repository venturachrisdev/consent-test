import ConsentFormEntity from "../../core/entities/ConsentFormEntity";
import ConsentItemEntity from "../../core/entities/ConsentItemEntity";

export interface IConsentState {
  form: ConsentFormEntity;
  items: ConsentItemEntity[];
  loading: boolean;
  loaded: boolean;
  error?: string;
}

export const consentInitialState: IConsentState = {
  form: new ConsentFormEntity('', '', [
    new ConsentItemEntity(1, 'Example item'),
  ]),
  items: [],
  loading: false,
  loaded: false,
};
