import React from 'react';

const ListCard = ({ data }) => {
  return (
    <div className='h-56 w-full bg-blue-300 border-2 border-black rounded-lg mb-2 shadow-md'>
      <div className='grid grid-cols-12'>
        <div className='col-span-4'>
          <img alt='' src={data?.image?.url} height='100px' width='100px' />
        </div>
        <div className='col-span-8 place-items-center'>
          <table className='table-fixed'>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{data?.name}</td>
              </tr>
              <tr>
                <td>Temperament</td>
                <td>:</td>
                <td>{data?.temperament}</td>
              </tr>
              <tr>
                <td>Origin</td>
                <td>:</td>
                <td>{data?.temperament}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
