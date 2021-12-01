import css from './Footer.css';
import {FaFacebookSquare,FaTwitter,FaPinterest,FaInstagram,} from "react-icons/fa";
function Footer(){
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo"></div>
        <div className="links-container">
          <div className="footergroup">
            <h3 className="footerh3">Features</h3>
            <ul className="footergroup">
              <li className="footeritem">Link Shortening</li>
              <li className="footeritem">Branded Links</li>
              <li className="footeritem">Analytics</li>
            </ul>
          </div>
          <div className="footergroup">
            <h3 className="footerh3">Resources</h3>
            <ul className="footergroup">
              <li className="footeritem">Blog</li>
              <li className="footeritem">Developers</li>
              <li className="footeritem">Support</li>
            </ul>
          </div>
          <div className="footer-group">
            <h3 className="footerh3">Company</h3>
            <ul className="footergroup">
              <li className="footeritem">About</li>
              <li className="footeritem">Our Team</li>
              <li className="footeritem">Careers</li>
              <li className="footeritem">Contact</li>
            </ul>
          </div>
          <div className="links-group">
            <FaFacebookSquare className="icon"/>
            <FaTwitter className="icon"/>
            <FaPinterest className="icon"/>
            <FaInstagram className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
