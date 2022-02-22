import dynamic from 'next/dynamic';
import React from 'react';
const DescriptionBox = dynamic(() => import('./DescriptionBox'));
const DetailButton = dynamic(() => import('./DetailButton'));
const HideDetailbutton = dynamic(() => import('./HideDetailbutton'));
const Statistics = dynamic(() => import('./Statistics'));

const ListCard = ({ data, expand, setExpand }) => {
  return (
    <div className='h-full w-full shadow-lg mb-2'>
      <div className='grid grid-cols-12'>
        <div
          className='col-span-4 h-72 bg-orange-900 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url('${data?.image?.url}')` }}
        >
          {data?.image?.url == undefined && (
            <h3 className='w-full h-full grid place-items-center text-gray-200 text-lg'>
              No Images Available
            </h3>
          )}
        </div>
        <div className='col-span-8 grid content-center gap-2 bg-white px-4'>
          <h2 className='text-xl font-bold text-center'>{data?.name}</h2>
          <table className='table-fixed w-full'>
            <tbody>
              <tr>
                <td className='w-32 font-semibold'>Weight</td>
                <td className='w-2'>:</td>
                <td>{data?.weight?.metric} kg</td>
              </tr>
              <tr>
                <td className='w-32 font-semibold'>Life Span</td>
                <td className='w-2'>:</td>
                <td>{data?.life_span} years</td>
              </tr>
              <tr>
                <td className='w-32 font-semibold'>Temperament</td>
                <td className='w-2'>:</td>
                <td>{data?.temperament}</td>
              </tr>
              <tr>
                <td className='w-32 font-semibold'>Origin</td>
                <td className='w-2'>:</td>
                <td>{data?.origin}</td>
              </tr>
              {data?.alt_names?.length > 1 && (
                <tr>
                  <td>Alternative Name</td>
                  <td className='w-2'>:</td>
                  <td>{data?.alt_names}</td>
                </tr>
              )}
              <tr>
                <td className='w-32 font-semibold'>Wikipedia URL</td>
                <td className='w-2'>:</td>
                <td>
                  <a
                    className='text-orange-700 rounded px-2 hover:bg-orange-200'
                    href={data?.wikipedia_url}
                  >
                    {data?.name} Cat
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='w-full'>
            {expand != data.id ? (
              <DetailButton data={data.id} setDetail={setExpand} />
            ) : (
              <HideDetailbutton setDetail={setExpand} />
            )}
          </div>
        </div>
      </div>
      {expand == data?.id && (
        <div className='grid grid-cols-12 bg-white'>
          <div className='col-span-12'>
            <DescriptionBox data={data?.description} />
          </div>
          <div className='col-span-12'>
            <Statistics data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListCard;
