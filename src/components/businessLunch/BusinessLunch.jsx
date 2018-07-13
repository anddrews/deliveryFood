import React, { Component } from 'react';
// import DishCard from '../dishCard/DishCard';
import Constructor from '../constructor/Constructor';

const dishes = [
    {
        name: 'Lorem Ipsum',
        picture: 'http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/69/17/3/picAvMZLM.jpg',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        price: '1.25'
    },
    {
        name: 'Lorem Ipsum',
        picture: 'http://img.sndimg.com/food/image/upload/h_465,w_620,c_fit/v1/img/recipes/45/80/9/ggIfR8tpTUOkImhj16cV_DSC_1678-2.jpg',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        price: '2.25'
    },
    {
        name: 'Lorem Ipsum',
        picture: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/8/1/FNM_040112-WN-Dinners-003-0_s3x4.jpg.rend.hgtvcom.336.252.suffix/1382541367077.jpeg',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        price: '3.25'
    },
    {
        name: 'Lorem Ipsum',
        picture: 'http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/69/17/3/picAvMZLM.jpg',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ',
        price: '4.25'
    }
    
]
class BusinessLunch extends Component {
    render () {
        return (
            <div>
                {dishes.map((item, index) => (<Constructor key={index} props={item}/>))}
            </div>
        )
    }
}

export default BusinessLunch;
