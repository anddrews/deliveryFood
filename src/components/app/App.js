import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoodMakers from '../foodMakers/FoodMakers';
import menuIcon from '../../static/img/menu-icon.png';


class App extends Component {
    constructor() {
        super();
        this.state = {
            isShowMenu: false
        }
    }
    
    menuShow(){
       this.setState({
           isShowMenu: true
       })
    }
    
    menuHide() {
        this.setState({
            isShowMenu: false
        })
    }
    
    render() {
        return (
            <div className="main-wrapper">
                <header>
                    <img src={ menuIcon } alt="" onClick={this.menuShow.bind(this)}/>
                </header>
                <section className="main-content">
                    <div className={ this.state.isShowMenu ? 'left-nav-container ': 'left-nav-container hidden' } onClick={this.menuHide.bind(this)}>
                        <div className="left-nav">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/businessLunch'>Business lunch</Link></li>
                                <li><Link to='/'>Something  else</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-container">
                        <FoodMakers/>
                    </div>
                </section>
                <footer>{'\u00A9 Anddrews'}</footer>
            </div>
        )
    }
}
export default App;