import React from 'react'
import {Link} from 'react-router-dom'

const Footer = (props) => {
 
  return (
   <footer id="footer">
    <div className="fpart-first">
      <div className="container">
        <div className="row">
          <div className="contact col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <h5>About Reunion</h5>
            <p>Reunion app allows you to send an instant SMS to your contact list to let them know you are not in a safe place.... Lorem ipsum</p>
          </div>
          <div className="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
            <h5>Information</h5>
            <ul>
              <li><a href="#.html">About Us</a></li>
              <li><a href="#.html">Privacy Information</a></li>
              <li><a href="#.html">Immigration Information</a></li>
              <li><a href="#.html">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div className="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
            <h5>Customer Service</h5>
            <ul>
              <li><a href="#.html">Contact Us</a></li>
              <li><a href="#.html">How It Works</a></li>
              <li><a href="#.html">Site Map</a></li>
            </ul>
          </div>
          <div className="column col-lg-2 col-md-2 col-sm-3 col-xs-12">
            <h5>Extras</h5>
            <ul>
              <li><a href="#.html">Map</a></li>
              <li><a href="#.html">SMS</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Others</a></li>
            </ul>
          </div>
          <div className="column col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h5>Newsletter</h5>
            <div className="form-group">
            <label className="control-label" htmlFor="subscribe">Sign up to receive latest news and updates.</label>
            <input id="signup" type="email" required="" placeholder="Email address" name="email" className="form-control" />
            </div>
            <input type="submit" value="Subscribe" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
    
    <div className="fpart-second">
      <div className="container">
        <div id="powered" className="clearfix">
          <div className="powered_text pull-left flip">
            <p>Reunion © 2018</p>
          </div>
          <div className="social pull-right flip"> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/socialicons/facebook.png" alt="Facebook" title="Facebook" /></a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/socialicons/twitter.png" alt="Twitter" title="Twitter" /> </a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/socialicons/google_plus.png" alt="Google+" title="Google+" /> </a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/socialicons/pinterest.png" alt="Pinterest" title="Pinterest" /> </a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/socialicons/rss.png" alt="RSS" title="RSS" /> </a> </div>
        </div>
        <div className="bottom-row">
          <div className="custom-text text-center">
              <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum.</p>
          </div>
          <div className="payments_types"> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/payment/payment_paypal.png" alt="paypal" title="PayPal" /></a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/payment/payment_american.png" alt="american-express" title="American Express" /></a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/payment/payment_2checkout.png" alt="2checkout" title="2checkout" /></a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/payment/payment_maestro.png" alt="maestro" title="Maestro" /></a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/payment/payment_discover.png" alt="discover" title="Discover" /></a> <a href="#" target="_blank"> <img data-toggle="tooltip" src="image/payment/payment_mastercard.png" alt="mastercard" title="MasterCard" /></a> </div>
        </div>

      </div>
    </div>
    <div id="back-top"><a data-toggle="tooltip" title="Back to Top" href="javascript:void(0)" className="backtotop"><i className="fa fa-chevron-up"></i></a></div>
  </footer>

  )
}

module.exports = Footer
