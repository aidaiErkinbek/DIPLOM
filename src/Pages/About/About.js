import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './About.css';
import bg from '../../img/aboutBg.jpg'
import about from '../../img/about.jpg'

function About() {
  return (
    <>
   <div className='img'>
   <img src={bg} alt="" />
   </div>
<h2 className='ourStory'>Our Story</h2>
<div className='container'>
<h3 className='AboutTit'>BookDaSH - Read More. Spend Less.</h3>
<div className='AboutTxt'>BookDaSH started in 2003 with a pick-up truck of used books stashed in a storage unit, listing books solely on Amazon.com. Our first book sold was the beloved children's classic, Charlotte's Web by E.B. White. Over the years, we've added regional processing centers across the country and hundreds of employees. Throughout this time, we also built our processes to purchase, grade, and distribute used and rare/collectible books.</div>
<div className='aboutImg'>
   <img src={about} alt="" />
   </div>
   <div className='AboutTxt'>Today we are the world's largest online independent used book seller, operating with state-of-the-art automation and advanced analytics in a safety-first environment. Our primary customer web and mobile destination is our brand home, ThriftBooks.com. We also continue to sell on Amazon, eBay, Abe, and other commerce sites where booklovers gather. We hand-grade every book in our inventory and offer books in a variety of formats and conditions for our customers. We pride ourselves on our wide assortment of quality used, accurately graded books provided to our customers at everyday low prices. Our award-winning customer service team and our 5-star rating on Trustpilot, with over 640,000 reviews, provide our customers assurance to shop with confidence while finding books they love and look forward to reading. Our ReadingRewards loyalty program continually delight loyal customers with free books awarded for their points earned.
<br></br> <br></br>
Our partnerships extend into communities across the country. Our profit-sharing relationship with libraries large and small enables us to support these valuable institutions by finding homes for ex-library books and working with Friends of Library groups across the country to provide financial support for their continued success. We give back to our communities through our ThriftBooks Cares pillar, designed to connect with communities in the US and globally donating books to those in need—including schools, non-profit organizations, and those rebuilding after natural disasters.
<br></br> <br></br>
We believe in books and the power of the written word to impact lives and societies across the globe, and we cherish our role in saving books to live another day to educate, entertain, inspire, and transform lives.</div></div>
 </>  
  
  );
}

export default About;