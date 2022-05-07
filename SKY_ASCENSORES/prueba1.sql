-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 03-05-2022 a las 01:18:47
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `prueba1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nov1`
--

CREATE TABLE IF NOT EXISTS `nov1` (
  `item` int(5) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `Servicio` text NOT NULL,
  `Plazo` varchar(50) NOT NULL,
  `Descripcion` varchar(500) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`item`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=45 ;

--
-- Volcado de datos para la tabla `nov1`
--

INSERT INTO `nov1` (`item`, `usuario`, `Servicio`, `Plazo`, `Descripcion`, `img_id`) VALUES
(1, 'ximena', 'Servicio de mantenimiento de ascensor   ', '1 año   ', 'Servicio de verificación y mantenimiento preventivo según establece la legislación. No incluye reparaciones mayores', 'j4grjnq9r0zfhu9ocqb0'),
(2, 'ximena', 'Servicio de mantenimiento ascensor  ', '3 meses   ', 'Servicio de verificación y mantenimiento preventivo según establece la legislación. No incluye reparaciones mayores', 'vxemf8ika97wgjaufvee'),
(3, 'ximena', 'Servicio de mantenimiento montacarga    ', '1 año  ', 'Servicio de verificación y mantenimiento preventivo según establece la legislación del montacarga. No incluye reparaciones mayores', 'oxwidpwzcsjp8t2cytsq'),
(4, 'flavia', 'Servicio de instalación de ascensor  ', '2 meses   ', 'Servicio de planificación e instalación según establece la legislación. Entrega de planos finalizada la obra. Se realizará modificaciones en caso de que la inspección municipal lo requiera', 'timy6fffmmqnyvxrq3dq'),
(5, 'flavia', 'Servicio de  habilitación  de ascensor  ', '2 meses    ', 'Servicio de habilitación con puesta en marcha, realización y recopilación de documentación necesaria, recepción de visita del inspector municipal', 'tkw2u63xlmuaq2cenztm'),
(32, 'flavia', 'Servicio reparación ascensor ', '1 semanas   ', 'Alcance: reparacion y repuestos', 'zukbq9s9dj7uxfco8uws'),
(40, 'ximena', 'Servicio reparación montacarga ', '2 semanas     ', 'Servicio de reparación. Incluye mano de obra y materiales', 'aoiqwhszdtrapqrgbymv'),
(44, 'ximena', 'Servicio de instalación y habilitación montacarga ', '3 meses ', 'Servicio de instalación con confección de planos y habilitación según legislación vigente.', 'qagasqnxyokle3jckzyx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'ximena', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
