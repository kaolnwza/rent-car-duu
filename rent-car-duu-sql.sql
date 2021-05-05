-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rent-car-duu
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `insurance`
--

DROP TABLE IF EXISTS `insurance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurance` (
  `insurance_id` int unsigned NOT NULL AUTO_INCREMENT,
  `insurance_type` enum('1','2','2+','3','3+') DEFAULT NULL,
  `insurance_description` text,
  `vehicle_vehicle_id` int NOT NULL,
  PRIMARY KEY (`insurance_id`),
  UNIQUE KEY `id_UNIQUE` (`insurance_id`),
  KEY `fk_insurance_vehicle_idx` (`vehicle_vehicle_id`),
  CONSTRAINT `fk_insurance_vehicle` FOREIGN KEY (`vehicle_vehicle_id`) REFERENCES `vehicle` (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurance`
--

LOCK TABLES `insurance` WRITE;
/*!40000 ALTER TABLE `insurance` DISABLE KEYS */;
INSERT INTO `insurance` VALUES (21,'2','none',2),(22,'1','test',3),(25,'2','carDESC',6),(26,'2','test',7),(27,'2','carDESC',8),(28,'2',NULL,9),(29,'2',NULL,10),(30,'1',NULL,11),(31,'2','CAT MMMM',12),(33,'2','444',14),(34,'2','cat',15),(35,'2+','-',16),(36,'2','hdfghfgh',17);
/*!40000 ALTER TABLE `insurance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loanee`
--

DROP TABLE IF EXISTS `loanee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loanee` (
  `loanee_no` int NOT NULL AUTO_INCREMENT,
  `user_username` char(20) NOT NULL,
  PRIMARY KEY (`loanee_no`,`user_username`),
  KEY `fk_loanee_user1_idx` (`user_username`),
  CONSTRAINT `fk_loanee_user1` FOREIGN KEY (`user_username`) REFERENCES `user` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loanee`
--

LOCK TABLES `loanee` WRITE;
/*!40000 ALTER TABLE `loanee` DISABLE KEYS */;
INSERT INTO `loanee` VALUES (19,'nopphadon'),(20,'pawaris'),(21,'pawaris2'),(18,'phanuwat'),(16,'sinlapawit'),(17,'sinlapawit2');
/*!40000 ALTER TABLE `loanee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaner`
--

DROP TABLE IF EXISTS `loaner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaner` (
  `loaner_no` int NOT NULL AUTO_INCREMENT,
  `user_username` char(20) NOT NULL,
  PRIMARY KEY (`loaner_no`,`user_username`),
  KEY `fk_loaner_user1_idx` (`user_username`),
  CONSTRAINT `fk_loaner_user1` FOREIGN KEY (`user_username`) REFERENCES `user` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaner`
--

LOCK TABLES `loaner` WRITE;
/*!40000 ALTER TABLE `loaner` DISABLE KEYS */;
INSERT INTO `loaner` VALUES (19,'nopphadon'),(20,'pawaris'),(21,'pawaris2'),(18,'phanuwat'),(16,'sinlapawit'),(17,'sinlapawit2');
/*!40000 ALTER TABLE `loaner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `payment_method` enum('Credit Cards','Mobile Payments','Bank Transfers','Cash') DEFAULT NULL,
  `transaction_date` datetime DEFAULT NULL,
  `renting_renting_id` int NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `fk_payment_renting1_idx` (`renting_renting_id`),
  CONSTRAINT `fk_payment_renting1` FOREIGN KEY (`renting_renting_id`) REFERENCES `renting` (`renting_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,'Mobile Payments','2021-05-02 00:00:00',3,'CarImage/image-1619546138046.jpg'),(2,'Mobile Payments','2021-05-02 00:38:37',4,'CarImage/image-1620122252874.png'),(5,'Mobile Payments','2021-05-03 22:47:38',7,'CarImage/image-1620122252874.png'),(7,'Bank Transfers','2021-05-04 16:57:40',9,'CarImage/image-1620122252874.png'),(8,'Mobile Payments','2021-05-04 20:47:22',10,'CarImage/image-1620136024670.png'),(9,'Mobile Payments','2021-05-04 22:55:44',11,'CarImage/image-1620143723271.png'),(10,'Credit Cards','2021-05-04 22:57:43',12,'CarImage/image-1620143859646.jpeg'),(11,'Mobile Payments','2021-05-04 23:09:36',13,'CarImage/image-1620144573346.jpeg'),(12,'Credit Cards','2021-05-05 00:53:46',14,'CarImage/image-1620150807646.jpg'),(13,'Mobile Payments','2021-05-05 09:04:14',15,'CarImage/image-1620180231625.jpg'),(14,'Mobile Payments','2021-05-05 11:39:07',16,'CarImage/image-1620189467884.jpg'),(15,'Mobile Payments','2021-05-05 21:15:14',18,'CarImage/image-1620224107187.jpeg');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `renting`
--

DROP TABLE IF EXISTS `renting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `renting` (
  `renting_id` int NOT NULL AUTO_INCREMENT,
  `total_time` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `loanee_loanee_no` int NOT NULL,
  `loanee_user_username` char(10) NOT NULL,
  `status` enum('0','1') DEFAULT '0',
  `p_location` varchar(255) DEFAULT NULL,
  `r_location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`renting_id`),
  KEY `fk_renting_loanee1_idx` (`loanee_loanee_no`,`loanee_user_username`),
  CONSTRAINT `fk_renting_loanee1` FOREIGN KEY (`loanee_loanee_no`) REFERENCES `loanee` (`loanee_no`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `renting`
--

LOCK TABLES `renting` WRITE;
/*!40000 ALTER TABLE `renting` DISABLE KEYS */;
INSERT INTO `renting` VALUES (3,30,120000,16,'sinlapawit','0',NULL,NULL),(4,6,30000,16,'sinlapawit','0',NULL,NULL),(7,2,4000,18,'phanuwat','0',NULL,NULL),(9,3,9000,16,'sinlapawit','0',NULL,NULL),(10,7,21000,16,'sinlapawit','0',NULL,NULL),(11,7,15554,18,'phanuwat','1',NULL,NULL),(12,3,6666,18,'phanuwat','1',NULL,NULL),(13,3,6666,18,'phanuwat','0',NULL,NULL),(14,1,999,16,'sinlapawit','1',NULL,NULL),(15,4,8000,16,'sinlapawit','1',NULL,NULL),(16,10,20000,16,'sinlapawit','0',NULL,NULL),(18,28,2118918928,18,'phanuwat','0','fjg','ghkjhkgj');
/*!40000 ALTER TABLE `renting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `username` char(20) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` text,
  `age` int DEFAULT NULL,
  `phone` char(10) DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `id_card` char(13) DEFAULT NULL,
  `driving_lc` char(8) DEFAULT NULL,
  `loaner` tinyint NOT NULL DEFAULT '0',
  `loanee` tinyint NOT NULL DEFAULT '1',
  `user_image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT 'UserImage/user.png',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('nopphadon','$2b$04$2FrtK.3lF3Da.OJy4ap.MuhA.C5PoRLGmfIL9BSIobtobsNQh1P2G','Nopphadon2','Phanwong2','noppa@gmail.comtest2','RR',20,'0555555555','male','2021-05-30','1231231231231','12312312',0,1,NULL,'UserImage/image-1619958487019.jpeg'),('pawaris','$2b$04$7rcqwgogRU1sVrqNjRntmONT5zo2Sm77TrQ0dQgW/NxiggoObheHm','Pawaris','Wongsaeiad','pwr@gmail.com','asdasd',2,'0123123123','male','2021-05-07','1231231231231','12312312',0,1,NULL,'UserImage/user.png'),('pawaris2','$2b$04$d4NXc85/EascMl2a0ypGCu88W21HKKCR75qcQmwN4f8GDSYAzhhUu','Pawaris','Wongsaeiad','pwr@gmail.com','asdasd',44,'0123123123','male','2021-05-07','1231231231231','12312312',0,1,NULL,'UserImage/user.png'),('phanuwat','$2b$04$NGh1lJ1HGN4IUopmlt.E2ONWlp5zYVPs7Y2rWRqDzhZh8/m8/Agji','phanuwat','Munda','phanuwat@gmail.com','asd',15,'0456783456','male','2021-04-01','1412312312312','34534534',0,1,NULL,'UserImage/image-1620143196283.jpeg'),('sinlapawit','$2b$04$R7THXuywq8sumvKsViLAWOhDcThgKNXEx068rKym.fusTZUSWw2T.','Sinlapawit','Ritnamkham','sinlapawit@admin.com','lardkrabang',31,'0924624683','male','2021-05-22','1493857496023','12123232',0,1,NULL,'UserImage/image-1620136509509.jpeg'),('sinlapawit2','$2b$04$R7THXuywq8sumvKsViLAWOhDcThgKNXEx068rKym.fusTZUSWw2T.','fnamer','lname','asd@asd.com','asd',15,'0123456789','male','2021-04-08',NULL,NULL,0,1,NULL,'UserImage/user.png');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `vehicle_id` int NOT NULL AUTO_INCREMENT,
  `vehicle_type` enum('4-Door','2-Door','Station Wagons','Convertibles','Sports Cars','Mini-Vans','SUV','Pickup Trucks','Vans') DEFAULT NULL,
  `plate_num` varchar(255) DEFAULT NULL,
  `current_location` text,
  `r_price` int DEFAULT NULL,
  `status` varchar(255) DEFAULT '0',
  `model` varchar(255) DEFAULT NULL,
  `register_date` date DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `loaner_user_username` char(20) NOT NULL,
  PRIMARY KEY (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (2,'4-Door','EM2011','Bangkok',7000,'2','Tesla S','2021-04-27','CarImage/image-1620144607018.jpg','phanuwat'),(3,'SUV','EM2021','Bangkok',5000,'2','Tesla Cybertruck','2021-04-27','CarImage/image-1620051071000.jpg','phanuwat'),(6,'4-Door','TR1865','Samut Prakan',200,'1','Toyota Altis','2021-04-28','CarImage/image-1620058609385.jpg','sinlapawit'),(7,'Vans','FA1964','Puttaya',3000,'1','Ford Transit','2021-04-28','CarImage/image-1620136024670.png','phanuwat'),(8,'Pickup Trucks','HD4023','Khon Kaen',3000,'1','Ram TRX','2021-04-28','CarImage/Ram-TRX-2021.jpg','phanuwat'),(9,'Station Wagons','AB4041','Nonthaburi',2000,'2','Mercedes AMG','2021-04-28','CarImage/2021-Mercedes-AMG-E63-S-Wagon4.jpg','phanuwat'),(10,'Sports Cars','FP2020','Chaing Mai',5000,'0','Ferrari Portofino M','2021-04-30','CarImage/image-1619776794325.jpg','phanuwat'),(11,'2-Door','AB2020','Bangkok',4000,'0','VW Beetle 1964','2021-04-30','CarImage/image-1619776989981.jpg','phanuwat'),(12,'Station Wagons','CATT2020','CAT ISLAND',999,'0','CATTY','2021-05-03','CarImage/image-1620058609385.jpg','phanuwat'),(14,'2-Door','123123','bbb',3222,'0','bbb','2021-05-04','CarImage/image-1620143686713.png','phanuwat'),(15,'4-Door','cat55','test',5555,'0','CAT car','2021-05-04','CarImage/image-1620145268779.jpeg','sinlapawit'),(16,'Mini-Vans','RT2020','BANGKOK',2000,'0','TEST LAST','2021-05-05','CarImage/image-1620180171581.jpg','phanuwat'),(17,'2-Door','dfgdfgdf','dfgdfg',75675676,'1','zalnw','2021-05-05','CarImage/image-1620223022820.jpg','sinlapawit');
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_renting`
--

DROP TABLE IF EXISTS `vehicle_renting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_renting` (
  `item_no` int NOT NULL AUTO_INCREMENT,
  `s_date` date DEFAULT NULL,
  `e_date` date DEFAULT NULL,
  `price` int DEFAULT NULL,
  `renting_renting_id` int NOT NULL,
  PRIMARY KEY (`item_no`,`renting_renting_id`),
  KEY `fk_vehicle_renting_renting1_idx` (`renting_renting_id`),
  CONSTRAINT `fk_vehicle_renting_renting1` FOREIGN KEY (`renting_renting_id`) REFERENCES `renting` (`renting_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_renting`
--

LOCK TABLES `vehicle_renting` WRITE;
/*!40000 ALTER TABLE `vehicle_renting` DISABLE KEYS */;
INSERT INTO `vehicle_renting` VALUES (2,'2021-04-28','2021-05-28',120000,3),(3,'2021-05-13','2021-05-19',30000,4),(6,'2021-05-06','2021-05-08',4000,7),(7,'2021-05-07','2021-05-14',21000,10),(8,'2021-05-12','2021-05-15',9000,9),(9,'2021-05-10','2021-05-20',20000,16),(12,'2021-05-14','2021-05-15',999,14),(13,'2021-05-14','2021-05-21',15554,11),(13,'2021-05-26','2021-05-29',6666,12),(13,'2021-05-19','2021-05-22',6666,13),(16,'2021-05-12','2021-05-16',8000,15),(17,'2021-05-01','2021-05-29',2118918928,18);
/*!40000 ALTER TABLE `vehicle_renting` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-05 21:18:04
