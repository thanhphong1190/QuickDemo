import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container } from 'reactstrap'
import './MainMenu.css'
import { MENUS } from '../../../../constant/menu'


class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: MENUS,
        };
    }

    render() {
        const { menus } = this.state
        return (
            <div className="d-flex justify-content-between align-items-center MainMenu">
                <Container>
                    <div className="NavBarContainer">
                        <Nav>
                            {
                                menus && menus.map((item) => {
                                    return (
                                        <Link key={item.id} to={item.to} onClick={() => this.activeItem(item.id)}>
                                            <div className={`MenuItem ${item.isActive ? 'actived' : ''}`}>
                                                <i className={item.icon}></i>
                                                <span>{item.title}</span>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </Nav>
                    </div>
                </Container>

            </div>
        );
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        this.setState({
            menus: this.state.menus.map(item => {
                item.isActive = (item.to === pathname)
                return item
            })
        });
    }

    activeItem(_id) {
        this.setState({
            menus: this.state.menus.map(item => {
                item.isActive = (item.id === _id)
                return item
            })
        }
        );
    }
}

export default MainMenu;
