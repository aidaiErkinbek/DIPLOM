import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Delivery.css';


function Delivery() {
  return (
    <>
   
<div className='container'>
<div className='delivery'>
<h2 className='delTit'>The BookDaSH Guarantee</h2>
<div className='deliveryInf '>
<div className='deliveryIn flex'>
<p className='upTxt'>Our goal is for you to be delighted with each item you purchase on BookDaSH, so we back every purchase with our BookDaSH Guarantee. We guarantee that:</p>
<p className='need'><i>NEED TO REQUEST A RETURN?</i><br></br><Link className='click' to='#'>Click here.</Link></p>
</div>
<div className='list'>
<ul>
  <li>you will receive the correct book or books that you ordered,</li>
  <li>in the precise condition as described by the bookseller,</li>
  <li>that all items, including signatures and documents, are authentic and genuine,</li>
  <li>and they are legally acquired and resold</li>
</ul></div>
<p className='delTxt'>We stand firmly behind our network of 7000 professional book dealers worldwide. Many of our dealers are members of professional trade associates, and all BookDaSH sellers must adhere to the same high standards for ethics and professionalism. All transactions on BookDaSH will be conducted with professionalism and without any bias regarding Race, Color, Ethnicity, National Origin, Political Affiliation, Religion, Disability, Sexual Orientation, Gender Identity or Marital Status. We are here to promote a world-wide community of book lovers and collectors, inclusive of all.</p>
<h2 className='delTit'>INFORMATION ABOUT BookDaSH RETURN TERMS AND CONDITIONS:</h2>
<h3 className='delTitGr'>Lost in Transit/Book Did Not Arrive</h3>
<p className='delTxt'>If the order does not arrive within 14 business days of the estimated delivery date for domestic shipments, or within 21 business days of the estimated delivery date for international shipments, you are eligible for a full refund of the purchase price, including shipping costs. You must contact BookDaSH within 30 days of the estimated delivery date to initiate a refund for an order lost in transit.</p>
<h3 className='delTitGr'>Incomplete or Incorrect Address Provided by Customer/Unclaimed/Returned to Sender/Etc.</h3>
<p className='delTxt'>If the book is returned to the bookseller for one of the above reasons, or a similar reason, the refund price will include the book price only. You must contact BookDaSH within 30 days of the estimated delivery date to initiate this refund. Please have your order number to help us follow up.</p>

<h3 className='delTitGr'>Incorrect Book/Not as Described/Damaged Before or In Transit</h3>
<p className='delTxt'>If you receive an item that is not as described, incorrect, or damaged in transit, your purchase is eligible for a full refund including all postage costs Please reach out to BookDaSH within 30 days of receiving your order to get a refund or replacement (if available).

BookDaSH or the seller will provide a return address so that you may send the item directly to the bookseller. If the seller cannot provide a prepaid label for your return, you are eligible for return postage reimbursement. We cannot guarantee full return postage reimbursement to customers who return items without notifying the seller and/or BookDaSH beforehand, and without an agreement with the seller and/or BookDaSH concerning the amount of return postage reimbursement. Please be sure to contact <Link className='click' to='#'>BookDaSH Customer Support</Link> before returning your item to the bookseller. If possible, please have your order number, and a picture or two of how the item varies from description available to help us follow up.</p>
<h3 className='delTitGr'>Changed Your Mind/Ordered the Wrong Title</h3>
<p className='delTxt'>Many Biblio.com booksellers will accept returns from customers who placed an order incorrectly, or who have had a change of mind regarding an order. Please be sure to contact the bookseller and
 <Link className='click' to='#'>BookDaSH Customer Support</Link>to request a discretionary return. Some sellers may charge a restocking fee for discretionary returns.</p>
 <div className='list'>
<ul>
  <li><b>Returns must be initiated within 30 days of the delivery date.</b></li>
  <li><b>Items must be returned in the condition received.</b></li>
  <li><b>Please package items safely and securely.</b></li>
  
</ul></div>
</div>
</div>
</div>




    </>
  );
}

export default Delivery;