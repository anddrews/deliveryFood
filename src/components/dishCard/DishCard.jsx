import React from 'react';

const DishCard = ({props}) => {
    return (
        <div className="dish-card-container">
            <div className="dish-card">
                <p className="dish-name">{props.name}</p>
                <img src={props.picture} alt=""/>
                <p className="description">{props.description}</p>
                <p className="price">Price: {props.price}</p>
                <button>Order</button>
            </div>
            { props.children }
        </div>
    )
};

export default DishCard;