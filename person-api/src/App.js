import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PersonCard from "./PersonCard";
export default function App() {
   const [details, setDetails] = useState({});
   const fetchDetails = async () => {
      const { data } = await axios.get("https://randomuser.me/api/");
      console.log(data);
      const details = data.results[0];
      setDetails(details);
   };
   useEffect(() => {
      fetchDetails();
   }, []);
   return (
      <Container fluid className="p-4 bg-primary App">
         <Row>
            <Col md={4} sm={6} className="offset-md-4 offset-sm-3 mt-4">
               <PersonCard details={details} />
               <div className="text-center">
                  <Button color="warning mt-3" onClick={fetchDetails}>
                     Refresh
                  </Button>
               </div>
            </Col>
         </Row>
      </Container>
   );
}
