import React from 'react';
import Xicon from '../icons/Xicon';

const Win = () => {
    return (
      <div className="score">
        <p>you win!</p>
        <h3 className='score__title'>
          {" "}
          <Xicon /> Takes the round{" "}
        </h3>
        <div className="score_btns">
          <button className="btn btn-sm ">Quit</button>
          <button className="btn btn-sm btn-yellow">Next Round</button>
        </div>
      </div>
    );
};

export default Win;