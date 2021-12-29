import React, { Fragment } from "react";
import "./App.css";
import Provider from "./provider";
import Context from "./context";

const Agents = () => {
   return <AgentOne />;
};
const AgentOne = () => {
   return <AgentTwo />;
};
const AgentTwo = () => {
   return <AgentBond />;
};
const AgentBond = () => {
   return (
      // Use all the context data here
      <Context.Consumer>
         {(context) => (
            //   consume the context data
            <Fragment>
               <h3 className="text-info my-3">Mission Information</h3>
               <div className="col-lg-6 offset-lg-3 col-sm-12 px-3 offset-sm-0  d-flex flex-column align-items-start">
                  <p>
                     <b>Mission Name:</b> {context.data.mname}{" "}
                  </p>
                  <p>
                     <b>Agent:</b> {context.data.agent}{" "}
                  </p>
                  <p>
                     <b>Mission Status:</b> {context.data.accept}{" "}
                  </p>
               </div>

               <div className="my-4">
                  <button
                     className="btn btn-success mx-2"
                     onClick={context.acceptMission}
                  >
                     Accept Mission
                  </button>
                  <button
                     className="btn btn-danger mx-2"
                     onClick={context.rejectMission}
                  >
                     Reject Mission
                  </button>
               </div>
            </Fragment>
         )}
      </Context.Consumer>
   );
};

export default function App() {
   return (
      <div className="container">
         <section className="card box d-flex flex-column justify-content-center align-itmes-center">
            <h1> Learning Context Api</h1>
            <Provider>
               <Agents />
            </Provider>
         </section>
      </div>
   );
}
