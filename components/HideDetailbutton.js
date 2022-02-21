import React from 'react';

const HideDetailbutton = ({ setDetail }) => {
  return (
    <div>
      <button className='secondary-button w-28' onClick={() => setDetail()}>
        Hide Detail
      </button>
    </div>
  );
};

export default HideDetailbutton;
