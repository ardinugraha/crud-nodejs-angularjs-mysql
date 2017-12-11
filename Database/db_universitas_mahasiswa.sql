-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2017 at 03:56 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_universitas_mahasiswa`
--

-- --------------------------------------------------------

--
-- Table structure for table `m_mahasiswa`
--

CREATE TABLE IF NOT EXISTS `m_mahasiswa` (
  `MAHASISWA_NIM` char(50) NOT NULL,
  `MAHASISWA_NAMA` varchar(256) DEFAULT NULL,
  `MAHASISWA_PRODI_JURUSAN` char(255) DEFAULT NULL,
  `MAHASISWA_ANGKATAN` char(20) DEFAULT NULL,
  `MAHASISWA_EMAIL` varchar(1024) DEFAULT NULL,
  `MAHASISWA_STATUS` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `m_mahasiswa`
--

INSERT INTO `m_mahasiswa` (`MAHASISWA_NIM`, `MAHASISWA_NAMA`, `MAHASISWA_PRODI_JURUSAN`, `MAHASISWA_ANGKATAN`, `MAHASISWA_EMAIL`, `MAHASISWA_STATUS`) VALUES
('131524005', 'Ardi Nugraha', 'D4-Teknik Informatika / Teknik Komputer dan Informatika', '2013', 'ardi@mail.com', 1),
('131524006', 'Davis Rahman', 'D4-Teknik Informatika / Teknik Komputer dan Informatika', '2013', 'davis@mail.com', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `m_mahasiswa`
--
ALTER TABLE `m_mahasiswa`
 ADD PRIMARY KEY (`MAHASISWA_NIM`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
