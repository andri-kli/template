import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar(props) {

  const pathname = props.path.pathname;
  const subPath = props.path.subPathName;

  return (
    <div>
      <div className="main-sidebar main-sidebar-sticky side-menu ps ps--active-y">
        <div className="sidemenu-logo">
          <a className="main-logo" href="index.html">
            {/* <img src="../../assets/img/brand/logo-light.png" className="header-brand-img desktop-logo" alt="logo" /> 
                  <img src="../../assets/img/brand/icon-light.png" className="header-brand-img icon-logo" alt="logo" /> 
                  <img src="../../assets/img/brand/logo.png" className="header-brand-img desktop-logo theme-logo" alt="logo" /> 
                  <img src="../../assets/img/brand/icon.png" className="header-brand-img icon-logo theme-logo" alt="logo" />   */}
          </a>
        </div>
        <div className="main-sidebar-body">
          <ul className="nav">
            <li className="nav-header"><span className="nav-label">Dashboard</span></li>
            <li className={ pathname === 'dashboard' ? 'nav-item active show' : 'nav-item'} >
              <Link className="nav-link" to="/dashboard">
                <span className="shape1" /><span className="shape2" />
                <i className="ti-home sidemenu-icon" />
                <span className="sidemenu-label">Dashboard</span>
              </Link>
            </li>

            <li className={ pathname === 'form' ? 'nav-item active show' : 'nav-item'} >
              <a className="nav-link with-sub" href="#">
                <span className="shape1" /><span className="shape2" />
                <i className="ti-wallet sidemenu-icon" />
                <span className="sidemenu-label">Form</span>
                <i className="angle fe fe-chevron-right" />
              </a>
              <ul className="nav-sub">
                <li className={subPath === 'basic' ? 'nav-sub-item active' : 'nav-sub-item' }> 
                  <Link className="nav-sub-link" to="/form/basic">Basic</Link> 
                </li>
                <li className={subPath === 'advanced' ? 'nav-sub-item active' : 'nav-sub-item' }> 
                  <Link className="nav-sub-link" to="/form/advanced">Advanced Form</Link> 
                </li>
              </ul>
            </li>

            <li className={ pathname === 'elements' ? 'nav-item active show' : 'nav-item'}>
              <a className="nav-link with-sub" href="#">
                <span className="shape1" /><span className="shape2" />
                <i className="ti-wallet sidemenu-icon" />
                <span className="sidemenu-label">Elements</span>
                <i className="angle fe fe-chevron-right" />
              </a>
              <ul className="nav-sub">
                <li className="nav-sub-item">
                  <Link className="nav-sub-link" to="/elements/modal">Modal</Link> 
                </li>
              </ul>
            </li>

            <li className="nav-header"><span className="nav-label">Applications</span></li>
            <li className="nav-item"> <a className="nav-link" href="widgets.html"><span className="shape1" /><span className="shape2" /><i className="ti-server sidemenu-icon" /><span className="sidemenu-label">Widgets</span></a> </li>
            <li className="nav-item">
              <a className="nav-link with-sub" href="#"><span className="shape1" /><span className="shape2" /><i className="ti-email sidemenu-icon" /><span className="sidemenu-label">Mail</span><span className="badge badge-warning side-badge">2</span></a>
              <ul className="nav-sub">
                <li className="nav-sub-item"> <a className="nav-sub-link" href="mail-inbox.html">Mail-Inbox</a> </li>
                <li className="nav-sub-item"> <a className="nav-sub-link" href="viewmail.html">View-Mail</a> </li>
              </ul>
            </li>

          </ul>
        </div>
        <div className="ps__rail-x" style={{ left: '0px', top: '0px' }}>
          <div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} />
        </div>
        <div className="ps__rail-y" style={{ top: '0px', height: '657px', right: '0px' }}>
          <div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '394px' }} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;