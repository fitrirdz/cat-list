import React from 'react';

const DetailButton = ({ data, setDetail }) => {
  return (
    <div>
      <button className='primary-button w-28' onClick={() => setDetail(data)}>
        See Detail
      </button>
    </div>
  );
};

export default DetailButton;
