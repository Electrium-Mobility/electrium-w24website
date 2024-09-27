import React from "react";

function Coop({ headshot, name }) {
  return (
    <div className="group text-center">
      <div className="relative inline-block mx-auto h-32 w-32 rounded-full overflow-hidden">
        <img src={headshot} />
      </div>

      <div className="content">
        <p className="title h5 text-lg font-medium text-emerald-600 mb-1">
          {name}
        </p>
      </div>
    </div>
  );
}

export default Coop;
