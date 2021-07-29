import React from 'react';
import avatar from '../assets/img/avatar/profile.png';

function Topbar(props) {
    return (
        <div>
            <div className="main-header side-header sticky sticky-pin" style={{marginBottom: '-64px'}}>
        <div className="container-fluid">
          <div className="main-header-left"> <a className="main-header-menu-icon" href="#" id="mainSidebarToggle"><span /></a> </div>
          <div className="main-header-center">
            <div className="responsive-logo"> <a href="index.html"><img src="../assets/img/brand/logo.png" className="mobile-logo" alt="logo" /></a> <a href="index.html"><img src="../assets/img/brand/logo-light.png" className="mobile-logo-dark" alt="logo" /></a> </div>
            
          </div>
          <div className="main-header-right">
            <div className="dropdown d-md-flex"> <a className="nav-link icon full-screen-link" href> <i className="fe fe-maximize fullscreen-button fullscreen header-icons" /> <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons" /> </a> </div>
            
            <div className="dropdown main-header-notification">
              <a className="nav-link icon" href> <i className="fe fe-bell header-icons" /> <span className="badge badge-danger nav-link-badge">4</span> </a> 
              <div className="dropdown-menu">
                <div className="header-navheading">
                  <p className="main-notification-text">You have 1 unread notification<span className="badge badge-pill badge-primary ml-3">View all</span></p>
                </div>
                <div className="main-notification-list">
                  <div className="media new">
                    <div className="main-img-user online"><img alt="avatar" src={avatar} /></div>
                    <div className="media-body">
                      <p>Congratulate <strong>Olivia James</strong> for New template start</p>
                      <span>Oct 15 12:32pm</span> 
                    </div>
                  </div>
                  <div className="media">
                    <div className="main-img-user"><img alt="avatar" src={avatar} /></div>
                    <div className="media-body">
                      <p><strong>Joshua Gray</strong> New Message Received</p>
                      <span>Oct 13 02:56am</span> 
                    </div>
                  </div>
                  <div className="media">
                    <div className="main-img-user online"><img alt="avatar" src={avatar} /></div>
                    <div className="media-body">
                      <p><strong>Elizabeth Lewis</strong> added new schedule realease</p>
                      <span>Oct 12 10:40pm</span> 
                    </div>
                  </div>
                </div>
                <div className="dropdown-footer"> <a href="#">View All Notifications</a> </div>
              </div>
            </div>
            
            <div className="dropdown main-profile-menu" role="button">
              <a className="d-flex" href> <span className="main-img-user"><img alt="avatar" src={avatar} /></span> </a> 
              <div className="dropdown-menu">
                <div className="header-navheading">
                  <h6 className="main-notification-title">Andri Andreas</h6>
                  <p className="main-notification-text">Full Stack Developer</p>
                </div>
                <a className="dropdown-item border-top" href="profile.html"> <i className="fe fe-user" /> My Profile </a> <a className="dropdown-item" href="profile.html"> <i className="fe fe-edit" /> Edit Profile </a> <a className="dropdown-item" href="profile.html"> <i className="fe fe-settings" /> Account Settings </a> <a className="dropdown-item" href="profile.html"> <i className="fe fe-settings" /> Support </a> <a className="dropdown-item" href="profile.html"> <i className="fe fe-compass" /> Activity </a> <a className="dropdown-item" href="signin.html"> <i className="fe fe-power" /> Sign Out </a> 
              </div>
            </div>
             
          </div>
        </div>
      </div>
        </div>
    );
}

export default Topbar;