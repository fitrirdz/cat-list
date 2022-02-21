import React from 'react';

const DescriptionBox = ({ data }) => {
  return (
    <div className='pb-4'>
      <h2 className='font-bold text-xl grid justify-items-center bg-orange-200'>
        Description
      </h2>
      <div className='w-3/4 mx-auto pt-2'>
        <p className='text-center'>{data}</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
