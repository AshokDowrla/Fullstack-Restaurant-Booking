import "./RestaurantDetails.scss"

import React from 'react'
import { Container, Row, Col, Card, CardBody } from "reactstrap"


class RestaurantDetails extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    //console.log(props.location.state)

    render() {
        const { name, rating, avgcost, currency, cuisine, votes } = this.props.location.state
        return (
            <Container >

                <Card className="details">
                    <CardBody>
                        <Row className="ml-auto mr-auto header">
                            <Col xs="10" className="restaurantName">{name}</Col>
                            <Col xs="2" >

                                <Row >Rating:  <span className="rating"> {rating} </span>/5 </Row>
                                <Row>Votes: {votes}</Row>

                            </Col>

                        </Row>
                        <Row className="ml-auto mr-auto header">
                            
                                <Col>Average Cost of Two: {avgcost} ({currency})</Col>
                         
                        </Row>
                        <Row className="ml-auto mr-auto header" >
                        
                        <Col> Cuisines: {cuisine}</Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        )
    }

}
export default RestaurantDetails