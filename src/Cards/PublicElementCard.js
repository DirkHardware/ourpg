import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'


const PublicElementCard = (props) => {

    let linkString = `/publicelements/${props.id}`

    // componentDidMount() {
    //     // fire off dispatch to send my fetch request 
    //     this.props.fetchElement()
    //     console.log(this.props.element)
    // }

        // if(this.props.element === null){
        //     return(
        //         <h2>loading</h2>
        //     )
        // }
        return(
            <div className='public-element-card'>
                <div className='public-element-card-text'>
                    <div className='public-element-card-title'>
                        <Link to={linkString}>
                        <h3>{props.title}</h3>
                        </Link>
                    </div>
                    <div className='public-element-card-description'>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        )
    }

export default PublicElementCard 