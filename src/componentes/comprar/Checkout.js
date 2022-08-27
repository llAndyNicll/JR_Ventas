import React from 'react';

export const Checkout = () => {

  return (
    <>

        <div id="breadcrumb" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h3 class="breadcrumb-header">Verificar</h3>
						<ul class="breadcrumb-tree">
							<li><a href="#">Inicio</a></li>
							<li class="active">Verificar</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

        <div class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-7">
						<div class="billing-details">
							<div class="section-title">
								<h3 class="title">Dirección de Envio</h3>
							</div>
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
								<input class="input" type="text" name="address" placeholder="Direccion" />
							</div>
							<div class="form-group">
								<input class="input" type="text" name="city" placeholder="Region" />
							</div>
							<div class="form-group">
								<input class="input" type="text" name="country" placeholder="Comuna" />
							</div>
							<div class="form-group">
								<input class="input" type="text" name="zip-code" placeholder="Codigo Postal" />
							</div>
							<div class="form-group">
								<input class="input" type="tel" name="tel" placeholder="Telefono" />
							</div>
							<div class="form-group">
								<div class="input-checkbox">
									<input type="checkbox" id="create-account" />
									<label for="create-account">
										<span></span>
										¿ Crear una Cuenta ?
									</label>
									<div class="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										<input class="input" type="password" name="password" placeholder="Enter Your Password" />
									</div>
								</div>
							</div>
						</div>

						<div class="shiping-details">
							<div class="section-title">
								<h3 class="title">Enviar a Otra Direccion</h3>
							</div>
							<div class="input-checkbox">
								<input type="checkbox" id="shiping-address" />
								<label for="shiping-address">
									<span></span>
									¿ Envia a una direccion diferente ?
								</label>
								<div class="caption">
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
								<input class="input" type="text" name="address" placeholder="Direccion" />
							</div>
							<div class="form-group">
								<input class="input" type="text" name="city" placeholder="Region" />
							</div>
							<div class="form-group">
								<input class="input" type="text" name="country" placeholder="Comuna" />
							</div>
							<div class="form-group">
								<input class="input" type="text" name="zip-code" placeholder="Codigo Postal" />
							</div>
							<div class="form-group">
								<input class="input" type="tel" name="tel" placeholder="Telefono" />
							</div>
								</div>
							</div>
						</div>

						<div class="order-notes">
							<textarea class="input" placeholder="Nota Extra"></textarea>
						</div>
					</div>

					<div class="col-md-5 order-details">
						<div class="section-title text-center">
							<h3 class="title">Su Pedido</h3>
						</div>
						<div class="order-summary">
							<div class="order-col">
								<div><strong>PRODUCTO</strong></div>
								<div><strong>TOTAL</strong></div>
							</div>
							<div class="order-products">
								<div class="order-col">
									<div>1x Nombre Producto</div>
									<div>$980.00</div>
								</div>
								<div class="order-col">
									<div>2x Nombre  Producto</div>
									<div>$980.00</div>
								</div>
							</div>
							<div class="order-col">
								<div>Envio</div>
								<div><strong>GRATIS</strong></div>
							</div>
							<div class="order-col">
								<div><strong>TOTAL</strong></div>
								<div><strong class="order-total">$2940.00</strong></div>
							</div>
						</div>
						<div class="payment-method">
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-1" />
								<label for="payment-1">
									<span></span>
									Transferencia Bancaria Directa
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-2" />
								<label for="payment-2">
									<span></span>
									Cheque de Pago
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-3" />
								<label for="payment-3">
									<span></span>
									Sistema Paypal
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div class="input-checkbox">
							<input type="checkbox" id="terms" />
							<label for="terms">
								<span></span>
								He leído y acepto los <a href="#">términos y condiciones</a>
							</label>
						</div>
						<a href="#" class="primary-btn order-submit">Realizar Pedido</a>
					</div>
				</div>
			</div>
		</div>

    </>
  );
};
