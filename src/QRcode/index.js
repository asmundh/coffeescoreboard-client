import React, { Component } from 'react';
import { string } from 'prop-types';
import axios from 'axios';
import Header from '../Header';
import './QRcode.css';

const fetchQRcode = (url) => {
  console.log('Should fetch');
  axios.get(url).then(ctx => console.log(ctx.data));
};


class QRcodeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCode: undefined,
    };
  }

  componentDidMount() {
    console.log('TOTOTOT');
    fetchQRcode();
  }


  renderQrCode() {
    const { qrCode } = this.state;
    return (
      <div>
        {qrCode}
      </div>
    );
  }

  render() {
    const { rfid } = this.props;
    const urlToLink = `http://localhost:3000/register/${rfid}`;
    const qrParams = '&size=172x172&color=422b08&bgcolor=ddad74&format=svg';
    const qrApiLink = `https://api.qrserver.com/v1/create-qr-code/?${urlToLink}${qrParams}`;
    return (
      <>
        <Header headerTitle="Registrer ny koker" />
        <div className="registration-form">
          <p className="user-question">Scan kode</p>
          <p className="user-question">eller gå inn på</p>
          <p className="user-question">{urlToLink}</p>
        </div>
    </>
    );
  }
}

QRcodeWrapper.propTypes = {
  rfid: string.isRequired,
};

export default QRcodeWrapper;
