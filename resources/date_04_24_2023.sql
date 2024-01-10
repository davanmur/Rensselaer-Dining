-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 25, 2023 at 12:25 AM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tpr`
--

-- --------------------------------------------------------

--
-- Table structure for table `date_04_24_2023`
--

CREATE TABLE `date_04_24_2023` (
  `id` int(11) NOT NULL,
  `food` varchar(60) NOT NULL,
  `dining_hall` varchar(20) NOT NULL,
  `meal` varchar(20) NOT NULL,
  `station` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `date_04_24_2023`
--

INSERT INTO `date_04_24_2023` (`id`, `food`, `dining_hall`, `meal`, `station`) VALUES
(1, 'Fried Tater Tots', 'Commons', 'Breakfast', 'Grill'),
(2, 'Scambled Eggs', 'Commons', 'Breakfast', 'Grill'),
(3, 'Egg Substitute', 'Commons', 'Breakfast', 'Grill'),
(4, 'Buttermilk Pancakes', 'Commons', 'Breakfast', 'Grill'),
(5, 'Pork Sausage Link', 'Commons', 'Breakfast', 'Grill'),
(6, 'Garlic Grilled Chicken', 'Commons', 'Lunch', 'Chefs Table'),
(7, 'Broccoli with Garlic & Lemon', 'Commons', 'Lunch', 'Chefs Table'),
(8, 'Alfredo Cheese Sauce', 'Commons', 'Lunch', 'Chefs Table'),
(9, 'Cheese Tortellini', 'Commons', 'Lunch', 'Chefs Table'),
(10, 'Cheeseburger', 'Commons', 'Lunch', 'Grill'),
(11, 'Hamburger', 'Commons', 'Lunch', 'Grill'),
(12, 'Chicken & Cheese Quesadilla', 'Commons', 'Lunch', 'Grill'),
(13, 'Shoestring Fries', 'Commons', 'Lunch', 'Grill'),
(14, 'Cali Poke Bowl', 'Commons', 'Lunch', 'Pacifica'),
(15, 'Cachupa', 'Commons', 'Lunch', 'Rustic Roots (Vegan)'),
(16, 'Steamed Aztec Corn', 'Commons', 'Lunch', 'Simple Servings'),
(17, 'Jamaican Jerk Lemon Pork Loin', 'Commons', 'Lunch', 'Simple Servings'),
(18, 'Mexican Breakfast Potatoes', 'Commons', 'Lunch', 'Simple Servings'),
(65, 'Loaded Baked Potato Chowder', 'Commons', 'Lunch', 'Soup'),
(66, 'Lentil Soup with Cilantro & Orzo', 'Commons', 'Lunch', 'Soup'),
(67, 'Smoked Beef Brisket, 6 Oz', 'Commons', 'Dinner', 'Chefs Table'),
(68, 'Macaroni and Cheese', 'Commons', 'Dinner', 'Chefs Table'),
(69, 'Jalapeno Cornbread with Cheese', 'Commons', 'Dinner', 'Chefs Table'),
(70, 'Green Beans Southern Style', 'Commons', 'Dinner', 'Chefs Table'),
(71, 'Cheeseburger', 'Commons', 'Dinner', 'Grill'),
(72, 'Bbq Pulled Pork Sandwich', 'Commons', 'Dinner', 'Grill'),
(73, 'Shoestring Fries', 'Commons', 'Dinner', 'Grill'),
(74, 'Hamburger', 'Commons', 'Dinner', 'Grill'),
(75, 'Steamed Jasmine Rice', 'Commons', 'Dinner', 'Pacifica'),
(76, 'Szechuan Chicken Stir Fry', 'Commons', 'Dinner', 'Pacifica'),
(77, 'Chicken Potsticker', 'Commons', 'Dinner', 'Pacifica'),
(78, 'Filipino Monggo Beans', 'Commons', 'Dinner', 'Rustic Roots (Vegan)'),
(79, 'Caribbean Spiced Red Potatoes', 'Commons', 'Dinner', 'Simple Servings'),
(80, 'Adobo Roasted Turkey', 'Commons', 'Dinner', 'Simple Servings'),
(81, 'Roasted Vegetables', 'Commons', 'Dinner', 'Simple Servings'),
(82, 'Cheeseburger', 'Commons', 'Late Night', 'Grill'),
(83, 'Shoestring Fries', 'Commons', 'Late Night', 'Grill'),
(84, 'Bbq Pulled Pork Sandwich', 'Commons', 'Late Night', 'Grill'),
(85, 'Caribbean Spiced Red Potatoes', 'Commons', 'Late Night', 'Simples Servings'),
(86, 'Roasted Vegetables', 'Commons', 'Late Night', 'Simple Servings'),
(96, 'Hamburger', 'Commons', 'Dinner', 'Grill'),
(102, 'Adobo Roasted Turkey', 'Commons', 'Dinner', 'Simple Servings'),
(109, 'Pork Sausage Patty', 'BARH', 'Breakfast', 'Grill'),
(110, 'Oatmeal', 'BARH', 'Breakfast', 'Grill'),
(111, 'Scrambled Eggs with Cheddar', 'BARH', 'Breakfast', 'Grill'),
(112, 'Buttermilk Pancakes', 'BARH', 'Breakfast', 'Grill'),
(113, 'Fresh Berry Compote', 'BARH', 'Breakfast', 'Grill'),
(114, 'Fried Tater Tots', 'BARH', 'Breakfast', 'Grill'),
(115, 'Italian Roasted Sausage', 'BARH', 'Dinner', 'Action Station'),
(116, 'Penne Pasta', 'BARH', 'Dinner', 'Action Station'),
(117, 'Tomato Basil Marinara', 'BARH', 'Dinner', 'Action Station'),
(118, 'Alfredo Sauce', 'BARH', 'Dinner', 'Action Station'),
(119, 'Grilled Chicken Breast', 'BARH', 'Dinner', 'Action Station'),
(120, 'Roasted Broccoli', 'BARH', 'Dinner', 'Chefs Table'),
(121, 'Baked Potato', 'BARH', 'Dinner', 'Chefs Table'),
(122, 'Balsamic Chicken Breast', 'BARH', 'Dinner', 'Chefs Table'),
(124, 'Cheeseburger', 'BARH', 'Dinner', 'Grill'),
(125, 'French Fries', 'BARH', 'Dinner', 'Grill'),
(126, 'All Beef Hot Dog', 'BARH', 'Dinner', 'Grill'),
(127, 'Cabbage & White Bean Soup', 'BARH', 'Dinner', 'Soup'),
(147, 'Home Fried Potatoes', 'Russell Sage', 'Breakfast', 'Grill'),
(148, 'Scrambled Eggs', 'Russell Sage', 'Breakfast', 'Grill'),
(149, 'Pork Sausage Patty', 'Russell Sage', 'Breakfast', 'Grill'),
(150, 'Scrambled Eggs with Cheddar', 'Russell Sage', 'Breakfast', 'Grill'),
(151, 'Buttermilk Pancakes', 'Russell Sage', 'Breakfast', 'Grill'),
(152, 'Outmeal', 'Russell Sage', 'Breakfast', 'Soup'),
(153, 'Baked Ziti', 'Russell Sage', 'Lunch', 'Entree'),
(154, 'French Fries', 'Russell Sage', 'Lunch', 'Grill'),
(155, 'Hamburger', 'Russell Sage', 'Lunch', 'Grill'),
(156, 'Cheeseburger', 'Russell Sage', 'Lunch', 'Grill'),
(157, 'Southern Bbq Chicken Breast Sandwich', 'Russell Sage', 'Lunch', 'Grill'),
(158, 'Bbq Pulled Pork Sandwich', 'Russell Sage', 'Lunch', 'Grill'),
(159, 'Pepperoni Pizza', 'Russell Sage', 'Lunch', 'Pizza'),
(160, 'Cheese Pizza', 'Russell Sage', 'Lunch', 'Pizza'),
(161, 'Grilled Vegetable Pizza', 'Russell Sage', 'Lunch', 'Pizza'),
(162, 'Fettuccine Alfredo with Broccoli', 'Russell Sage', 'Dinner', 'Entree'),
(163, 'Chickpea Chorizo Stuffed Acorn Squash', 'Russell Sage', 'Dinner', 'Entree'),
(164, 'Meatloaf', 'Russell Sage', 'Dinner', 'Entree'),
(165, 'Chicken Machaca Tostada', 'Russell Sage', 'Dinner', 'Entree'),
(166, 'Hamburger', 'Russell Sage', 'Dinner', 'Grill'),
(167, 'French Fries', 'Russell Sage', 'Dinner', 'Grill'),
(168, 'Cheeseburger', 'Russell Sage', 'Dinner', 'Grill'),
(169, 'Southern Bbq Chicken Breast Sandwich', 'Russell Sage', 'Dinner', 'Grill'),
(170, 'Pepperoni Pizza', 'Russell Sage', 'Dinner', 'Grill'),
(171, 'Cheese Pizza', 'Russell Sage', 'Dinner', 'Grill'),
(172, 'Grilled Vegetable Pizza', 'Russell Sage', 'Dinner', 'Grill'),
(173, 'Fried Egg OMuffin with Sausage', 'Blitman', 'Breakfast', 'Grill'),
(174, 'Fried Egg OMuffin with Sandwich', 'Blitman', 'Breakfast', 'Grill'),
(175, 'Belgian Waffles', 'Blitman', 'Breakfast', 'Grill'),
(176, 'Scrambled Eggs', 'Blitman', 'Breakfast', 'Grill'),
(177, 'Jamaican Jerk Lemon Pork Loin', 'Blitman', 'Dinner', 'Grill'),
(178, 'Roasted Sausage Mild Italian Rope', 'Blitman', 'Dinner', 'Grill'),
(179, 'Italian Meatball', 'Blitman', 'Dinner', 'Grill'),
(180, 'Chicken Tenders', 'Blitman', 'Dinner', 'Grill');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `date_04_24_2023`
--
ALTER TABLE `date_04_24_2023`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `date_04_24_2023`
--
ALTER TABLE `date_04_24_2023`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
