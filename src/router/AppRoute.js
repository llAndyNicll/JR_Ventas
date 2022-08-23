import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AguaPurificada } from '../componentes/agua-purificada/AguaPurificada';
import { Anime } from '../componentes/anime/Anime';
import { Blank } from '../componentes/Blank';
import { Checkout } from '../componentes/comprar/Checkout';
import { Electronicos } from '../componentes/electronicos/Electronicos';
import { Home } from '../componentes/inicio/Home';
import { Ofertas } from '../componentes/ofertas/Ofertas';
import { Productos } from '../respaldo/Productos';
import { VentasUsuarios } from '../componentes/ventas-usuarios/VentasUsuarios';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import { PoliticaPrivacidad } from '../componentes/politica-privacidad/PoliticaPrivacidad';
import { CambioDevoluciones } from '../componentes/cambios-devoluciones/CambioDevoluciones';
import { TerminosCondiciones } from '../componentes/terminos-condiciones/TerminosCondiciones';
import { Carrito } from '../componentes/carrito/Carrito';

export const AppRoute = () => {

  return (
    <BrowserRouter>

        <Navbar />

        <Routes>

            <Route path="/" element={ <Home /> } />

            <Route path="/ofertas" element={ <Ofertas /> } />

            <Route path="/electronicos" element={ <Electronicos /> } />

            <Route path="/agua-purificada" element={ <AguaPurificada /> } />

            <Route path="/anime" element={ <Anime /> } />

            <Route path="/ventas-usuarios" element={ <VentasUsuarios /> } />

            <Route path="/contactanos" element={ <Blank /> } />

            <Route path="/mi-cuenta" element={ <Productos /> } />

            <Route path="/buscar" element={ <Blank /> } />

            <Route path="/deseos" element={ <Blank /> } />

            <Route path="/carrito" element={ <Carrito /> } />

            <Route path="/comprar" element={ <Checkout /> } />

            <Route path="/sobre-nosotros" element={ <Blank /> } />

            <Route path="/politica-privacidad" element={ <PoliticaPrivacidad /> } />

            <Route path="/cambios-devoluciones" element={ <CambioDevoluciones /> } />

            <Route path="/terminos-condiciones" element={ <TerminosCondiciones /> } />

            <Route path="/mi-cuenta/seguimiento-pedido" element={ <Blank /> } />

            <Route path="/boletin-informativo" element={ <Blank /> } />

        </Routes>

        <Footer />

    </BrowserRouter>
  );
};
