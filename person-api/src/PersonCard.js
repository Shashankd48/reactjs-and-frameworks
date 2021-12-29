import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
export default function PersonCard({ details }) {
   const personInfo = {
      title: details.name?.title,
      fname: details.name?.first,
      lname: details.name?.last,
      img: details.picture?.large,
   };
   return (
      <Card>
         <CardBody className="text-center">
            <img
               src={personInfo.img}
               alt="Person"
               height="150"
               width="150"
               className="rounded-circle img-thumbnail border-danger"
            />
            <CardTitle className="text-primary">
               <h4 className="my-3">
                  <span>{personInfo.title}</span>
                  <span>{personInfo.fname}</span>
                  <span>{personInfo.lname}</span>
               </h4>
            </CardTitle>
            <CardText>
               <p className="details">
                  <span>
                     <b>Age {details.dob?.age}</b>
                  </span>
               </p>
               <p className="details">
                  <FaEnvelope className="text-primary mr-1" />
                  <span>{details.email}</span>
               </p>
               <p className="details">
                  <FaPhone className="text-info mr-1" />
                  <span>{details.phone}</span>
               </p>
               <p className="details">
                  <FaMapMarkedAlt className="text-success mr-1" />
                  <span>{details.location?.street?.name},</span>
                  <span>{details.location?.city}</span>
                  <span>{details.location?.state}</span>
                  <span>{details.location?.country}</span>
                  <span>{details.location?.postcode}</span>
               </p>
            </CardText>
         </CardBody>
      </Card>
   );
}
