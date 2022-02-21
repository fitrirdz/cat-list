import React from 'react';

const HideDetailbutton = ({ setDetail }) => {
  return (
    <div>
      <button className='secondary-button w-full' onClick={() => setDetail()}>
        Hide Detail
      </button>
    </div>
  );
};

export default HideDetailbutton;
