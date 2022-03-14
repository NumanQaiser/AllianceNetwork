import React from 'react'

function Footer() {
    return (
        <div>
            {/* ======= Footer ======= */}
            <footer id="footer">
                {/* <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action method="post">
                                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4> Alliance Network</h4>
                                <p>
                                    965 Tinton Ave  <br />
                                    Apt 10A Bronx<br />
                                    NY 10456 <br /><br />
                                    <strong>Phone:</strong>  (913) 374-5423<br />
                                    <strong>Email:</strong> support@alliancenetworkcorp.com<br />
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Paid seerach Targeting</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Tracking from impression Level</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Dynamic Landing Pages</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Data CApture Technology</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Demographic and overly analysing</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>You can reach us through our social media accounts</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        © Copyright <strong><span>Alliance Network</span></strong>. All Rights Reserved
                    </div>
                    
                </div>
            </footer>{/* End Footer */}
        </div>
    )
}

export default Footer