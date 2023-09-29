import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      
      <div className="footer_container_top">
        
        <div className="footer_container_top_section1">
          <div className="footer_container_top_section1_logotitle">
            <div className="footer_container_top_section1_logo">Logo &nbsp;</div>
            <div className="footer_container_top_section1_title">Cool Products 4U</div>
          </div>

          <button className="footer_container_section1_btn">GET EMAIL UPDATES</button>
          <div className="footer_container_section1_icons">
            <p>Facebook Icon&nbsp;</p>
            <p>X Icon &nbsp;</p>
            <p>Instagram Icon</p>
          </div>
        </div>

        <div className="footer_container_top_section2">
          <div className="footer_container_top_section2_description">
           as a hendrerit in, efficitur nec purus. Duis ornare ac nunc non faucibus. Sed eros sem, fermentum nec condimentum id, lacinia non velit. Nullam pulvinar ipsum id tortor dapibus, et sollicitudin diam molestie. Phasellus porttitor turpis vitae justo iaculis varius. Cras.
          </div>
          <div className="footer_container_top_section2_contact">
            <div className="footer_container_top_section2_contact_title">CONTACT THE SITE CREATOR</div>
            <div className="footer_container_top_section2_contact_bullets">
              <div className="footer_container_top_section2_contact_bullet">Email: john.e.layher@gmail.com</div>
              <div className="footer_container_top_section2_contact_bullet">Portfolio: https://www.johnlayher-portfolio.com</div>
              <div className="footer_container_top_section2_contact_bullet">Github: https://github.com/jlayher</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_container_bottom">
        <div className="footer_container_bottom_copy">
          <div>©2023 John Layher,  Web Developer:  All Rights Reserved</div>
   
        </div>
        <div className="footer_container_bottom_links">
          <div className="footer_container_bottom_links_email">
            john.e.layher@gmail.com 
          </div>
          <div className="footer_container_bottom_links_icons">
            <div className="footer_container_bottom_links_icon">Gihub Icon &nbsp; &nbsp;</div>
            <div className="footer_container_bottom_links_icon">LinkedIn Icon &nbsp; &nbsp;</div>
            <div className="footer_container_bottom_links_icon">Resume Download Icon &nbsp; &nbsp;</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
