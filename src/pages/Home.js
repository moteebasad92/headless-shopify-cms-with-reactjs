import React from 'react'
import Truck from "../assets/images/truck.svg";
import Bag from "../assets/images/bag.svg";
import Support from "../assets/images/support.svg";
import Return from "../assets/images/return.svg";

export default function Home() {
  return (
    <>

        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt text-left">
                            <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src={require('../assets/images/couch.png')} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		
		<div className="product-section">
			<div className="container">
				<div className="row">

					
					<div className="col-md-12 col-lg-3 mb-5 mb-lg-0 text-left">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="shop.html" className="btn">Explore</a></p>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item" href="cart.html">
							<img src={require('../assets/images/product-1.png')}  className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item" href="cart.html">
							<img src={require('../assets/images/product-2.png')} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item" href="cart.html">
							<img src={require('../assets/images/product-3.png')} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={require('../assets/images/cross.svg')} className="img-fluid"/>
							</span>
						</a>
					</div>
					

				</div>
			</div>
		</div>
		
		<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6 text-left">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={ Truck } alt="Image" className="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={ Bag } alt="Image" className="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={ Support } alt="Image" className="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={ Return } alt="Image" className="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src={require('../assets/images/why-choose-us-img.jpg')} alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
		
		<div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src={require('../assets/images/img-grid-1.jpg')} alt="Untree.co"/></div>
							<div className="grid grid-2"><img src={require('../assets/images/img-grid-2.jpg')} alt="Untree.co"/></div>
							<div className="grid grid-3"><img src={require('../assets/images/img-grid-3.jpg')} alt="Untree.co"/></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5 text-left">
						<h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
						</ul>
						<p><a herf="#" className="btn">Explore</a></p>
					</div>
				</div>
			</div>
		</div>
	
		<div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6 text-left">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<a href="#" className="more">View All Posts</a>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={require('../assets/images/post-1.jpg')} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry text-left">
								<h3><a href="#">First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={require('../assets/images/post-2.jpg')} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry text-left">
								<h3><a href="#">How To Keep Your Furniture Clean</a></h3>
								<div className="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={require('../assets/images/post-3.jpg')} alt="Image" className="img-fluid" /></a>
							<div className="post-content-entry text-left">
								<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		
		
		
    </>
  )
}
