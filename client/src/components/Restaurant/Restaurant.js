import styles from "./Restaurant.module.scss"

import { Card, CardBody, Row, Col } from "reactstrap"
import React from 'react'
//import { Link } from "react-router-dom";
import ToolTip from "../ToolTip/ToolTip";
const Restaurant = (props) => {
  //console.log(props.currency)
  const { id, name, rating, cuisine, avgcost, currency, votes, ratingColor, ratingText, bookTable, onlineDelivery } = props



  const tableBackground = (bookTable === 'Yes') ? styles.available : styles.notAvailable
  const onlineBackground = (onlineDelivery === 'Yes') ? styles.available : styles.notAvailable
  const ratingBackground = (ratingColor === "Dark Green") ? "darkgreen" : (ratingColor === "Yellow") ? "yellow" : (ratingColor === "Orange") ? "orange"
    : (ratingColor === "Green") ? "green" : "white"

  //console.log(ratingBackground)
  return (
    // <Link to={{
    //   pathname: "/details", state: {
    //     id: id, name: name, rating: rating, cuisine: cuisine, avgcost: avgcost, currency: currency,
    //     votes: votes
    //   }
    // }}>

    <Card className={styles.restaurantBlock} >

      <CardBody className={styles.content}>


        <Row>

          <Col xs="8" sm="8" className={styles.name}>{name}</Col>
          <Col xs="4" sm="4" className={styles.rating}> <ToolTip text={ratingText} id={"foo" + id} /><span className={styles.rating} style={{ backgroundColor: `${ratingBackground}` }} id={"foo" + id} >{rating.toFixed(1)}</span>
            <div className={styles.votes}>{votes} votes</div> </Col>
        </Row>

        <div className={styles.divider}></div>

        <Row className={styles.details}>

          <Col md="4" sm="7" className="text-right">Cuisines:</Col>
          <Col md="8" sm="5" className="text-center">{cuisine} </Col>

        </Row>

        <Row className={styles.details}>

          <Col md="4" sm="7" className="text-right">Cost for Two:</Col>
          <Col md="8" sm="5" className="text-center">{avgcost} ({currency}) </Col>

        </Row>


        <Row className={styles.actions}>
         
            <Col md="6" sm="6" className={[tableBackground, styles.item, "text-center"].join(' ')} >Book Table</Col>

          
       
            <Col md="6" sm="6" className={[onlineBackground, "text-center"].join(' ')}>Online Delivery</Col>
         
        </Row>


      </CardBody>
    </Card>
    //</Link> 


  )
}


export default Restaurant