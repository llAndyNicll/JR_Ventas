import React from 'react';
import { Link } from 'react-router-dom';

export const Deseos = () => {

  return (
    <>

      <div id="breadcrumb" className="section">
			  <div className="container">
				  <div className="row">
					  <div className="col-md-12">
						  <ul className="breadcrumb-tree">
							  <li><Link to="/">Inicio</Link></li>
							  <li className="active">Deseos ( 227 Productos )</li>
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
                <h1 className="text-center"><i className="fa fa-heart-o car"></i> MI LISTA DE DESEOS</h1>
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
                                <th className="product-stock site-wrapp"><div><strong>ESTADO</strong></div></th>
                                <th className="product-quantity site-wrapp"><div><strong>AÑADIR</strong></div></th>
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
                                <td className="product-name stock-disponible">
                                  <div className='center'>Disponible</div>
                                </td>
                                <td>
                                  <div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong><i className="fa fa-shopping-cart car"></i>  AÑADIR AL CARRITO</strong></div></a></div>
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
                                <td className="product-name stock-agotado">
                                  <div className='center'>Agotado</div>
                                </td>
                                <td>
                                  <div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong><i className="fa fa-shopping-cart car"></i>  AÑADIR AL CARRITO</strong></div></a></div>
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
                                <td className="product-name stock-disponible">
                                  <div className='center'>Disponible</div>
                                </td>
                                <td>
                                  <div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong><i className="fa fa-shopping-cart car"></i>  AÑADIR AL CARRITO</strong></div></a></div>
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
                                <td className="product-name stock-disponible">
                                  <div className='center'>Disponible</div>
                                </td>
                                <td>
                                  <div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong><i className="fa fa-shopping-cart car"></i>  AÑADIR AL CARRITO</strong></div></a></div>
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
                                <td className="product-name stock-agotado">
                                  <div className='center'>Agotado</div>
                                </td>
                                <td>
                                  <div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong><i className="fa fa-shopping-cart car"></i>  AÑADIR AL CARRITO</strong></div></a></div>
                                </td>
                                <td><div className='center-special'><a href="#" className="btn btn-primary btn-sm"><div><strong>X</strong></div></a></div></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </form>
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
