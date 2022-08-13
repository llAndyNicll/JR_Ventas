import React from 'react';

export const Anime = () => {

  return (
    <>

        <div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="#">Inicio</a></li>
							<li className="active">Anime (227,490 Resultados)</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

        <div className="section">
			<div className="container">
				<div className="row">
					<div id="aside" className="col-md-3">
						<div className="aside">
							<h3 className="aside-title">Categorias</h3>
							<div className="checkbox-filter">

								<div className="input-checkbox">
									<input type="checkbox" id="category-1" />
									<label htmlFor="category-1">
										<span></span>
										Laptops
										<small className='styleC'>(120)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-2" />
									<label htmlFor="category-2">
										<span></span>
										Smartphones
										<small className='styleC'>(740)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-3" />
									<label htmlFor="category-3">
										<span></span>
										Camaras
										<small className='styleC'>(1450)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-4" />
									<label htmlFor="category-4">
										<span></span>
										Accesorios
										<small className='styleC'>(578)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-5" />
									<label htmlFor="category-5">
										<span></span>
										Laptops
										<small className='styleC'>(120)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-6" />
									<label htmlFor="category-6">
										<span></span>
										Smartphones
										<small className='styleC'>(740)</small>
									</label>
								</div>
							</div>
						</div>

						<div className="aside">
							<h3 className="aside-title">Precio</h3>
							<div className="price-filter">
								<div id="price-slider">
                                <input type="range" className="form-range" id="customRange1" />
                                </div>
								<div className="input-number price-min">
									<input id="price-min" type="number" value='1.000' onChange={ () => console.log( 'Hola' ) } />
									<span className="qty-up">+</span>
									<span className="qty-down">-</span>
								</div>
								<span>-</span>
								<div className="input-number price-max">
									<input id="price-max" type="number" value='990.000' onChange={ () => console.log( 'Hola' ) } />
									<span className="qty-up">+</span>
									<span className="qty-down">-</span>
								</div>
							</div>
						</div>

						<div className="aside">
							<h3 className="aside-title">Marca</h3>
							<div className="checkbox-filter">
								<div className="input-checkbox">
									<input type="checkbox" id="brand-1" />
									<label htmlFor="brand-1">
										<span></span>
										SAMSUNG
										<small className='styleC'>(578)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-2" />
									<label htmlFor="brand-2">
										<span></span>
										LG
										<small className='styleC'>(125)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-3" />
									<label htmlFor="brand-3">
										<span></span>
										SONY
										<small className='styleC'>(755)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-4" />
									<label htmlFor="brand-4">
										<span></span>
										SAMSUNG
										<small className='styleC'>(578)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-5" />
									<label htmlFor="brand-5">
										<span></span>
										LG
										<small className='styleC'>(125)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-6" />
									<label htmlFor="brand-6">
										<span></span>
										SONY
										<small className='styleC'>(755)</small>
									</label>
								</div>
							</div>
						</div>

						<div className="aside">
							<h3 className="aside-title">Mas Vendido</h3>
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

					<div id="store" className="col-md-9">
						<div className="store-filter clearfix">
							<div className="store-sort">
								<label>
									Ordenar Por:
									<select className="input-select styleC">
										<option value="0">Popular</option>
										<option value="1">Posicion</option>
									</select>
								</label>

								<label>
									Show:
									<select className="input-select styleC">
										<option value="0">20</option>
										<option value="1">50</option>
									</select>
								</label>
							</div>
							<ul className="store-grid">
								<li className="active"><i className="fa fa-th"></i></li>
								<li><a href="#"><i className="fa fa-th-list"></i></a></li>
							</ul>
						</div>

						<div className="row">
							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product01.png" alt="" />
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
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product02.png" alt="" />
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
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>

							<div className="clearfix visible-sm visible-xs"></div>

							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product03.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>

							<div className="clearfix visible-lg visible-md"></div>

							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product04.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>

							<div className="clearfix visible-sm visible-xs"></div>

							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product05.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product06.png" alt="" />
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
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>

							<div className="clearfix visible-lg visible-md visible-sm visible-xs"></div>

							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product07.png" alt="" />
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
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product08.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>

							<div className="clearfix visible-sm visible-xs"></div>

							<div className="col-md-4 col-xs-6">
								<div className="product">
									<div className="product-img">
										<img src="./img/product09.png" alt="" />
									</div>
									<div className="product-body">
										<p className="product-category">Categoria</p>
										<h3 className="product-name"><a href="#">Nombre producto</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
										<div className="product-rating">
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">añadir a deseos</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">comparar</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">vista rapida</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i>añadir al carro</button>
									</div>
								</div>
							</div>
						</div>

						<div className="store-filter clearfix">
							<span className="store-qty">Mostrando 20-100 productos</span>
							<ul className="store-pagination">
								<li className="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

    </>
  );
};
