import * as React from 'react';
import ConsentItemEntity from "../../core/entities/ConsentItemEntity";
import ConsentFormEntity from "../../core/entities/ConsentFormEntity";
import ConsentForm from '../../components/ConsentForm';

interface IHomeProps {
  fetchConsentItems: () => {},
  items: ConsentItemEntity[],
  loading: boolean,
  form: ConsentFormEntity,
}

export default class Home extends React.PureComponent<IHomeProps> {

  componentDidMount(): void {
    const { fetchConsentItems } = this.props;
    fetchConsentItems();
  }

  onFormOptionChecked = (id: string, checked: boolean) => {
    console.log(`Index ${id} was ${checked ? 'checked' : 'unchecked'}`);
  }

  render() {
    const consentOptions = [
      { id: 1, text: 'Receive newsletter' },
      { id: 2, text: 'Be shown targeted ads' },
      { id: 3, text: 'Contribute to anonymous visit statistics' },
    ];

    return (
      <>
        <p>Hello Home</p>
        <ConsentForm
          consentOptions={consentOptions}
          onOptionChecked={this.onFormOptionChecked}
        />
      </>
    );
  }
}
