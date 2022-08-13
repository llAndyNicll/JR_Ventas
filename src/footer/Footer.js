import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (
    <>

        <div id="newsletter" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Regístrese para el <strong>BOLETIN INFORMATIVO</strong></p>
							<form>
								<input className="input" type="email" placeholder="Escribe tu Gmail" />
								<button className="newsletter-btn"><i className="fa fa-envelope"></i> Suscribirse</button>
							</form>
							<ul className="newsletter-follow">
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

		<footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Sobre Nosotros</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
								<ul className="footer-links">
									<li><a href="https://www.google.com/maps/place/Comandante+Enrique+Faverio+781,+Puente+Alto,+8210119,+Regi%C3%B3n+Metropolitana/@-33.6083551,-70.5918639,17z/data=!3m1!4b1!4m5!3m4!1s0x9662d7a77d6459df:0x66b824fccf1a439e!8m2!3d-33.6083551!4d-70.5896752?hl=es-CL" target="_blank"><i className="fa fa-map-marker"></i>781 Enrique Faverio</a></li>
									<li><a href="https://api.whatsapp.com/send/?phone=56953666549&text&type=phone_number&app_absent=0" target="_blank"><i className="fa fa-phone"></i>+56-9-5366-6549</a></li>
									<li><Link to="/contactanos"><i className="fa fa-envelope-o"></i>jr_ventas@gmail.com</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Categorias</h3>
								<ul className="footer-links">
						  			<li><Link to="/ofertas">Ofertas</Link></li>
						  			<li><Link to="/electronicos">Electronicos</Link></li>
						  			<li><Link to="/agua-purificada">Agua Purificada</Link></li>
						  			<li><Link to="/anime">Anime</Link></li>
						  			<li><Link to="/ventas-usuarios">Ventas Usuarios</Link></li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Informacion</h3>
								<ul className="footer-links">
									<li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
									<li><Link to="/contactanos">Contactanos</Link></li>
									<li><Link to="/politica-privacidad">Politica de Privacidad</Link></li>
									<li><Link to="/cambios-devoluciones">Cambios y Devoluciones</Link></li>
									<li><Link to="/terminos-condiciones">Terminos y Condiciones</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Servicios</h3>
								<ul className="footer-links">
									<li><Link to="/mi-cuenta">Mi Cuenta</Link></li>
									<li><Link to="/carrito">Ver Carrito</Link></li>
									<li><Link to="deseos">Lista de Deseos</Link></li>
									<li><Link to="/mi-cuenta/seguimiento-pedido">Seguimiento de mi Pedido</Link></li>
									<li><Link to="/boletin-informativo">Boletin Informativo</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								<li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
								<li><a href="#"><i className="fa fa-credit-card"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
							</ul>
							<span className="copyright">
								Copyright &copy;<script>document.write(new Date().getFullYear());</script> Todos los derechos reservados | Pagina Web desarrollada por <a href="https://colorlib.com" target="_blank">llAndyNicll</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>

    </>
  );
};
