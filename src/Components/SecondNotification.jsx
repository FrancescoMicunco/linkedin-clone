import Notifcs from "./Notifcs";

const SecondNotification = ({ title, profiles }) => {


    return (
        <div className='sidebar-wrapper'>
            <h5 className='my-3 mb-4'>{title}</h5>

            { profiles && 
            profiles.slice( 50).map(({ _id, image, name, surname, title}) => (
            <Notifcs  _id={_id} image={image} name={name} surname={surname} title={title}/>
            ))}
        </div>
    )
}

export default SecondNotification