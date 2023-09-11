-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.1.0 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for onlinelibrary
CREATE DATABASE IF NOT EXISTS `onlinelibrary` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `onlinelibrary`;

-- Dumping data for table onlinelibrary.author: ~4 rows (approximately)
INSERT INTO `author` (`id`, `nameSurname`, `photo`, `biography`, `wikipedia`, `created_at`, `updated_at`) VALUES
	(1, 'Ivo Andrić', 'slika1.jpg', 'Ivo je psiac...', 'wiki1', '2023-09-07 08:26:46.432', '2023-09-07 08:26:46.432'),
	(2, 'Petar II Petrović Njegos', 'slika4.jpg', 'Petar je psiac...', 'wiki4', '2023-09-07 08:26:46.432', '2023-09-07 08:26:46.432'),
	(3, 'Džordž Orvel', 'slika2.jpg', 'Džordž je pisac....', 'wiki2', '2023-09-07 08:26:46.432', '2023-09-07 08:26:46.432'),
	(4, 'Harper Li', 'slika3.jpg', 'Harper je psac', 'wiki3', '2023-09-07 08:26:46.432', '2023-09-07 08:26:46.432');

-- Dumping data for table onlinelibrary.binding: ~0 rows (approximately)
INSERT INTO `binding` (`id`, `name`) VALUES
	(1, 'Tvrdi povez');

-- Dumping data for table onlinelibrary.book: ~5 rows (approximately)
INSERT INTO `book` (`id`, `title`, `page_count`, `letterId`, `languageId`, `bindingId`, `formatId`, `publisherId`, `isbn`, `quantity_count`, `rented_count`, `reserved_count`, `body`, `year`, `pdf`) VALUES
	(1, 'Veliki Getsbi', 180, 1, 1, 1, 1, 1, '978-3-16-148410-0', 10, 0, 0, 'Veliki Getsbi je roman američkog pisca F. Scotta Fitzgeralda iz 1925. godine.', 1925, 'http:pdf'),
	(2, 'Ubiti pticu rugalicu', 281, 1, 1, 1, 1, 1, '978-0-06-112008-4', 5, 0, 0, 'Ubiti pticu rugalicu je roman Harper Lee objavljen 1960. godine.', 1960, 'http:pdf'),
	(3, '1984', 328, 1, 1, 1, 1, 1, '978-0-14-103614-4', 7, 0, 0, '1984 je distopijski roman Georgea Orwella objavljen 1949. godine.', 1949, 'http:pdf'),
	(4, 'Na Drini ćuprija', 314, 1, 1, 1, 1, 1, '978-0-226-84929-6', 3, 0, 0, 'Na Drini ćuprija je historijski roman Ive Andrića.', 1945, 'http:pdf'),
	(5, 'Prokleta avlija', 256, 1, 1, 1, 1, 1, '978-0-86356-306-5', 2, 0, 0, 'Prokleta avlija je roman Ive Andrića.', 1954, 'http:pdf');

-- Dumping data for table onlinelibrary.bookstatus: ~0 rows (approximately)

-- Dumping data for table onlinelibrary.cancellationreason: ~0 rows (approximately)

-- Dumping data for table onlinelibrary.category: ~9 rows (approximately)
INSERT INTO `category` (`id`, `name`) VALUES
	(10, '1'),
	(12, '2222'),
	(13, 'poezijaaaaa'),
	(3, 'Proba'),
	(1, 'SciFi'),
	(7, 'ssss'),
	(14, 'Test'),
	(4, 'yheyhewht');

-- Dumping data for table onlinelibrary.format: ~1 rows (approximately)
INSERT INTO `format` (`id`, `name`) VALUES
	(1, 'Meki povez');

-- Dumping data for table onlinelibrary.gallery: ~0 rows (approximately)

-- Dumping data for table onlinelibrary.genre: ~1 rows (approximately)
INSERT INTO `genre` (`id`, `name`, `icon`, `default`, `description`) VALUES
	(1, 'Istorija', 'histroty.icon', 'hist', 'Istorijske knjige');

