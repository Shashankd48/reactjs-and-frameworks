import React, { useState } from "react";
import PackageContext from "./context";

// Creating a provider

const Provider = (props) => {
   const [mission, setMission] = useState({
      mname: "Go to Russia",
      agent: "007",
      accept: "Not accepted",
   });
   return (
      <PackageContext.Provider
         value={{
            data: mission,
            acceptMission: () => {
               setMission({ ...mission, accept: "Accepted" });
            },
            rejectMission: () => {
               setMission({ ...mission, accept: "Rejected" });
            },
         }}
      >
         {props.children}
      </PackageContext.Provider>
   );
};

export default Provider;
