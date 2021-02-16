import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './UserDetail.css'

const UserDetail = () => {
    const [inProp, setInProp] = useState(false);
    const { state: user } = useLocation()
    const fullName = `${user.name.title}. ${user.name.first} ${user.name.last}`
    const street = `${user.location.street.number} ${user.location.street.name}`
        
    useEffect(() => {
        setInProp(true)
    }, [])

    return (
        <CSSTransition
            classNames="user-detail"
            in={inProp}
            timeout={1000}
            >
            <div className="user-detail">
                <div className="heading">
                    <img src={user.picture.large}/>
                    <div className="heading-details">
                        <div className="name">
                            {fullName}
                        </div>
                        <div className="email">
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </div>
                        <div className="phone">
                            {user.phone}
                        </div>
                        <div className="street">
                            {street}
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
    
}


export default UserDetail