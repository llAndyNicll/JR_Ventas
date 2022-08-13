import React from 'react';
import img2 from '../../img/product01.png';
import img3 from '../../img/product02.png';
import img4 from '../../img/shop01.png';
import img5 from '../../img/shop02.png';
import img6 from '../../img/shop03.png';
import img7 from '../../img/product03.png';
import img8 from '../../img/product04.png';
import img9 from '../../img/product05.png';
import img10 from '../../img/product06.png';
import img11 from '../../img/product07.png';
import img12 from '../../img/product08.png';

export const Home = () => {

  return (
    <>

      	<div className="section">
			  <div className="container">
				  <div className="row">
					  <div className="col-md-4 col-xs-6">
						  <div className="shop">
							  <div className="shop-img">
								  <img src={ img4 } alt="" />
							  </div>
							  <div className="shop-body">
								  <h3>Laptop<br />Coleccion</h3>
								  <a href="#" className="cta-btn">Comprar ahora <i className="fa fa-arrow-circle-right"></i></a>
							  </div>
						  </div>
					  </div>

					  <div className="col-md-4 col-xs-6">
						  <div className="shop">
							  <div className="shop-img">
								  <img src={ img6 } alt="" />
							  </div>
							  <div className="shop-body">
								  <h3>Accesorios<br />Coleccion</h3>
								  <a href="#" className="cta-btn">Comprar ahora <i className="fa fa-arrow-circle-right"></i></a>
							  </div>
						  </div>
					  </div>

					  <div className="col-md-4 col-xs-6">
						  <div className="shop">
							  <div className="shop-img">
								  <img src={ img5 } alt="" />
							  </div>
							  <div className="shop-body">
								  <h3>Camaras<br />Coleccion</h3>
								  <a href="#" className="cta-btn">Comprar ahora <i className="fa fa-arrow-circle-right"></i></a>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		</div>

      	<div className="section">
			  <div className="container">
				  <div className="row">
					  <div className="col-md-12">
						  <div className="section-title">
							  <h3 className="title">Nuevos Productos</h3>
							  <div className="section-nav">
								  <ul className="section-tab-nav tab-nav">
									  <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									  <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
									  <li><a data-toggle="tab" href="#tab1">Camaras</a></li>
									  <li><a data-toggle="tab" href="#tab1">Accesorios</a></li>
								  </ul>
							  </div>
						  </div>
					  </div>

						<div className="row">
							<div className="col-md-3 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src={ img2 } alt="" />
										<div className="product-label">
											<span className="sale">-30%</span>
											<span className="new">NEW</span>
										</div>
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src={ img3 } alt="" />
										<div className="product-label">
											<span className="new">NEW</span>
										</div>
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o"></i>
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div className="clearfix visible-sm visible-xs"></div>

							<div className="col-md-3 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src={ img7 } alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src={ img8 } alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>
						</div>
				  </div>
			  </div>
		</div>

      	<br />

      	<div id="hot-deal" className="section">
			  <div className="container">
				  <div className="row">
					  <div className="col-md-12">
						  <div className="hot-deal">
							  <ul className="hot-deal-countdown">
								  <li>
									  <div>
										  <h3>02</h3>
										  <span>DIAS</span>
									  </div>
								  </li>
								  <li>
									  <div>
										  <h3>10</h3>
										  <span>HORAS</span>
									  </div>
								  </li>
								  <li>
									  <div>
										  <h3>34</h3>
										  <span>MINUTOS</span>
									  </div>
								  </li>
								  <li>
									  <div>
										  <h3>60</h3>
										  <span>SEGUNDOS</span>
									  </div>
								  </li>
							  </ul>
							  <h2 className="text-uppercase">gran oferta esta semana</h2>
							  <p>CAMARAS Hasta 50% DE DESCUENTO</p>
							  <a className="primary-btn cta-btn" href="#">Comprar ahora</a>
						  </div>
					  </div>
				  </div>
			  </div>
		</div>

	  	<div className="section">
			  <div className="container">
				  <div className="row">
					  <div className="col-md-12">
						  <div className="section-title">
							  <h3 className="title">MÁS VENDIDOS</h3>
							  <div className="section-nav">
								  <ul className="section-tab-nav tab-nav">
									  <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									  <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
									  <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
									  <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
								  </ul>
							  </div>
						  </div>
					  </div>

						<div className="row">
							<div className="col-md-3 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src={ img9 } alt="" />
										<div className="product-label">
											<span className="sale">-30%</span>
											<span className="new">NEW</span>
										</div>
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src={ img10 } alt="" />
										<div className="product-label">
											<span className="new">NEW</span>
										</div>
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o"></i>
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div className="clearfix visible-sm visible-xs"></div>

							<div className="col-md-3 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src={ img11 } alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div className="col-md-3 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src={ img12 } alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>
						</div>
				  </div>
			  </div>
		</div>

		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">MÁS VENDIDOS</h4>
							<div className="section-nav">
								<div id="slick-nav-3" className="products-slick-nav"></div>
							</div>
						</div>

						<div className="products-widget-slick" data-nav="#slick-nav-3">
							<div>
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product07.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>

								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product08.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>

								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product09.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">MÁS VENDIDOS</h4>
							<div className="section-nav">
								<div id="slick-nav-4" className="products-slick-nav"></div>
							</div>
						</div>

						<div className="products-widget-slick" data-nav="#slick-nav-4">
							<div>
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product04.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>

								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product05.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>

								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product06.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="clearfix visible-sm visible-xs"></div>

					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">MÁS VENDIDOS</h4>
							<div className="section-nav">
								<div id="slick-nav-5" className="products-slick-nav"></div>
							</div>
						</div>

						<div className="products-widget-slick" data-nav="#slick-nav-5">
							<div>
								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product01.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>

								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product02.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>

								<div className="product-widget">
									<div className="product-img">
										<img src="./img/product03.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
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
