import React from 'react';

export const Productos = () => {

  return (
    <>

        <div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="#">Inicio</a></li>
							<li><a href="#">Categorias</a></li>
							<li><a href="#">Accesorios</a></li>
							<li><a href="#">Laptops</a></li>
							<li className="active">Nombre Productos</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

        <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-md-push-2">
						<div id="product-main-img">
							<div className="product-preview">
								<img src="./img/product01.png" alt="" />
							</div>
						</div>
					</div>

					<div className="col-md-2  col-md-pull-5">
						<div id="product-imgs">
							<div className="product-preview">
								<img src="./img/product03.png" alt="" />
							</div>

							<div className="product-preview">
								<img src="./img/product06.png" alt="" />
							</div>

							<div className="product-preview">
								<img src="./img/product08.png" alt="" />
							</div>
						</div>
					</div>

					<div className="col-md-5">
						<div className="product-details">
							<h2 className="product-name">Nombre Productos</h2>
							<div>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</div>
								<a className="review-link" href="#">10 Reseña(s) | Añade tu reseña</a>
							</div>
							<div>
								<h3 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h3>
								<span className="product-available">En Stock</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

							<div className="product-options">
								<label className='styleC'>
									Talla 
									<select className="input-select styleC">
										<option value="0">X</option>
									</select>
								</label>
								<label>
									Color
									<select className="input-select styleC">
										<option value="0">Red</option>
									</select>
								</label>
							</div>

							<div className="add-to-cart">
								<div className="qty-label">
									Cantidad
									<div className="input-number styleC">
										<input type="number" value={ 1 } />
										<span className="qty-up">+</span>
										<span className="qty-down">-</span>
									</div>
								</div>
								<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> añadir al carrito</button>
							</div>

							<ul className="product-btns">
								<li><a href="#"><i className="fa fa-heart-o"></i> añadir a deseos</a></li>
								<li><a href="#"><i className="fa fa-exchange"></i> comparar</a></li>
							</ul>

							<ul className="product-links">
								<li>Categoria:</li>
								<li><a href="#">Laptops</a></li>
								<li><a href="#">Accesorios</a></li>
							</ul>

							<ul className="product-links">
								<li>Redes:</li>
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-envelope"></i></a></li>
							</ul>

						</div>
					</div>

					<div className="col-md-12">
						<div id="product-tab">
							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Descripcion</a></li>
								<li><a data-toggle="tab" href="#tab2">Detalles</a></li>
								<li><a data-toggle="tab" href="#tab3">Reseñas (3)</a></li>
							</ul>

							<div className="tab-content">
								<div id="tab1" className="tab-pane fade in active">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>

								<div id="tab2" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>

								<div id="tab3" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-3">
											<div id="rating">
												<div className="rating-avg">
													<span>4.5</span>
													<div className="rating-stars">
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star-o"></i>
													</div>
												</div>
												<ul className="rating">
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-progress">
															<div className='styleA'></div>
														</div>
														<span className="sum">3</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div className='styleB'></div>
														</div>
														<span className="sum">2</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
												</ul>
											</div>
										</div>

										<div className="col-md-6">
											<div id="reviews">
												<ul className="reviews">
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
												</ul>
												<ul className="reviews-pagination">
													<li className="active">1</li>
													<li><a href="#">2</a></li>
													<li><a href="#">3</a></li>
													<li><a href="#">4</a></li>
													<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
												</ul>
											</div>
										</div>

										<div className="col-md-3">
											<div id="review-form">
												<form className="review-form">
													<input className="input" type="text" placeholder="Su Nombre" />
													<input className="input" type="email" placeholder="Su Email" />
													<textarea className="input" placeholder="Su Reseña"></textarea>
													<div className="input-rating">
														<span>Su Calificacion: </span>
														<div className="stars">
															<input id="star5" name="rating" value="5" type="radio" /><label htmlFor="star5"></label>
															<input id="star4" name="rating" value="4" type="radio" /><label htmlFor="star4"></label>
															<input id="star3" name="rating" value="3" type="radio" /><label htmlFor="star3"></label>
															<input id="star2" name="rating" value="2" type="radio" /><label htmlFor="star2"></label>
															<input id="star1" name="rating" value="1" type="radio" /><label htmlFor="star1"></label>
														</div>
													</div>
													<button className="primary-btn">Enviar</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

        <div class="section">
			  <div class="container">
				  <div class="row">

                  <div class="col-md-12">
						<div class="section-title text-center">
							<h3 class="title">Productos Relacionados</h3>
						</div>
					</div>

						<div class="row">
							<div class="col-md-3 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product01.png" alt="" />
										<div class="product-label">
											<span class="sale">-30%</span>
										</div>
									</div>
									<div class="product-body">
										<p class="product-category">Categoria</p>
										<h3 class="product-name"><a href="#">Nombre producto</a></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">añadir a deseos</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">Comparar</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div class="col-md-3 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product02.png" alt="" />
										<div class="product-label">
											<span class="new">NEW</span>
										</div>
									</div>
									<div class="product-body">
										<p class="product-category">Categoria</p>
										<h3 class="product-name"><a href="#">Nombre producto</a></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">añadir a deseos</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">Comparar</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div class="clearfix visible-sm visible-xs"></div>

							<div class="col-md-3 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product03.png" alt="" />
									</div>
									<div class="product-body">
										<p class="product-category">Categoria</p>
										<h3 class="product-name"><a href="#">Nombre producto</a></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
										<div class="product-rating">
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">añadir a deseos</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">Comparar</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> añadir al carrito</button>
									</div>
								</div>
							</div>

							<div class="col-md-3 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product04.png" alt="" />
									</div>
									<div class="product-body">
										<p class="product-category">Categoria</p>
										<h3 class="product-name"><a href="#">Nombre producto</a></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
										<div class="product-rating">
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">añadir a deseos</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">Comparar</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> añadir al carrito</button>
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
