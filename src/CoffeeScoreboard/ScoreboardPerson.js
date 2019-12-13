import React from 'react';
import './ScoreboardPerson.css';
import {
  shape, number, string,
} from 'prop-types';

const coffeesTractedText = (amount) => {
  if (amount === 1) {
    return ' kanne traktet';
  }
  return ' kanner traktet';
};

const getCoffeeIcon = () => (
  <svg width="37" height="43" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="37" height="43" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0" transform="translate(-0.0810811) scale(0.00181588 0.0015625)" />
      </pattern>
      <image id="image0" width="640" height="640" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAYAAAAMzckjAAAABHNCSVQICAgIfAhkiAAAIABJREFUeF7t3X2sLVla1/HbQysvArMHGRhQnGJCeI99EDBDlMxpfMGXhN4TUPEPvLv/8IXE2EdDMEjMXANBYqJzMJqoIXZ1RCOGOGcEAxHhng4QUIi9W0UQDHcPLzJhIn1aQECE8fl1n9197j37rWrXb9Vatb4rqdx799711LM+a9WqtavWOfexOxSHwGUEfYcjMDERQAABBBBAYBCBxwaJUmiQNxSaN2kjgAACCCCAAAII9BRgAtgTjt0QQAABBBBAAIFSBZgAltpy5I0AAggggAACCPQUYALYE47dEEAAAQQQQACBUgWYAJbacuSNAAIIIIAAAgj0FGAC2BOO3RBAAAEEEEAAgVIFmACW2nLkjQACCCCAAAII9BRgAtgTjt0QQAABBBBAAIFSBZgAltpy5I0AAggggAACCPQUYALYE47dEEAAAQQQQACBUgWYAJbacuSNAAIIIIAAAgj0FGAC2BOO3RBAAAEEEEAAgVIFmACW2nLkjQACCCCAAAII9BRgAtgTjt0QQAABBBBAAIFSBZgAltpy5I0AAggggAACCPQUYALYE47dEEAAAQQQQACBUgWYAJbacuSNAAIIIIAAAgj0FGAC2BOO3RBAAAEEEEAAgVIFmACW2nLkjQACCCCAAAII9BRgAtgTjt0QQAABBBBAAIFSBR4vNfEK834x6nxWYb2pMgIIIFCSwHkk+8TACdc+/p+E57sHNq0+HBPAcrrAVaR6WU66ZIoAAghUKaCxeujC+D+0KPHu8AiYToAAAggggAACCFQmwASwsganuggggAACCCCAABNA+gACCCCAAAIIIFCZABPAyhqc6iKAAAIIIIAAAkwA6QMIIIAAAggggEBlAkwAK2twqosAAggggAACCDABpA8ggAACCCCAAAKVCTABrKzBqS4CCCCAAAIIIMAEkD6AAAIIIIAAAghUJsAEsLIGp7oIIIAAAggggAATQPoAAggggAACCCBQmQATwMoanOoigAACCCCAAAJMAOkDCCCAAAIIIIBAZQJMACtrcKqLAAIIIIAAAggwAaQPIIAAAggggAAClQkwAayswakuAggggAACCCDABJA+gAACCCCAAAIIVCbABLCyBqe6CCCAAAIIIIAAE0D6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" />
    </defs>
  </svg>
);
const ScoreboardPerson = (props) => {
  const { person, index } = props;
  return (
    <div className="ScoreboardPerson">
      <div className="scoreboard-text">{index + 1}</div>
      <div className="scoreboard-text">{person.name}</div>
      <div className="score">
        <div className="scoreText">
          {person.kaffeScore}
        x
        </div>
        {getCoffeeIcon()}
      </div>
    </div>
  );
};


ScoreboardPerson.propTypes = {
  person: shape(
    {
      name: string,
      rfid: string,
      score: number,
      rank: number,
      litresBrewed: number,
      gramsOfCoffee: number,
    },
  ).isRequired,
  index: number.isRequired,
};

export default ScoreboardPerson;
