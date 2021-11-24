import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { parseISO, differenceInCalendarMonths  } from "date-fns"

const SinglePost = ({ post }) => {
    return (
        <div className="profile-sub-section p-2 my-2">
            <Row className='pl-3 mb-2'>
            <img src={post.user.image} className='profile-image' alt="" />
            <div className="d-flex flex-column w-75 ml-2">
                <Link to={`/profile/${post.user._id}`} className='text-dark'><h6 className='mb-0'>{post.user.name} {post.user.surname} &#8226; <span className='text-muted font-weight-normal'>Following</span></h6></Link>
                <p className='text-muted reduced-text mb-0'>{post.user.bio}</p>
                <p className='text-muted mb-0'>{differenceInCalendarMonths(new Date(), parseISO(post.createdAt))}mo &#8226; <i className='bi bi-globe2'></i></p>
            </div>
            </Row>
            <p className='pl-2 mt-2 mb-2'>{post.text}</p>
            <hr className='my-1' />
            <Row className='text-muted post-actions justify-content-center'>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-hand-thumbs-up'></i>
                    <p className='mb-0 ml-2'>Like</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-chat-right-text'></i>
                    <p className='mb-0 ml-2'>Comment</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-arrow-90deg-right'></i>
                    <p className='mb-0 ml-2'>Share</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-send'></i>
                    <p className='mb-0 ml-2'>Send</p>
                </Col>
            </Row>
        </div>
    )
}

export default SinglePost