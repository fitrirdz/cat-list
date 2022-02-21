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
          className='col-span-4 h-72 bg-black bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url('${data?.image?.url}')` }}
        />
        <div className='col-span-8 place-items-center bg-white px-4'>
          <table className='table-fixed'>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{data?.name}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>:</td>
                <td>{data?.weight?.metric} kg</td>
              </tr>
              <tr>
                <td>Life Span</td>
                <td>:</td>
                <td>{data?.life_span} years</td>
              </tr>
              <tr>
                <td>Temperament</td>
                <td>:</td>
                <td>{data?.temperament}</td>
              </tr>
              <tr>
                <td>Origin</td>
                <td>:</td>
                <td>{data?.origin}</td>
              </tr>
              {data?.alt_names?.length > 1 && (
                <tr>
                  <td>Alternative Name</td>
                  <td>:</td>
                  <td>{data?.alt_names}</td>
                </tr>
              )}
              <tr>
                <td>Wikipedia URL</td>
                <td>:</td>
                <td>
                  <a href={data?.wikipedia_url}>{data?.name} Cat</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='col-span-12 grid justify-items-end'>
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
