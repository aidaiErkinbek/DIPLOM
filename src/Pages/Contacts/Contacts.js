import './Contacts.css';
import location from '../../img/icons/location.svg'
import envelope from '../../img/icons/envelope.png'
import phone from '../../img/icons/phone.png'
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <>
      <div className='container'>
        <div className='contacts'>
          <h3 className='contTit'>CONTACT INFO</h3>
          <div className='contInfo'>
            <div className='contInfoIn flex'>
              <ul><li>
                <div className='contLogo'>
                  <img src={location} alt="" />
                </div><br></br>
                <p className='contTxt'><b>Address:</b>
                  Kyrgyz Republic, Karakol city, street Toktogula 88</p></li>
                <li><div className='contLogo'>
                  <img src={phone} alt="" />
                </div><br></br>
                <p className='contTxt'><b> Phone:</b>(000)</p></li>
                <li><div className='contLogo'>
                  <img src={envelope} alt="" />
                </div>
                  <p className='contTxt'><b>Email:</b><Link to='#'>info@bookdash.com</Link></p></li></ul>
            </div>
          </div>
          <div className="Contacts_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1237.1140111826066!2d78.38016285414824!3d42.483695159143494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1717009497176!5m2!1sru!2skg" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;