import React from 'react'
import Envelope from "../assets/images/envelope-outline.svg";

export default function Footer() {
  return (
    <>
        <footer className="footer-section text-left">
			<div className="container relative">

				<div className="sofa-img">
					<img src={require('../assets/images/sofa.png')} alt="Image" className="img-fluid" />
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center">
								<span>Shopify Headless CMS With ReactJS</span>
							</h3>
						</div>
					</div>
				</div>

				
				<div className="border-top copyright text-center">
					<div className="row pt-4 pb-4">
						<div className="col-lg-12">
							<p className="text-center mb-0">
								Copyright &copy; 2024. All Rights Reserved. 
							</p>
						</div>
					</div>
				</div>

			</div>
		</footer>
    </>
  )
}
