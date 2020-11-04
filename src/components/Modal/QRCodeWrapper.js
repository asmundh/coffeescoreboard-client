import React from 'react';
import * as QRCode from 'easyqrcodejs';
import { string } from 'prop-types';


const qrLogo = require('../../../public/circledCoffeeIcon.svg').default;

class QRCodeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.qrcode = React.createRef();
  }

  componentDidMount() {
    const { urlToLink } = this.props;
    const options = {
      text: `http://localhost:3000/${urlToLink}`,
      width: 250,
      height: 250,
      colorDark: '#422B08',
      colorLight: '#DDAD74',
      correctLevel: QRCode.CorrectLevel.H,
      dotScale: 0.9,
      logo: qrLogo,
      logoBackgroundTransparent: true,
      logoWidth: 72,
      logoHeight: 72,
    };
    new QRCode(this.qrcode.current, options);
  }

  render() {
    return (
      <>
        <div ref={this.qrcode} />
      </>
    );
  }
}

QRCodeWrapper.propTypes = {
  urlToLink: string.isRequired,
};

export default QRCodeWrapper;
