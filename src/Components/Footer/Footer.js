import './Footer.css';
import tw from '../../img/icons/tw.svg'
import fb from '../../img/icons/facebook.svg'
import inst from '../../img/icons/insta.jpg'
import tkt from '../../img/icons/tiktok.svg'
import { Link } from 'react-router-dom';
import secure from '../../img/footer.gif'
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className='FooterIn'>
          <div className="FooterContent flex">
            <div className="FooterLeft">
              <div className="FooterLinks flex">
                <div className="FooterLinksSection">
                  <h3 className="FooterLinksTit">Popular Categories</h3>
                  <ul>
                    <li><Link to="#">Children's</Link></li>
                    <li><Link to="#">Teen and Young Adult</Link></li>
                    <li><Link to="#">Self-Help</Link></li>
                    <li><Link to="#">Literature Fiction</Link></li>
                    <li><Link to="#">Mystery Thriller</Link></li>
                    <li><Link to="#">Sci-fi Fantasy</Link></li>
                    <li><Link to="#">Romance</Link></li>
                    <li><Link to="#">Large Print Books</Link></li>
                    <li><Link to="#">Rare Collectible Books</Link></li>
                  </ul>
                </div>
                <div className="FooterLinksSection">
                  <h3 className="FooterLinksTit">My Account</h3>
                  <ul>
                    <li><Link to="#">Settings</Link></li>
                    <li><Link to="#">Shopping Cart</Link></li>
                    <li><Link to="#">Order History</Link></li>
                    <li><Link to="#">Wish List</Link></li>
                  </ul>
                </div>

                <div className="FooterLinksSection">
                  <h3 className="FooterLinksTit">Quick Help</h3>
                  <ul>
                    <li><Link to="#">Help Support</Link></li>
                    <li><Link to="#">Shipping Costs</Link></li>
                    <li><Link to="#">Billing</Link></li>
                    <li><Link to="#">Return Policy</Link></li>
                    <li><Link to="#">Website Suggestions</Link></li>
                  </ul>
                </div>

                <div className="FooterLinksSection">
                  <h3 className="FooterLinksTit">About Us</h3>
                  <ul>
                    <li><Link to="#">Our Story</Link></li>
                    <li><Link to="#">Our Purpose</Link></li>
                    <li><Link to="#">Our Team</Link></li>
                    <li><Link to="#">Social Responsibility</Link></li>
                    <li><Link to="#">Careers</Link></li>
                    <li><Link to="#">News</Link></li>
                  </ul>
                </div>

              </div>

              <div className="FooterTxt"> <b>BookDaSH</b> sells millions of used books at the lowest everyday prices. We personally assess every book's quality and offer rare, out-of-print treasures. We deliver the joy of reading in recyclable packaging with free standard shipping on US orders over $15.BookDaSH.com. Read more. Spend less. </div>
            </div>
            <div className="FooterRight">
              <div className="FooterIc dib">
                <h3 className="FooterLinksTit">Follow Us</h3>
                <div className="FootersLogo flex">
                  <Link to="#" className="Foot_logo">
                    <img src={tw} alt="" />
                  </Link>
                  <Link to="#" className="Foot_logo">
                    <img src={fb} alt="" />
                  </Link>
                  <Link to="#" className="Foot_logo">
                    <img src={inst} alt="" />
                  </Link>
                  <Link to="#" className="Foot_logo">
                    <img src={tkt} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='FooterBottom'>
            <div className='FooterBotIn flex'>
              <div className='FooterBotInLeft'>
                <span className='FooterCopy'>Copyright © 2023 BookDaSH.com</span><br></br>
                <div className='FooterBotLinks dib'>
                  <ul>
                    <li><Link to="#">Terms of Use |</Link></li>
                    <li><Link to="#">Privacy Policy |</Link></li>
                    <li><Link to="#">Do Not Sell/Share My Personal Information |</Link></li>
                    <li><Link to="#">Cookie Policy |</Link></li>
                    <li><Link to="#"> Cookie Preferences |</Link></li>
                    <li><Link to="#"> Accessibility Statement</Link></li>
                  </ul>
                </div>
                <br></br>
                <span className='FooterCopy'>BookDaSH® and the BookDaSH® logo are registered trademarks of Books DaSH Global, LLC</span>
              </div>
              <div className='FooterBotInRight'>
              <Link to="#" className="secure">
                    <img src={secure} alt="" />
                  </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;