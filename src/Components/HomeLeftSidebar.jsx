import {Card,ListGroup,List} from 'react-bootstrap';
import Image from '../assets/Asadbek.png'
const HomeLeftSidebar = () => {
    return (
        <>
       
               <Card style={{ width: '18rem' }}>
              <Card.Header  className='text-center'  style={{height: '4rem', }}>
                   <img style={{width: "75px"}} src={Image} alt="jbdjkb" />
                   </Card.Header>
                   <Card.Title className='text-center mt-5'> Asadbek Azamjonov </Card.Title>
                   <Card.Text className='text-secondary text-center'>
                       <p >Bachelor's degree at Akademia Finansów i Biznesu Vistula</p>
                       </Card.Text>
               <ListGroup variant="flush" className='d-flex'>
                   
                 <a className='text_muted' className='pl-3 pt-2'>Who viewed your profile</a>
                 <a className='textmuted' className='pl-3 pt-2'>Who viewed your profile</a>
               </ListGroup>
               <ListGroup variant="flush" className='d-flex'>
                 <a className='pl-3 pt-1 pb-1'>Access exclusive tools & insights</a>
                 <a className='pl-3 pt-1 pb-1'>Try Premium for free</a>
               </ListGroup>
               <ListGroup variant='flush'>
               <p className='pl-3 pt-2'>My items</p>
               </ListGroup>
             </Card>
          <Card  className="mt-2"style={{ width: '18rem', }}>
          <Card.Body>
            <Card.Title>Recent</Card.Title>
<ListGroup>
    <p>Intership Japan</p>
    <p>React Developer-ReactJS...</p>
    <p>Angular, React, Vue, Node, I...</p>
    <p>UI/UX User Experience Inter...</p>
    <p>iOS Developer Group</p>
    </ListGroup>  
    <Card.Title>Groups</Card.Title>
    <ListGroup>
    <p>Intership Japan</p>
    <p>React Developer-ReactJS...</p>
    <p>Angular, React, Vue, Node, I...</p>
    </ListGroup>
    <div>
    <a href="">Events</a>
    <a href="">Followed Hashtags</a>
    </div>
    <ListGroup variant='flush'>
  <p>Discover more</p>
    </ListGroup>
      
          </Card.Body>
        </Card> 
          </>  
          
        
    )
}

export default HomeLeftSidebar