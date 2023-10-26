-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 26 oct. 2023 à 23:15
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
-- Structure de la table `CATEGORIES`
--

CREATE TABLE `CATEGORIES` (
  `id_categorie` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `CATEGORIES`
--

INSERT INTO `CATEGORIES` (`id_categorie`, `nom`) VALUES
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
  `id_categorie` int(1) NOT NULL,
  `taille_figurine` text NOT NULL,
  `taille_vetement` text NOT NULL,
  `couleur` text NOT NULL,
  `description` text NOT NULL,
  `quantite` double NOT NULL DEFAULT 0,
  `editeur` text NOT NULL,
  `hauteur` text NOT NULL,
  `matiere` text NOT NULL,
  `date` date NOT NULL,
  `format_image` text NOT NULL,
  `langue` text NOT NULL,
  `sous_titre` text NOT NULL,
  `support` text NOT NULL,
  `zone` text NOT NULL,
  `marque` text NOT NULL,
  `type` text NOT NULL,
  `genre` text NOT NULL,
  `studio` text NOT NULL,
  `auteur` text NOT NULL,
  `nombre_episode` decimal(3,0) NOT NULL,
  `duree` text NOT NULL,
  `blu-ray` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `PRODUITS`
--

INSERT INTO `PRODUITS` (`id_produit`, `nom`, `image`, `prix`, `id_categorie`, `taille_figurine`, `taille_vetement`, `couleur`, `description`, `quantite`, `editeur`, `hauteur`, `matiere`, `date`, `format_image`, `langue`, `sous_titre`, `support`, `zone`, `marque`, `type`, `genre`, `studio`, `auteur`, `nombre_episode`, `duree`, `blu-ray`) VALUES
(1, 'T-shirt Death Note : L Tribute', 'tshirt-death-note.jpg', '19.95', 3, '', '[\'S\',\'M\',\'L\',\'XL\',\'XXL\']', '[\'noir\',\'rouge\',\'blanc\']', 'Pour la première fois en France, les seuls et uniques t-shirts officiel de l\'animé préféré des Français : Death Note !!!\r\n\r\nCoupe ample et tubulaire, col rond ras du cou double épaisseur en côte 1x1. Convient à toutes les morphologies.\r\n\r\nT-shirt noir d\'excellente qualité : 190g/m², 100% coton', 51, '', '', '100% Coton', '2010-04-19', '', '', '', '', '', 'ABYstyle', 'T-Shirt', '', '', '', '0', '', '0'),
(2, 'T-shirt Dragon ball Z : gohan super saiyan', 'tshirt_san_gohan.jpg', '19.95', 3, '', '[\'S\',\'M\',\'L\',\'XL\',\'XXL\']', '[\'noir\',\'rouge\',\'blanc\']', 't-shirt de gohan super saiyan sur fond noir a manche courte', 12, '', '', '100% Coton', '2018-01-20', '', '', '', '', '', 'ABYstyle', 'T-Shirt', '', '', '', '0', '', '0'),
(3, 'T-shirt Naruto : Akatsuki - Homme', 'tshirt_akatsuki.jpg', '22.95', 3, '', '[\'S\',\'M\',\'L\',\'XL\',\'XXL\']', '[\'noir\',\'rouge\',\'blanc\']', 'Arborez les emblématiques nuages rouges des membres de l\'Akatsuki avec ce superbe t-shirt Naruto Shippuden par ABYstyle. -\r\n- Coupe ajusté. Col rond ras du cou double épaisseur en côte 1x1 et bord cote en opposition. -\r\n- T-shirt d\'excellente qualité : 185g/m², 100% coton -\r\n- Modèle homme disponible en 5 tailles : du S au XXL -\r\n', 5, '', '', '100% Coton', '2016-12-02', '', '', '', '', '', 'ABYstyle', 'T-Shirt', '', '', '', '0', '', '0'),
(4, 'Cowboy Bebop - Intégrale - Coffret DVD + Livret - Edition Gold', 'dvd-cowboybebop.jpg', '14.95', 2, '', '', '', 'Les guerres et la pollution ont rendu la vie trop pénible sur une Terre désormais surpeuplée. Les hommes ont abandonné leur planète bleue et se sont répandus dans le système solaire, à la recherche de nouvelles frontières. Le temps est venu pour l\'humanité de coloniser l\'espace. Ainsi est né un nouveau Far West dans lequel les pionniers modernes ont créé une société très cosmopolite. Une nouvelle ère a commencé. Nous sommes en l\'an 2071. Spike Spiegel et Jet Black, chasseurs de primes perpétuellement fauchés, errent dans l\'espace au gré de leurs missions et dans une ambiance plutôt \"Seventies\".\r\n\r\nTout droit sortie des studios SUNRISE (Vision d\'Escaflown, City Hunter ...),Cowboy Bebop demeure sans conteste l\'une des plus belle séries jamais produites au Japon à ce jour.', 104, 'Dybex', '0', '0', '2008-10-29', '4/3', '[\'Japonais Stereo\',\'2.0 Français\',\'Français Stereo 2.0\']', 'Français, Japonais', 'Coffret DVD Digipack', 'B/2 (Ce DVD ne pourra probablement pas être visualisé en dehors de l\'Europe. Plus d\'informations sur les formats DVD/Blu-ray.)', '', 'Série TV', 'Science Fiction, Action', 'Sunrise', 'Yatate Hajime', '26', '11h00', '[\'blu-ray\', \'non blu-ray\']'),
(5, 'Mob Psycho 100 - Saison 1 + 6 OAV - Edition Collector - Coffret', 'dvd-mobpsycho.jpg', '45.56', 2, '', '', '', 'Une nouvelle série déjantée par le créateur de One Punch Man, et le studio de My Hero Academia, Soul Eater (Bones).\r\n\r\nCollégien aspirant à une adolescence sans histoire, le jeune Shigeo Kageyama, surnommé Mob, possède des pouvoirs psychiques, autrement dit, des super-pouvoirs !! Pourtant, Mob préfère rester discret afin d\'avoir une vie la plus normale possible. Malheureusement pour lui, que ce soit un médium charlatan qui l\'emploie à mi-temps, ou une étrange secte religieuse qui cherche à le recruter, nombreux sont ceux qui vont essayeront de se servir de lui. Mais \"quelque chose\" est en train de se produire à l\'intérieur de Mob. Pourra-t-il contenir ses émotions avant d\'arriver à la barre fatidique des 100% ?\r\n\r\n- Adapté du dernier manga signé ONE (One Punch Man) au succès mondial et recompensé par le prestigieux prix Shogakukan, publié en France par Kurokawa (7 tomes, en cours).\r\n- Un scénario atypique, des combats qui s\'enchaînent, un humour qui fait mouche auprès d\'un public adolescent.\r\n- Un doublage français inédit !\r\n- Diffusé prochainement à la TV sur la chaîne Mangas (Groupe AB).\r\n- Avec Kenji Kawai à la musique (Ghost in the Shell, Joker Game), le directeur artistique de Devilman crybaby (Ryo Kono) et Yuzuru Tachikawa à la réalisation (directeur d\'épisodes L\'Attaque des Titans, KILL la KILL, Bleach).', 23, '@Anime', '0', '0', '2018-12-01', '16/9 Anamorphique', '[\'Japonais Stereo 2.0\',\'Français\',\'Français Stereo 2.0\']', 'Français, Japonais', 'Coffret Blu-Ray', 'B/2 (Ce DVD ne pourra probablement pas être visualisé en dehors de l\'Europe. Plus d\'informations sur les formats DVD/Blu-ray.)', '', 'Série TV', 'Combat, Action, Tranche de vie', 'Bones', 'One', '18', '5h30', '[\'blu-ray\', \'non blu-ray\']'),
(6, 'Dragon Ball - Intégrale Collector - Pack 2 Coffrets (26 DVD) - 153 épisodes - Non censuré', 'dvd-dragonball.jpg', '109.95', 2, '', '', '', 'Songoku est un jeune garçon très naïf et innocent. Cependant, bien que très petit, il possède une force phénoménale. Vivant isolé dans une forêt, il occupe son temps à chasser des monstres ou pêcher d\'énormes poissons pour son déjeuner. Il fait la connaissance de Bulma dans des circonstances peu agréables. La voiture de Bulma le percute violemment, mais heureusement le garçon sort indemne. D\'abord furieuse de voir son engin de locomotion abîmé, Bulma persuade Sangoku de l\'accompagner pour rechercher les sept boules de cristal légendaires qui, une fois réunies, permettent l\'apparition d\'un immense dragon nommé Shéron, qui peut exaucer un quelconque souhait. Bulma, qui croit à cette légende et l\'électronique n\'ayant aucun secret pour elle, a construit un radar de poche qui détecte les boules. Le périple commence...\r\n\r\nQuel plaisir de revoir les débuts de cette saga qui deviendra culte. On est encore loin des guerriers Saiyens, mais on suit, dans un premier temps, son apprentissage auprès de Tortie Géniale et ses premiers combats au grand tournoi des arts martiaux. Le personnage naïf et généreux de Songoku, un humour omniprésent et de nombreux combats variés sont au service d\'une histoire originale très plaisante à suivre.\r\n\r\nDéclarée par les animateurs du Club Dorothée comme étant la \"Série TV chouchoute\" des petits français !\r\n\r\nL\'intégrale en édition non censurée remastérisée VF/VOSTFR', 0, 'AB Video', '0', '0', '2011-05-17', '4/3', '[\'Japonais Stereo\',\'2.0 Français\',\'Français Stereo 2.0\']', 'Français, Japonais', 'Coffret DVD', 'B/2 (Ce DVD ne pourra probablement pas être visualisé en dehors de l\'Europe. Plus d\'informations sur les formats DVD/Blu-ray.)', '', 'Série TV', 'Comédie, Nostalgie, Combat, Action', 'Toei Animation', 'Toriyama Akira', '153', '63h20', '[\'blu-ray\', \'non blu-ray\']'),
(7, 'Figurine Roronoa Zoro Jeans Freak - One Piece - Banpresto', 'figurine-zoro.jpg', '14.95', 1, '[\'10\',\'20\',\'35\']', '', '[\'Peint\', \'A peindre\']', 'Figurine Roronoa Zoro en jean de la licence One Piece', 48, 'Banpresto', '17', 'PVC', '2022-04-21', '', '', '', '', '', '', 'Figurine', '', '', '', '0', '', '0'),
(8, 'Demon Slayer - Figuarts Zero : Zenitsu Agatsuma ( Thunderclap and flash )', 'figurine-zenitsu.jfif', '69.95', 1, '[\'10\',\'20\',\'35\']', '', '[\'Peint\', \'A peindre\']', 'De l\'anime à succès \"Demon Slayer: Kimetsu no Yaiba\", Zenitsu Agatsuma rejoint la gamme FiguartsZERO. La figurine capture son premier mouvement du Souffle de la Foudre alors qu\'il est endormi [Contenu] Corps principal (y compris les effets).', 7, 'Bandaï', '15', 'PVC', '2022-11-26', '', '', '', '', '', '', 'Figurine', '', '', '', '0', '', '0'),
(9, 'Figurine Demon Slayer - Figuarts Zero : Kamado Nezuko', 'figurine-nezuko.jpg', '59.95', 1, '[\'10\',\'20\',\'35\']', '', '[\'Peint\', \'A peindre\']', 'Voici enfin Nezuko la soeur de Tanjiro en Figuarts Zero dans une pose dynamique. Elle sera livrée avec un 2ème visage alternatif.', 2, 'Bandaï', '11', 'PVC', '2021-08-04', '', '', '', '', '', '', 'Figurine', '', '', '', '0', '', '0');

-- --------------------------------------------------------

--
-- Structure de la table `UTILISATEURS`
--

CREATE TABLE `UTILISATEURS` (
  `id_utilisateur` int(11) NOT NULL,
  `nom` varchar(15) NOT NULL,
  `mtp` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `CATEGORIES`
--
ALTER TABLE `CATEGORIES`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `PRODUITS`
--
ALTER TABLE `PRODUITS`
  ADD PRIMARY KEY (`id_produit`),
  ADD KEY `id_categorie` (`id_categorie`);

--
-- Index pour la table `UTILISATEURS`
--
ALTER TABLE `UTILISATEURS`
  ADD PRIMARY KEY (`id_utilisateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `CATEGORIES`
--
ALTER TABLE `CATEGORIES`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `PRODUITS`
--
ALTER TABLE `PRODUITS`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `UTILISATEURS`
--
ALTER TABLE `UTILISATEURS`
  MODIFY `id_utilisateur` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `PRODUITS`
--
ALTER TABLE `PRODUITS`
  ADD CONSTRAINT `PRODUITS_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `CATEGORIES` (`id_categorie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
