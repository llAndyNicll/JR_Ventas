import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/logo.png';
import img2 from '../img/product01.png';
import img3 from '../img/product02.png';

export const Navbar = () => {

  return (
    <>

        <header>
			  <div id="top-header">
				  <div className="container">
					  <ul className="header-links pull-left">
						  <li><a href="https://api.whatsapp.com/send/?phone=56953666549&text&type=phone_number&app_absent=0" target="_blank"><i className="fa fa-phone"></i> +56-9-5366-6549</a></li>
						  <li><Link to="/contactanos"><i className="fa fa-envelope-o"></i> jr_ventas@gmail.com</Link></li>
						  <li><a href="https://www.google.com/maps/place/Comandante+Enrique+Faverio+781,+Puente+Alto,+8210119,+Regi%C3%B3n+Metropolitana/@-33.6083551,-70.5918639,17z/data=!3m1!4b1!4m5!3m4!1s0x9662d7a77d6459df:0x66b824fccf1a439e!8m2!3d-33.6083551!4d-70.5896752?hl=es-CL" target="_blank"><i className="fa fa-map-marker"></i> 781 Enrique Faverio</a></li>
					  </ul>
					  <ul className="header-links pull-right">
						  <li><a href="https://www.google.com/search?q=clp&oq=clp&aqs=chrome..69i57j69i59j0i433i512j0i512l2j0i131i433i512j0i512l2j0i131i433i512j0i512.2009j0j4&sourceid=chrome&ie=UTF-8" target="_blank"><i className="fa fa-dollar"></i> CLP</a></li>
						  <li><Link to="mi-cuenta"><i className="fa fa-user-o"></i> Mi Cuenta</Link></li>
					  </ul>
				  </div>
			  </div>

			  <div id="header">
				  <div className="container">
					  <div className="row">
						  <div className="col-md-3">
							  <div className="header-logo">
								  <Link to="/" className="logo">
									  <img src={ img1 } alt="" />
								  </Link>
							  </div>
						  </div>

						  <div className="col-md-6">
							  <div className="header-search">
								  <form>
									  <select className="input-select">
										  <option value="0">Categorias</option>
										  <option value="1">Electronicos</option>
										  <option value="1">Agua Purificada</option>
										  <option value="1">Anime</option>
										  <option value="1">Ventas Usuarios</option>
									  </select>
									  <input className="input" placeholder="Busca aquí" />
									  <button className="search-btn">Buscar</button>
								  </form>
							  </div>
						  </div>

						  <div className="col-md-3 clearfix">
							  <div className="header-ctn">
								  <div>
									  <Link to="/deseos">
										  <i className="fa fa-heart-o"></i>
										  <span>Deseos</span>
										  <div className="qty">2</div>
									  </Link>
								  </div>

								  <div className="dropdown">
									  <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
										  <i className="fa fa-shopping-cart"></i>
										  <span>Carrito</span>
										  <div className="qty">3</div>
									  </a>
									  <div className="cart-dropdown">
										  <div className="cart-list">
											  <div className="product-widget">
												  <div className="product-img">
													  <img src={ img2 } alt="" />
												  </div>
												  <div className="product-body">
													  <h3 className="product-name"><a href="#">Nombre producto</a></h3>
													  <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
												  </div>
												  <button className="delete"><i className="fa fa-close"></i></button>
											  </div>

											  <div className="product-widget">
												  <div className="product-img">
													  <img src={ img3 } alt="" />
												  </div>
												  <div className="product-body">
													  <h3 className="product-name"><a href="#">Nombre producto</a></h3>
													  <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
												  </div>
												  <button className="delete"><i className="fa fa-close"></i></button>
											  </div>
										  </div>
										  <div className="cart-summary">
											  <small>3 Item(s) seleccionados</small>
											  <h5>SUBTOTAL: $2940.00</h5>
										  </div>
										  <div className="cart-btns">
											  <Link to="/carrito">Ver Carrito</Link>
											  <Link to="/comprar">Comprar  <i className="fa fa-arrow-circle-right"></i></Link>
										  </div>
									  </div>
								  </div>

								  <div className="menu-toggle">
									  <a href="#">
										  <i className="fa fa-bars"></i>
										  <span>Menu</span>
									  </a>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		</header>

      	<nav id="navigation">
			  <div className="container">
				  <div id="responsive-nav">
					  <ul className="main-nav nav navbar-nav">
						  <li className="active"><Link to="/">Inicio</Link></li>
						  <li><Link to="/ofertas">Ofertas</Link></li>
						  <li><Link to="/electronicos">Electronicos</Link></li>
						  <li><Link to="/agua-purificada">Agua Purificada</Link></li>
						  <li><Link to="/anime">Anime</Link></li>
						  <li><Link to="/ventas-usuarios">Ventas Usuarios</Link></li>
						  <li><Link to="/contactanos">Contactanos</Link></li>
					  </ul>
				  </div>
			  </div>
		</nav>

    </>
  );
};
