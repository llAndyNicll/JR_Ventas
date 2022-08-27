import React from 'react';
import { Link } from 'react-router-dom';

export const Carrito = () => {

  return (
    <>

      <div id="breadcrumb" className="section">
			  <div className="container">
				  <div className="row">
					  <div className="col-md-12">
						  <ul className="breadcrumb-tree">
							  <li><Link to="/">Inicio</Link></li>
							  <li className="active">Carrito (227 Productos)</li>
						  </ul>
					  </div>
				  </div>
			  </div>
		  </div>

      <div className="section">
			  <div className="container">
				  <div className="row">
					  <div className="col-md-12">
              <div className="site-wrap">
                <h1 className="text-center"><i className="fa fa-shopping-cart car"></i> MI CARRITO</h1>
                <br />
                <div className="site-section">
                  <div className="container">
                    <div className="row mb-5">
                      <form className="col-md-12" method="post">
                        <div className="site-blocks-table">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th className="product-thumbnail site-wrapp"><div><strong>IMAGEN</strong></div></th>
                                <th className="product-name site-wrapp"><div><strong>PRODUCTO</strong></div></th>
                                <th className="product-price site-wrapp"><div><strong>PRECIO</strong></div></th>
                                <th className="product-quantity site-wrapp"><div><strong>CANTIDAD</strong></div></th>
                                <th className="product-total site-wrapp"><div><strong>TOTAL</strong></div></th>
                                <th className="product-remove site-wrapp"><div><strong>ELIMINAR</strong></div></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="product-thumbnail">
                                  <img src="./img/product01.png" alt="Image" className="img-fluid styleF" />
                                </td>
                                <td className="product-name">
                                  <div className='center'>Nombre Producto</div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td className='input1'>
                                  <div className="input-number styleG">
										                <input type="number" value={ 1 } />
						        				        <span className="qty-up">+</span>
						        				        <span className="qty-down">-</span>
						        			        </div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td><div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong>X</strong></div></a></div></td>
                              </tr>
                              <tr>
                                <td className="product-thumbnail">
                                  <img src="./img/product02.png" alt="Image" className="img-fluid styleF" />
                                </td>
                                <td className="product-name">
                                  <div className='center'>Nombre Producto</div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td className='input1'>
                                  <div className="input-number styleG">
						        				        <input type="number" value={ 1 } />
						        				        <span className="qty-up">+</span>
										                <span className="qty-down">-</span>
									                </div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td><div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong>X</strong></div></a></div></td>
                              </tr>
                              <tr>
                                <td className="product-thumbnail">
                                  <img src="./img/product03.png" alt="Image" className="img-fluid styleF" />
                                </td>
                                <td className="product-name">
                                  <div className='center'>Nombre Producto</div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td className='input1'>
                                  <div className="input-number styleG">
										                <input type="number" value={ 1 } />
										                <span className="qty-up">+</span>
										                <span className="qty-down">-</span>
									                </div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td><div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong>X</strong></div></a></div></td>
                              </tr>
                              <tr>
                                <td className="product-thumbnail">
                                  <img src="./img/product04.png" alt="Image" className="img-fluid styleF" />
                                </td>
                                <td className="product-name">
                                  <div className='center'>Nombre Producto</div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td className='input1'>
                                  <div className="input-number styleG">
										                <input type="number" value={ 1 } />
										                <span className="qty-up">+</span>
										                <span className="qty-down">-</span>
									                </div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td><div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong>X</strong></div></a></div></td>
                              </tr>
                              <tr>
                                <td className="product-thumbnail">
                                  <img src="./img/product05.png" alt="Image" className="img-fluid styleF" />
                                </td>
                                <td className="product-name">
                                  <div className='center'>Nombre Producto</div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td className='input1'>
                                  <div className="input-number styleG">
										                <input type="number" value={ 1 } />
										                <span className="qty-up">+</span>
										                <span className="qty-down">-</span>
									                </div>
                                </td>
                                <td>
                                  <div className='center'>$980.00</div>
                                </td>
                                <td><div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong>X</strong></div></a></div></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </form>
                    </div>

                    <br />

                    <div className="row mb-5">
                      <div className="col-md-7">
                        <div className="row mb-5">
                          <div className="col-md-4 mb-3 mb-md-0">
                            <button className="btn btn-primary btn-sm btn-block"><div><strong>Actualizar Carrito</strong></div></button>
                          </div>
                          <div className="col-md-4">
                            <button className="btn btn-primary btn-sm btn-block"><div><strong>Continuar Comprando</strong></div></button>
                          </div>
                        </div>

                        <br />
                        <br />

                        <div className="row">
                          <div className="col-md-12">
                            <label className="text-black h4" htmlFor="coupon">Cupon</label>
                            <p>Ingrese su código de cupón si tiene uno.</p>
                          </div>
                          <div className="col-md-5 mb-3 mb-md-0">
                            <input onChange={ () => console.log( 'Hola' ) } type="text" className="form-control py-3" id="coupon" placeholder="Escriba el codigo" />
                          </div>
                          <div className="col-md-3">
                            <button className="btn btn-primary btn-sm"><div>Aplicar Descuento</div></button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 styleH">
                        <div className="row">
                          <div className="col-md-12 order-details">
                            <div className="row">
                              <div className="col-md-12 text-center border-bottom mb-5 title-total">
                                <h3 className="text-black h4 text-uppercase"><h3 class="title">Total Carrito</h3></h3>
                              </div>
                            </div>

                            <br />

                            <div className="row mb-3">
                              <div className="col-md-6">
                                <span className="text-black"><h4 class="title">SubTotal</h4></span>
                              </div>

                              <div className="col-md-6 text-right">
                                <h4 class="title">$2940.00</h4>
                              </div>
                            </div>

                            <br />

                            <div className="row mb-5">
                              <div className="col-md-6">
                                <span className="text-black"><h4 class="title">Total</h4></span>
                              </div>
                              <div className="col-md-6 text-right">
                                <h4 class="title red">$4505.00</h4>
                              </div>
                            </div>

                            <br />

                            <div className="row">
                              <div className="col-md-12">
                                <button className="btn btn-primary btn-lg py-3 btn-block btn-pago" onClick="window.location='checkout.html'">Procede al Pago</button>
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
				  </div>
			  </div>
		  </div>

    </>
  );
};
