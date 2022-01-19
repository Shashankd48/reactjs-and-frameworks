import React from "react";
import { Card, CardBody } from "reactstrap";

export default function UserCard({ user }) {
   return (
      <Card
         className="mt-3 mb-4"
         style={{
            position: "sticky",
            top: "30px",
            margin: "0 auto",
            boxShadow: "5px 5px 20px rgba(0,0,0,0.5)",
         }}
      >
         <img
            src={user.avatar_url}
            alt="User Avatar"
            className="img-thumbnail"
         />
         <CardBody>
            <h4 className="card-title">{user.name}</h4>
            <p className="text-muted">{user.bio}</p>
            <h5 className="text-primary">{user.email}</h5>
            <div className="d-block">
               <div>
                  <span className="text-primary">
                     {user.company ? user.company : ""}
                  </span>
               </div>
               <div>
                  <span className="text-primary">Lives in {user.location}</span>
               </div>
               <div>
                  <span className="text-primary">
                     Hireable {user.hireable ? "Yeah" : "Nope"}
                  </span>
               </div>
               <div>
                  <span className="text-success">
                     Followers : {user.followers}
                  </span>
               </div>
               <div>
                  <span className="text-dark">
                     Following : {user.following}
                  </span>
               </div>
            </div>
         </CardBody>
      </Card>
   );
}
