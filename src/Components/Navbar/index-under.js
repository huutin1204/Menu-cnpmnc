import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './index-under.css';
import plane  from '../../img/plane.png';
import hotel  from '../../img/hotel.png';
import tietkiem  from '../../img/tietkiem.png';
import transport  from '../../img/transport.png';
import experience  from '../../img/experience.png';
import rentcar  from '../../img/rentcar.png';
import jrpass  from '../../img/jrpass.png';




class NavbarMenu2 extends Component{
    state = {
        current: 'mail',
      };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    render(){
        const { current } = this.state;
        return(
           
            <Menu className="menu-2" onClick={this.onClick} selectedKeys={[current]}  mode="horizontal" >
                <Menu.Item className="menu-items  " id="menu-1 item-1"   >
                <img className="logo-items" src={plane} alt="plane" />
                 Vé máy bay
                </Menu.Item>
                <Menu.Item className="menu-items" id="menu-1"  >
                <img className="logo-items" src={hotel} alt="hotel" />
                   Khách sạn
                </Menu.Item>
                <Menu.Item className="menu-items" id="menu-1" >
                <img className="logo-items" src={tietkiem} alt="tietkiem" />

                   Combo tiết kiệm
                </Menu.Item>
                <Menu.Item className="menu-items" id="menu-1" >
                <img className="logo-items" src={transport} alt="transport" />
                   Đưa đón sân bay
                </Menu.Item>
                 <Menu.Item className="menu-items" id="menu-1"  >
                 <img className="logo-items" src={experience} alt="experience" />
                    Xperience
                </Menu.Item>
                <Menu.Item className="menu-items" id="menu-1">
                <img className="logo-items" src={rentcar} alt="rentcar" />

                    Cho thuê xe
                </Menu.Item>
                <Menu.Item className="menu-items" id="menu-1">
                <img className="logo-items" src={jrpass} alt="jrpass" />

                    JR Pass
            </Menu.Item>
            </Menu>
          
        );
    }
}

export default NavbarMenu2;