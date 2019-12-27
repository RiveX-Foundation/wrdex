import React, { Component } from 'react';
import {
	Link
} from "react-router-dom";
import axios from 'axios';
import Logo from '../src/images/logo.png';
import ArrowPrev from '../src/images/landing/arrow_left.png';
import ArrowNext from '../src/images/landing/arrow_right.png';
// import Banner01 from '../src/images/banner/01.png';
import FooterLogo from '../src/images/WR_1.png';
//Item
import Item01 from '../src/images/landing/graphic_1.png';
import Item02 from '../src/images/landing/graphic_2.png';
import Item03 from '../src/images/landing/graphic_3.png';
import Item04 from '../src/images/landing/graphic_4.png';
import Item05 from '../src/images/landing/graphic_5.png';
import Item06 from '../src/images/landing/graphic_6.png';
//icon
import newsletter from '../src/images/landing/newsletter.png';
// import Icon01 from '../src/images/landing/icon_1.png';
// import Icon02 from '../src/images/landing/icon_2.png';
// import Icon03 from '../src/images/landing/icon_3.png';
// import Icon04 from '../src/images/landing/icon_4.png';
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
					<img src={Logo} className="logo" />
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
						<div className="newsletterctn">
							<img src={newsletter} />
							<div className="title">SUBSCRIBE TO OUR NEWSLETTER</div>
							{/* <input type="text" value={this.state.emailaddress} onChange={this.handleChange} placeholder="Your Email Address" className="newsletterinput"/> */}
							<div className="sendbtn" onClick={()=> window.open("https://docs.google.com/forms/d/e/1FAIpQLSfU06MUx3_6hc7N_vPf190JRUvyN8P1uWa5O4HTvEiobQrk7w/viewform","_blank")}>
								SUBSCRIBE
							</div>
						</div>
						{/* <div className="footeritem">
							<img src={FooterLogo} width="50" height="50" />
							<div className="subscribebtn">SUBSCRIBE TO NEWSLETTER</div>
						</div>
						<div className="footeritem">
							<div className="footerlink">Terms and Condition</div>
							<div className="footerlink">Privacy Policy</div>
							<div className="footerlink" onClick={()=> window.open('https://www.rivex.io/','_blank')}>Company Homepage</div>
						</div>
						<div className="footeritem">
							<div className="footerlink">Social Media</div>
							<div>
								<img src={Icon01} className="footericon" onClick={() => window.open('https://t.me/RiveXOfficial', '_blank')} />
								<img src={Icon02} className="footericon" onClick={() => window.open('https://medium.com/@RiveXOfficial', '_blank')} />
								<img src={Icon03} className="footericon" onClick={() => window.open('https://twitter.com/RiveXFoundation', '_blank')} />
								<img src={Icon04} className="footericon" onClick={() => window.open('https://github.com/RiveX-Foundation', '_blank')} />
							</div>
						</div> */}
					</div>
					<div className="footerbottom">
						<div className="copyright">© 2019, WRDEX, Inc. All Rights Reserved.</div>
						<div className="right">
							<div className="item">Terms and Condition</div>
							<div className="divider"></div>
							<div className="item">Privacy Policy</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}


export default class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: {
				dots: false,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				// adaptiveHeight: true,
				// centerMode: true,
				prevArrow: <img src={ArrowPrev} className="slickarrow" />,
				nextArrow: <img src={ArrowNext} className="slickarrow" />,
			},
			bannerlist: [],
			bannerfetch: false
		}
	}

	UNSAFE_componentWillMount() {
		this._getWRDEXBanner();
	}

	componentDidMount() {
		// AOS.init();
	}

	_getWRDEXBanner = () => {
		axios.post('http://rvxadmin.boxybanana.com/API/WRDex/GetWRDexBanner', {}).then((response) => {
			let result = response.data;
			// console.log(response);
			if (result.status == 200) {
				if (result.bannerlist.length > 0) {
					this.setState({
						bannerfetch: true,
						bannerlist: result.bannerlist
					})
				}
			}
		}).catch((error) => {
			console.log(error);
		});
	}

	render() {
		return (
			<div className="main">
				<Header />
				{this.state.bannerfetch ?
					<div className="sliderctn">
						<Slider {...this.state.settings}>
							{this.state.bannerlist.map((item, index) => {
								return (
									<div className="items" key={index}>
										<img style={item.RedirectUrl != "" && item.RedirectUrl != null ? { cursor: 'pointer' } : {}} src={item.PictureUrl} className="slickimg" onClick={item.RedirectUrl != "" && item.RedirectUrl != null ? () => window.open(`${item.RedirectUrl}`, '_blank') : null} />
									</div>
								)
							})}
						</Slider>
					</div>
					: null}
				<div className="landingcenter">
					<div className="container">
						<div className="landingitem">
							<div className="imgctn">
								<img src={Item01} className="itemimg" />
							</div>
							<div className="title">CROSS-CHAIN</div>
							<div className="desc">
								A highly decentralized exchange of digital assets with wrapped BTC and ETH , more to be added in the future.
							</div>
						</div>
						<div className="landingitem">
							<div className="imgctn">
								<img src={Item02} className="itemimg two" />
							</div>
							<div className="title">PRIVACY</div>
							<div className="desc">
								No logins are required as WRDEX is directly accessed from the user's wallets.
							</div>
						</div>
						<div className="landingitem">
							<div className="imgctn">
								<img src={Item03} className="itemimg" />
							</div>
							<div className="title">NON-CUSTODIAL</div>
							<div className="desc">
								Private keys are fully owned by the users making it more secured.
							</div>
						</div>
						<div className="landingitem">
							<div className="imgctn">
								<img src={Item04} className="itemimg two" />
							</div>
							<div className="title">ON-CHAIN SETTLEMENT</div>
							<div className="desc">
								Transactions are happened on-chain to embark a transparent trading environment.
							</div>
						</div>
						<div className="landingitem">
							<div className="imgctn">
								<img src={Item05} className="itemimg" />
							</div>
							<div className="title">MULTI WALLET INTEGRATION</div>
							<div className="desc">
								Currenlty supported by RiveX Wallet and WanWallet. Trezor and Ledger are the upcoming supporting hardware wallets. More cold and hot wallets to be supported.
							</div>
						</div>
						<div className="landingitem">
							<div className="imgctn">
								<img src={Item06} className="itemimg two" />
							</div>
							<div className="title">PORTFOLIO MANAGEMENT</div>
							<div className="desc">
								Ease of managing assets with user friendly portfolio manager.
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
