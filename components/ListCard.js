/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import OtherSources from "./OtherSources";
const DescriptionBox = dynamic(() => import("./DescriptionBox"));
const DetailButton = dynamic(() => import("./DetailButton"));
const HideDetailbutton = dynamic(() => import("./HideDetailbutton"));
const Statistics = dynamic(() => import("./Statistics"));

const ListCard = ({ data, expand, setExpand }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.reference_image_id}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json;charset=UTF-8",
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) =>
            setImageUrl(
              `${process.env.NEXT_PUBLIC_IMAGE_RESIZE_API}/?imageUrl=${data?.url}&width=350&height=350`
            )
          );
      } catch (err) {
        console.error(err);
      }
    };

    if (data?.reference_image_id) {
      fetchImageUrl();
    }
  }, []);

  return (
    <div id="list-card" className="h-full w-full shadow-lg mb-2">
      <div className="grid grid-cols-12">
        <div
          className="col-span-4 h-72 bg-third text-gray-200 bg-50% bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url('./huh-looking.gif')`,
          }}
        >
          {imageUrl && (
            <img
              className="object-cover h-72 w-full"
              alt={data?.name}
              src={imageUrl}
              loading="lazy"
            />
          )}
          {data?.reference_image_id == undefined && (
            <h3 className="w-full h-full grid content-center text-gray-200 text-lg pl-8">
              No Images Available
            </h3>
          )}
        </div>
        <div className="col-span-8 grid content-center gap-2 bg-white px-4">
          <h2 className="text-center title">{data?.name}</h2>
          <table className="table-fixed w-full">
            <tbody>
              <tr>
                <td className="w-36 font-semibold">Weight</td>
                <td className="w-2">:</td>
                <td>{data?.weight?.metric} kg</td>
              </tr>
              <tr>
                <td className="w-36 font-semibold">Life Span</td>
                <td className="w-2">:</td>
                <td>{data?.life_span} years</td>
              </tr>
              <tr>
                <td className="w-36 font-semibold">Temperament</td>
                <td className="w-2">:</td>
                <td>{data?.temperament}</td>
              </tr>
              <tr>
                <td className="w-36 font-semibold">Origin</td>
                <td className="w-2">:</td>
                <td>{data?.origin}</td>
              </tr>
              {data?.alt_names?.length > 1 && (
                <tr>
                  <td className="w-36 font-semibold">Alternative Name</td>
                  <td className="w-2">:</td>
                  <td>{data?.alt_names}</td>
                </tr>
              )}
              <tr>
                <td className="w-36 font-semibold">Wikipedia URL</td>
                <td className="w-2">:</td>
                <td>
                  <a
                    className="text-orange-700 rounded px-2 hover:bg-orange-200"
                    href={data?.wikipedia_url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {data?.name} Cat
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full">
            {expand != data.id ? (
              <DetailButton data={data.id} setDetail={setExpand} />
            ) : (
              <HideDetailbutton setDetail={setExpand} />
            )}
          </div>
        </div>
      </div>

      <div
        id="detail"
        className={`grid grid-cols-12 bg-white ${
          expand == data?.id ? "isExpanded" : ""
        }`}
      >
        <div className="col-span-12">
          <DescriptionBox data={data?.description} />
        </div>
        <div className="col-span-12">
          <Statistics data={data} />
        </div>
        {(data?.cfa_url || data?.vetstreet_url || data?.vcahospitals_url) && (
          <div className="col-span-12">
            <OtherSources
              cfa={data?.cfa_url}
              vetstreet={data?.vetstreet_url}
              vca={data?.vcahospitals_url}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListCard;
