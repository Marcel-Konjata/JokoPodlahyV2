import React from 'react'
import Stars from './Stars';


function TestemonialCard(props,{key}) {
    return (
        <div key={key} className='testemonial-card'>
            <aside className='testemonial-card-review'>
                <p>{props.review}</p>
            </aside>
            <footer className='testemonial-card-footer'>
                <div className="stars"><Stars stars={props.stars} /></div>
                <div className="name">{props.name}</div>
            </footer>
        </div>
    )
}

export default TestemonialCard
