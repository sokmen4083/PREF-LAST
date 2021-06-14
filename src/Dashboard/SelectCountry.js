import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { CountryDropdown} from 'react-country-region-selector';
import { withTranslation } from 'react-i18next'



class SelectCountry extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }


  render () {
    const { t } = this.props;
    const { country } = this.state;
    return (
      <div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('country')}</Form.Label>
            <CountryDropdown>
            <Form.Control name="usercountry" value={country} onChange={(val) => this.selectCountry(val)} />
            </CountryDropdown>
          </Form.Group>
        
      </div>
    );
  }
}

export default withTranslation()(SelectCountry)