import React from 'react';

const DetailButton = ({ data, setDetail }) => {
  return (
    <div>
      <button className='primary-button w-full' onClick={() => setDetail(data)}>
        See Detail
      </button>
    </div>
  );
};

export default DetailButton;