-- Dumping data for table onlinelibrary.language: ~0 rows (approximately)
INSERT INTO `language` (`id`, `name`) VALUES
	(1, 'Engleski');

-- Dumping data for table onlinelibrary.letter: ~0 rows (approximately)
INSERT INTO `letter` (`id`, `name`) VALUES
	(1, 'A');

-- Dumping data for table onlinelibrary.publisher: ~0 rows (approximately)
INSERT INTO `publisher` (`id`, `name`) VALUES
	(1, 'Penguin Random House');

-- Dumping data for table onlinelibrary.rent: ~0 rows (approximately)

-- Dumping data for table onlinelibrary.rentstatus: ~0 rows (approximately)

-- Dumping data for table onlinelibrary.reservation: ~0 rows (approximately)

-- Dumping data for table onlinelibrary.reservationstatus: ~0 rows (approximately)

-- Dumping data for table onlinelibrary.settings: ~0 rows (approximately)
INSERT INTO `settings` (`id`, `reservationExpiry`, `returnDeadline`, `conflictDeadline`) VALUES
	(1, 3, 5, 7);

-- Dumping data for table onlinelibrary.user: ~1 rows (approximately)
INSERT INTO `user` (`id`, `typeId`, `genderId`, `name`, `JMBG`, `email`, `username`, `password`, `photo`, `remember_token`, `email_verified_at`, `last_login_at`, `created_at`, `updated_at`, `login_count`, `active`) VALUES
	('9b93f184-77b6-401e-a2b5-8841a23b669f', 1, 1, 'Marko M1', '1234567890123', 'aaaaa@rsgh.com', 'CrazyHorse', '123456', '', '', '2023-09-09 12:42:55.959', '2023-09-09 12:42:55.959', '2023-09-09 12:42:55.959', '2023-09-09 12:42:55.959', 0, 0),
	('bf2b0051-5b18-4eb9-ad6a-0d9a63435f56', 1, 1, 'Marko M', '1234567890122', 'rhdsgdr@rsgh.com', 'markisa', '123456', '', '', '2023-09-09 12:35:59.347', '2023-09-09 12:35:59.347', '2023-09-09 12:35:59.347', '2023-09-09 12:35:59.347', 0, 0);

-- Dumping data for table onlinelibrary.usergender: ~2 rows (approximately)
INSERT INTO `usergender` (`id`, `name`) VALUES
	(1, 'Zensko'),
	(2, 'Musko');

-- Dumping data for table onlinelibrary.userlogins: ~0 rows (approximately)

-- Dumping data for table onlinelibrary.usertype: ~3 rows (approximately)
INSERT INTO `usertype` (`id`, `name`) VALUES
	(1, 'Ucenik'),
	(2, 'Biblitekar'),
	(3, 'Admin');

-- Dumping data for table onlinelibrary._authortobook: ~0 rows (approximately)

-- Dumping data for table onlinelibrary._booktocategory: ~0 rows (approximately)

-- Dumping data for table onlinelibrary._booktogenre: ~0 rows (approximately)

-- Dumping data for table onlinelibrary._prisma_migrations: ~2 rows (approximately)
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
	('3e105f90-1654-4e01-bc70-9f057acf9020', '7c4fcbcf264d7ec18caae0bae4d7f28be1ef3b6fa2e364f66d5f494c1f580261', '2023-09-07 08:26:43.077', '20230903135236_', NULL, NULL, '2023-09-07 08:26:42.105', 1),
	('6b252103-1d18-4b87-a61d-ca6977b83d1a', 'bac1852126e30b1c44a7bf5f954a3897af3966c15527494e59ec50022a436093', '2023-09-07 08:26:43.096', '20230907075830_settings', NULL, NULL, '2023-09-07 08:26:43.080', 1);

-- Dumping data for table onlinelibrary._reservationtoreservationstatus: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
