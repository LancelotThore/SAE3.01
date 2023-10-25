-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 25 oct. 2023 à 10:23
-- Version du serveur : 10.5.21-MariaDB-0+deb11u1
-- Version de PHP : 8.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `thore2`
--

-- --------------------------------------------------------

--
-- Structure de la table `CATEGORIE`
--

CREATE TABLE `CATEGORIE` (
  `id_categorie` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `CATEGORIE`
--

INSERT INTO `CATEGORIE` (`id_categorie`, `nom`) VALUES
(1, 'Figurine'),
(2, 'DVD / Blu-ray'),
(3, 'Vêtement');

-- --------------------------------------------------------

--
-- Structure de la table `PRODUITS`
--

CREATE TABLE `PRODUITS` (
  `id_produit` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `image` text NOT NULL,
  `prix` decimal(5,2) NOT NULL,
  `id_categorie` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `PRODUITS`
--

INSERT INTO `PRODUITS` (`id_produit`, `nom`, `image`, `prix`, `id_categorie`) VALUES
(1, 'Tee shirt Death Note : L Tribute', 'tshirt-death-note.jpg', '19.95', 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `CATEGORIE`
--
ALTER TABLE `CATEGORIE`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `PRODUITS`
--
ALTER TABLE `PRODUITS`
  ADD PRIMARY KEY (`id_produit`),
  ADD KEY `id_categorie` (`id_categorie`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `CATEGORIE`
--
ALTER TABLE `CATEGORIE`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `PRODUITS`
--
ALTER TABLE `PRODUITS`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `PRODUITS`
--
ALTER TABLE `PRODUITS`
  ADD CONSTRAINT `PRODUITS_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `CATEGORIE` (`id_categorie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
