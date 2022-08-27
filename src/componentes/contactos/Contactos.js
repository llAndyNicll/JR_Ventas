import React from 'react';
import { Link } from 'react-router-dom';

export const Contactos = () => {

  return (
    <>

        <div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="#">Inicio</a></li>
							<li className="active">Contactanos</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
                        <div class="container-fluid pt-5">
                            <h1 className="text-center">VISITANOS O ESCRIBENOS</h1>
                            <br />
                            <div class="row px-xl-5">
                                <div class="col-lg-7 mb-5">
                                    <div class="contact-form">
                                        <div id="success"></div>
                                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                        <div class="form-group">
								<input class="input" type="text" name="first-name" placeholder="Su Nombre" />
							</div>
                            <div class="form-group">
								<input class="input" type="text" name="last-name" placeholder="Su Apellido" />
							</div>
							<div class="form-group">
								<input class="input" type="email" name="email" placeholder="Correo Electronico" />
							</div>
							<div class="form-group">
								<input class="input" type="text" name="sujeto" placeholder="Sujeto" />
							</div>
                            <div class="order-notes">
							<textarea class="input" placeholder="Mensajes"></textarea>
						</div>
                        <br />
                        <div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong>Enviar Mensaje</strong></div></a></div>

                    </form>
                </div>
            </div>
            <div class="col-lg-5 mb-5">
                <h5 class="font-weight-semi-bold mb-3">Como llegar ?</h5>
                <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                <br />
                <div class="d-flex flex-column mb-3">
                    <h5 class="font-weight-semi-bold mb-3">Direccion:</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>* Region Metropolitana</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>* Ciudad de Santiago</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>* Comuna Puente Alto</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>* Calle Comandante Enrique Faverio #781</p>
                </div>
                <br />
                <div class="d-flex flex-column">
                    <h5 class="font-weight-semi-bold mb-3">Contactos:</h5>
                    <ul className="footer-links blanco-negro">
					    <li><a href="https://api.whatsapp.com/send/?phone=56953666549&text&type=phone_number&app_absent=0" target="_blank"><i className="fa fa-phone"></i>+56-9-5366-6549</a></li>
						<li><Link to="/contactanos"><i className="fa fa-envelope-o"></i>jr_ventas@gmail.com</Link></li>
					</ul>
                </div>
                <br />
                <div class="d-flex flex-column">
                    <h5 class="font-weight-semi-bold mb-3">Redes Sociales:</h5>
                    <div className="newsletter redes-contacto">
							<ul className="newsletter-follow redes-contacto">
								<li>
									<a href="#"><i className="fa fa-facebook"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-instagram"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-pinterest"></i></a>
								</li>
							</ul>
						</div>
                </div>
            </div>
        </div>
    </div>

					</div>
				</div>
			</div>
		</div>
  
    </>
  );
};
