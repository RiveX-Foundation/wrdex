import React, { Component } from 'react';
import {
	Link
  } from "react-router-dom";
import Logo from '../src/images/logo.png';
import ArrowPrev from '../src/images/landing/arrow_left.png';
import ArrowNext from '../src/images/landing/arrow_right.png';
import Banner01 from '../src/images/banner/01.png';
import FooterLogo from '../src/images/landing/wrdex_color.png';
//Item
import Item01 from '../src/images/landing/graphic_1.png';
import Item02 from '../src/images/landing/graphic_2.png';
import Item03 from '../src/images/landing/graphic_3.png';
import Item04 from '../src/images/landing/graphic_4.png';
import Item05 from '../src/images/landing/graphic_5.png';
import Item06 from '../src/images/landing/graphic_6.png';
//icon
import Icon01 from '../src/images/landing/icon_1.png';
import Icon02 from '../src/images/landing/icon_2.png';
import Icon03 from '../src/images/landing/icon_3.png';
//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/landing.scss';
import './styles/landing_responsive.scss';

export class Header extends Component {
	constructor(props) {
        super(props);
        
	}

	render() {
		return (
			<header className="landingheader">
				<div className="container">
					<img src={Logo}  className="logo"/>
					<a href="/main" className="colorbtn">
						EXCHANGE
					</a>
				</div>
			</header>
		);
	}
}


export class Footer extends Component {
	constructor(props) {
        super(props);
        
	}

	render() {
		return (
			<footer className="landingfooter">
				<div className="container">
					<div className="inner">
						<div className="footeritem">
							<img src={FooterLogo} width="50" height="50" />
							<div className="subscribebtn">SUBSCRIBE TO NEWSLETTER</div>
						</div>
						<div className="footeritem">
							<div className="footerlink">Site</div>
							<div className="footerlink">Terms and Condition</div>
							<div className="footerlink">Privacy Policy</div>
							<div className="footerlink">Company Homepage</div>
						</div>
						<div className="footeritem">
							<div className="footerlink">Social Media</div>
							<div>
								<img src={Icon01} className="footericon" />
								<img src={Icon02} className="footericon" />
								<img src={Icon03} className="footericon" />
							</div>
						</div>
					</div>
					<div className="copyright">© 2019, WRDEX, Inc. All Rights Reserved.</div>
				</div>
			</footer>
		);
	}
}


export default class Landing extends Component {
	constructor(props) {
        super(props);
		this.state = {
			settings : {
				dots: false,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				// adaptiveHeight: true,
				// centerMode: true,
				prevArrow: <img src={ArrowPrev} className="slickarrow" />,
				nextArrow: <img src={ArrowNext} className="slickarrow" />,
			}
		}
	}

	componentDidMount(){
		AOS.init();
	}

	render() {
		return (
			<div className="main">
				<Header />
				<div className="sliderctn">
					<Slider {...this.state.settings}>
						<div>
							<img src={Banner01} className="slickimg" />
						</div>
						{/* <div>
							<img src={Banner01} className="slickimg" />
						</div> */}
					</Slider>
				</div>
				<div className="landingcenter">
					<div className="container">
						<div className="landingitem one" data-aos="fade-up-right">
							<div className="title">CROSS-CHAIN</div>
							<div className="info">
								<div className="imgctn">
									<img src={Item01} className="itemimg" />
								</div>
								<div className="mobiletitle">CROSS-CHAIN</div>
								<div className="desc">
									A highly decentralized exchange of digital assets
									with wrapped BTC and ETH , more to be added in
									the future. 
								</div>
							</div>
						</div>
						<div className="landingitem end two" data-aos="fade-up-left">
							<div className="title">PRIVATE SECURITY</div>
							<div className="info">
								<div className="desc rtl">
									No login required and wallet private key never leave the browser 
								</div>
								<div className="mobiletitle">PRIVATE SECURITY</div>
								<div className="imgctn">
									<img src={Item02} className="itemimg two"/>
								</div>
							</div>
						</div>
						<div className="landingitem three" data-aos="fade-up-right">
							<div className="title">NON-CUSTODIAL</div>
							<div className="info">
								<div className="imgctn">
									<img src={Item03} className="itemimg"/>
								</div>
								<div className="mobiletitle">NON-CUSTODIAL</div>
								<div className="desc">
									Private keys are fully owned by the users making it more secured.
								</div>
							</div>
						</div>
						<div className="landingitem end four" data-aos="fade-up-left">
							<div className="title">ON-CHAIN SETTLEMENT</div>
							<div className="info">
								<div className="desc rtl">
									Transactions are happened on-chain to embark a transparent trading environment.
								</div>
								<div className="mobiletitle">ON-CHAIN SETTLEMENT</div>
								<div className="imgctn">
									<img src={Item04} className="itemimg two"/>
								</div>
							</div>
						</div>
						<div className="landingitem five" data-aos="fade-up-right">
							<div className="title">MULTI WALLET INTEGRATION</div>
							<div className="info">
								<div className="imgctn">
									<img src={Item05} className="itemimg"/>
								</div>
								<div className="mobiletitle">MULTI WALLET INTEGRATION</div>
								<div className="desc">
									Currenlty supported by RiveX Wallet and WanWallet. Trezor and
									Ledger are the upcoming supporting hardware wallets. More
									cold and hot wallets to be supported. 								 
								</div>
							</div>
						</div>
						<div className="landingitem end six" data-aos="fade-up-left">
							<div className="title">PORTFOLIO MANAGEMENT</div>
							<div className="info">
								<div className="desc rtl">
									Ease of managing assets with user friendly portfolio manager.
								</div>
								<div className="mobiletitle">PORTFOLIO MANAGEMENT</div>
								<div className="imgctn">
									<img src={Item06} className="itemimg two"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
