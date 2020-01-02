import React, { Component } from 'react'
import Restaurant from "../../components/Restaurant/Restaurant"
import { Container, Row, Spinner, Col, CardBody, Card, Nav, NavLink } from 'reactstrap'
import styles from "./Restaurants.module.scss"
import { getRestaurants, costHighLow, costLowHigh, getLoadedRestaurants, highRated } from "../../store/actions/restaurantActions"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Restaurants extends Component {

    componentDidMount() {
        this.props.getRestaurants()

        console.log("munt")
    }

 

   

    render() {
        const { restaurants } = this.props.restaurant

        const { loading } = this.props.restaurant

        const list = (loading) ? <Spinner type="grow" style={{ width: '3rem', height: '3rem' }} color="primary" className="text-center" /> : restaurants.Restaurants.map(x => (
            <Restaurant key={x['Restaurant ID']} name={x['Restaurant Name']} id={x['Restaurant ID']} rating={x['Aggregate rating']}
                cuisine={x['Cuisines']} avgcost={x['Average Cost for two']} currency={x['Currency']} votes={x['Votes']}
                ratingColor={x['Rating color']} ratingText={x['Rating text']} bookTable={x['Has Table booking']} onlineDelivery= {x['Has Online delivery']}
            />
        ))
        return (

            <Container className={styles.container}  >

                <Row className={styles.title}>RestaurantBooking</Row>

                <Row>

                    <Col md="3" sm="0">
                        <Card className={styles.filterBlock}>

                            <CardBody className={styles.filterBody} >
                                <p className={styles.header}>Filters</p>



                                <div className={styles.sortByTitle}>Sort by

                                <Nav vertical>
                                        <NavLink  className="p-0 pt-1" onClick={this.props.highRated}>
                                           <span className={styles.sortHover}> <span className={styles.sortBy}>Rating</span> - <span className={styles.order}>high to low</span></span>
                                        </NavLink>

                                        <NavLink onClick={this.props.costHighLow} className="p-0">
                                        <span className={styles.sortHover}><span className={styles.sortBy}>Cost</span> - <span className={styles.order}>high to low</span> </span>
                                        </NavLink>

                                        <NavLink onClick={this.props.costLowHigh} className="p-0">
                                        <span className={styles.sortHover}><span className={styles.sortBy}>Cost</span> - <span className={styles.order}>low to high</span> </span>
                                        </NavLink>
                                     

                                    </Nav>
                                </div>



                            </CardBody>

                        </Card>
                    </Col>
                    <Col md="9" sm="12" >
                        {list}
                    </Col>

                </Row>





            </Container>


        )
    }
}

const mapStateToProps = (state) => {


    return {
        restaurant: state.restaurant
    }

}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ getRestaurants, costHighLow, costLowHigh, getLoadedRestaurants, highRated }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)