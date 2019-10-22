import React, { Component } from 'react';
import { arrayOf, string, func } from 'prop-types';
import './RadioButtons.css';

class RadioButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: null,
    };
  }

  handleSelected = (selected) => {
    const { selectedButton } = this.state;
    const { onChoice } = this.props;
    if (selected === selectedButton) {
      this.setState({
        selectedButton: null,
      });
      onChoice(null);
    } else {
      this.setState({
        selectedButton: selected,
      });
      onChoice(selected);
    }
    console.log(selectedButton);
  }

  render() {
    const { buttonOptions } = this.props;
    const { selectedButton } = this.state;
    return (
      <div className="custom-buttons-wrapper">
        {
          buttonOptions.map((option, i) => (
            <p
              className={`custom-button${option === selectedButton ? '-selected' : ''}`}
              role="button"
              onClick={() => this.handleSelected(option)}
              onKeyDown={() => this.handleSelected(option)}
              tabIndex={i}
            >
              {option}
              <br />
            </p>
          ))
        }
      </div>
    );
  }
}

// const renderButton = option => (
//   <div>
//       option
//     <br />
//   </div>
// );

RadioButtons.propTypes = {
  buttonOptions: arrayOf(string).isRequired,
  onChoice: func.isRequired,
};


export default RadioButtons;
