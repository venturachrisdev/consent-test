import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import ItemEntity from 'src/core/entities/ItemEntity';
import UserEntity from 'src/core/entities/UserEntity';
import ConsentForm from 'src/components/ConsentForm';

interface IHomeProps extends RouteComponentProps {
  fetchConsentItems: () => {};
  items: ItemEntity[];
  loading: boolean;
  created: boolean;
  form: UserEntity;
  changeEmail: (value: string) => void;
  changeName: (value: string) => void;
  selectConsentOption: (id: number, checked: boolean) => void;
  createConsent: (user: UserEntity) => void;
}

/**
 * Home page component
 */
export default class Home extends React.PureComponent<IHomeProps> {

  componentDidMount(): void {
    const { fetchConsentItems } = this.props;
    fetchConsentItems();
  }

  onFormOptionChecked = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { selectConsentOption } = this.props;
    const { value, checked } = ev.target;
    selectConsentOption(parseInt(value, 10), checked);
  }

  onChangeConsentEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { changeEmail } = this.props;
    changeEmail(ev.target.value);
  }

  onChangeConsentName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { changeName } = this.props;
    changeName(ev.target.value);
  }

  onFormSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const { createConsent, form } = this.props;
    createConsent(form);
  }

  componentDidUpdate(prevProps: Readonly<IHomeProps>): void {
    const { created, history } = this.props;
    /*
     * If the user consent was successfully created,
     * go to /users page
     */
    if (!prevProps.created && created) {
      history.push('/users');
    }
  }

  render() {
    const { items, form } = this.props;
    return (
      <>
        <ConsentForm
          consentOptions={items}
          onOptionChecked={this.onFormOptionChecked}
          onChangeName={this.onChangeConsentName}
          onChangeEmail={this.onChangeConsentEmail}
          email={form.email}
          name={form.name}
          selectedItems={form.agreeTo}
          onSubmit={this.onFormSubmit}
        />
      </>
    );
  }
}
