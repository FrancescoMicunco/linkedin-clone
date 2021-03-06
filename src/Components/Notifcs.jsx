import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsThreeDots } from "react-icons/bs";

const Notifcs = ({ _id, image, name, surname,  }) => {
    return (
        <Container >
            <Row>
                <Col xs={'6'} md={'12'}>
                    <Link to={`/profile/${_id}`}>
                        <ListGroup variant="flush" key={_id} className=''>
                            <img src={image} className='list_group ml-2' alt='asdfg'/><span className="span">{name} {surname} followed you</span>
                            <div ><BsThreeDots className="icon_dot" /></div>
                            <p className='hour'>4h</p>
                        </ListGroup>
                    </Link>

                </Col>
            </Row>
        </Container>
    )
}

export default Notifcs