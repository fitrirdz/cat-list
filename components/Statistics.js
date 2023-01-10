import React from "react";

const Statistics = ({ data }) => {
  return (
    <div className="pb-4">
      <h2 className="font-bold text-xl text-white grid justify-items-center bg-second">
        Statistics
      </h2>
      <div className="flex flex-row flex-wrap">
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.lap == 1 ? <span>&#10004;</span> : <span>&#10008;</span>} Lap
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.indoor == 1 ? <span>&#10004;</span> : <span>&#10008;</span>}{" "}
            Indoor
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.experimental == 1 ? (
              <span>&#10004;</span>
            ) : (
              <span>&#10008;</span>
            )}{" "}
            Experimental
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.hairless == 1 ? (
              <span>&#10004;</span>
            ) : (
              <span>&#10008;</span>
            )}{" "}
            Hairless
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.natural == 1 ? <span>&#10004;</span> : <span>&#10008;</span>}{" "}
            Natural
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.rare == 1 ? <span>&#10004;</span> : <span>&#10008;</span>}{" "}
            Rare
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.rex == 1 ? <span>&#10004;</span> : <span>&#10008;</span>} Rex
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.suppressed_tail == 1 ? (
              <span>&#10004;</span>
            ) : (
              <span>&#10008;</span>
            )}{" "}
            Suppressed Tail
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.short_legs == 1 ? (
              <span>&#10004;</span>
            ) : (
              <span>&#10008;</span>
            )}{" "}
            Short Legs
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>
            {data?.hypoallergenic == 1 ? (
              <span>&#10004;</span>
            ) : (
              <span>&#10008;</span>
            )}{" "}
            Hypoallergenic
          </p>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Adaptability</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.adaptability / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Affection Level</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.affection_level / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Child Friendly</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.child_friendly / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Cat Friendly</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.cat_friendly / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Dog Friendly</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.dog_friendly / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Energy Level</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.energy_level / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Grooming</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.grooming / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Health Issues</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.health_issues / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Intelligence</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.intelligence / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Shedding Level</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.shedding_level / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Social Needs</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.social_needs / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Stranger Friendly</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.stranger_friendly / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Vocalisation</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.vocalisation / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="w-1/2 py-1 px-4">
          <p>Bid Ability</p>
          <div className="rounded-full bg-first">
            <div
              className="rounded-full bg-third"
              style={{
                height: "6px",
                width: `${(data?.bidability / 5) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
