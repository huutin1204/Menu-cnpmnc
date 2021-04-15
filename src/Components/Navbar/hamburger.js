import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import {GiHamburgerMenu}   from 'react-icons/gi';
import { Menu } from 'antd';
import './hamburger.css';
import percent  from '../../img/percent.png';
import handshake  from '../../img/handshake.png';
import save  from '../../img/save.png';
import datcho  from '../../img/datcho.png';
import plane  from '../../img/plane.png';
import hotel  from '../../img/hotel.png';
import tietkiem  from '../../img/tietkiem.png';
import transport  from '../../img/transport.png';
import experience  from '../../img/experience.png';
import rentcar  from '../../img/rentcar.png';
import jrpass  from '../../img/jrpass.png';
import trangchu  from '../../img/trangchu.png';
import help  from '../../img/help.png';
import contact  from '../../img/contact.png';
import mailbox  from '../../img/mailbox.png';





const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];



const Hamburger = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
 
  
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button className="hamburger-menu"  type="button" onClick={showDrawer} icon={<GiHamburgerMenu />}>
        
      </Button>
      <Drawer
        className="hamburger-style"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      
        <Menu.Item key="1">
        <img className="logo-items" src={trangchu} alt="trangchu" />
          Trang chủ</Menu.Item>
        <Menu.Item key="2">
        <img className="logo-items" src={datcho} alt="datcho" />
          Đặt chỗ của tôi</Menu.Item>
        <Menu.Item key="3">
        <img className="logo-items" src={mailbox} alt="mailbox" />
          Hộp thư của tôi</Menu.Item>
        <Menu.Item key="4">
        <img className="logo-items" src={save} alt="save" />
          Đã lưu</Menu.Item>
      
    
        <Menu.Item key="5">
        <img className="logo-items" src={contact} alt="contact" />
          Liên hệ chúng tôi</Menu.Item>
        <Menu.Item key="6">
        <img className="logo-items" src={handshake} alt="handshake" />
          Hợp tác với chúng tôi</Menu.Item>
        
          <Menu.Item key="7">
          <img className="logo-items" src={help} alt="help" />
            Trợ giúp</Menu.Item>
          <Menu.Item key="8">
          <img className="logo-items" src={percent} alt="percent" />
            Khuyễn mãi</Menu.Item>
        
      
     
        <Menu.Item key="9">
        <img className="logo-items" src={plane} alt="plane" />
          Vé máy bay</Menu.Item>
        <Menu.Item key="10">
        <img className="logo-items" src={hotel} alt="hotel" />
          Khách sạn</Menu.Item>
        <Menu.Item key="11">
        <img className="logo-items" src={tietkiem} alt="tietkiem" />
          Combo tiết kiệm</Menu.Item>
        <Menu.Item key="12">
        <img className="logo-items" src={transport} alt="transport" />
          Đưa đón sân bay</Menu.Item>
        <Menu.Item key="12">
        <img className="logo-items" src={experience} alt="experience" />
          Xeprience</Menu.Item>
        <Menu.Item key="12">
        <img className="logo-items" src={rentcar} alt="rentcar" />
          Cho thuê xe</Menu.Item>
        <Menu.Item key="12">
        <img className="logo-items" src={jrpass} alt="jrpass" />
          JR Pass</Menu.Item>  
    </Menu>
    <p>bi5 sua</p>
         
      </Drawer>

    </>
  );
};

export default Hamburger;
