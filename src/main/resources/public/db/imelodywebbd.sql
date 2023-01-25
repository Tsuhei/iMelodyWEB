-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2023 a las 04:39:27
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `imelodywebbd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `clave` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `clave`) VALUES
(1, 'Tsuhei', 'jhon@gmail.com', '$2y$10$Jvqf2nT3eFTuJYDbhfOs/e0boJ8sut81sfcZL.3R5nUAnclS9dG4q'),
(2, 'Jhon Jairo', 'jhon1331@gmail.com', '$2y$10$PiGeB.uoUuHbMuTO.MIyXevcCgUn41vpIeMLnkpD3aYle1fupK7/C'),
(4, 'Andres Hernandez', 'andreshernandez@gmail.com', '$2y$10$IHqET8pululweei.k7Hj9ek6XwvpufADKjyUYEZJrp4q0oeXN0zeO'),
(5, 'Julian Tello', 'Jteilor@gmail.com', '$2y$10$/MY63Ki/laSij5oRllTeRO/bUKB51IsVJl8dxTOnMlaUlTodACkfm'),
(6, 'jhon1', 'jhon1@gmail.com', '$2y$10$3nLH5GLyS0UJrgGM1byIaujvobHhl7ZgrUwD5cPdY34znF/M/tIQa');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
