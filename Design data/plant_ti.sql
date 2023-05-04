CREATE DATABASE  IF NOT EXISTS `plant` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `plant`;
-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: localhost    Database: plant
-- ------------------------------------------------------
-- Server version	5.5.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ti`
--

DROP TABLE IF EXISTS `ti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ti` (
  `Tagnumber` varchar(16) NOT NULL DEFAULT '',
  `TempNorm` varchar(15) DEFAULT NULL,
  `PressNorm` varchar(15) DEFAULT NULL,
  `ElementType` varchar(50) DEFAULT NULL,
  `SensorType` varchar(50) DEFAULT NULL,
  `ElementLength` varchar(15) DEFAULT NULL,
  `CONNECTION` varchar(50) DEFAULT NULL,
  `MFG` varchar(25) DEFAULT NULL,
  `RangeLow` varchar(10) DEFAULT NULL,
  `RangeHigh` varchar(10) DEFAULT NULL,
  `RangeUnit` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Tagnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ti`
--

LOCK TABLES `ti` WRITE;
/*!40000 ALTER TABLE `ti` DISABLE KEYS */;
INSERT INTO `ti` VALUES ('TC-0108','370','16.9','RTD','PT100','250','300LB 1\" RF','Okazaki','0','500','C'),('TC-0109','210','17.5','RTD','PT100','250','300LB 1\" RF','Okazaki','0','300','C'),('TC-1005','50','22','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TC-1101','-','-','-','-','-','-','-','60','120','C'),('TC-1105','50','6.5','RTD','PT100','400','150LB 1\" RF','Okazaki','0','150','C'),('TC-1201','105','22','RTD','PT100','250','300LB 1\" RF','Okazaki','0','150','C'),('TC-1302','100','15','T/C','K','Le1=14080','300LB 1 1/2\" RF','Okazaki','60','120','C'),('TC-1303','100','15','T/C','K','Le2=12280','300LB 1 1/2\" RF','Okazaki','60','120','C'),('TC-1304','100','15','T/C','K','Le3=8680','300LB 1 1/2\" RF','Okazaki','60','120','C'),('TC-1305','100','15','T/C','K','Le4=5080','300LB 1 1/2\" RF','Okazaki','60','120','C'),('TC-1404','76','0.1','RTD','PT100','400','150LB 1\" RF','Okazaki','60','120','C'),('TC-1407','50','18.9','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TC-1410','50','0.03','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TC-1603','64','0.1','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TC-1613','50','0.03','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TC-3102','90','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','150','C'),('TC-3104','95','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','150','C'),('TC-4102','59','41','RTD','PT100','250','600LB 1\" RF','Okazaki','0','200','C'),('TC-4115','62','4.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TC-4205','50','0.19kg/cm2A','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TC-5102','45','40.9','RTD','PT100','250','600LB 1\" RF','Okazaki','0','150','C'),('TC-5115','40','3.2','RTD','PT100','250','150LB 1\" RF','Okazaki','0','150','C'),('TC-5205','50','0.03','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TC-5305','100','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TC-6103','60','42.3','RTD','PT100','250','600LB 1\" RF','Okazaki','0','150','C'),('TC-6114','110','4.2','RTD','PT100','250','150LB 1\" RF','Okazaki','0','150','C'),('TC-6206','50','0.04','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TE-8501','-','-','T/C','K','-','1 1/2B-RF ','Hayashi Denko','0','1200','C'),('TE-8502','1542mmH2O','-','T/C','K','-','JPI 150 1 1/2B-RF ','Hayashi Denko','0','1200','C'),('TE-8503','1202mmH2O','-','RTD','PT100','-','150 1B-RF','Hayashi Denko','0','200','C'),('TE-8504','ATM','-','RTD','PT100','-','150 1B-RF','Hayashi Denko','0','200','C'),('TE-8505','1542mmH2O','-','T/C','K','-','JPI 1 1/2B-RF ','Hayashi Denko','0','1200','C'),('TE-8506','1144mmH2O','-','RTD','PT100','-','1B-RF','Hayashi Denko','0','200','C'),('TE-8507','-','-','RTD','PT100','-','1B-RF','Hayashi Denko','0','200','C'),('TE-9213A','-','-','RTD','PT100','-','-','-','0','200','C'),('TE-9213B','-','-','RTD','PT100','-','-','-','0','200','C'),('TE-9213C','-','-','RTD','PT100','-','-','-','0','500','C'),('TE-9213D','-','-','RTD','PT100','-','-','-','0','500','C'),('TE-9421','-','-','RTD','PT100','-','-','-','0','0','C'),('TI-0101','370','16.9','RTD','PT100','400','300LB 1.5\" RF','Okazaki','0','500','C'),('TI-0102','370','16.9','RTD','PT100','400','300LB 1.5\" RF','Okazaki','0','500','C'),('TI-0103','360','15.8','RTD','PT100','250','300LB 1\" RF','Okazaki','0','500','C'),('TI-0104','82','18.3','RTD','PT100','250','300LB 1\" RF','Okazaki','0','150','C'),('TI-0105','42','42','RTD','PT100','250','600LB 1\" RF','Okazaki','0','100','C'),('TI-0106','33','500mmH2O','RTD','PT100','400','150LB 1\" RF','Okazaki','0','100','C'),('TI-0107','130','400mmH2O','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-0110','210','17.5','RTD','PT100','250','300LB 1\" RF','Okazaki','0','300','C'),('TI-0111','244','13.9','RTD','PT100','250','300LB 1\" RF','Okazaki','0','500','C'),('TI-0112','520','12.4','T/C','K','250','300LB 1\" RF','Okazaki','0','600','C'),('TI-0113','520','12.4','T/C','K','250','300LB 1\" RF','Okazaki','0','600','C'),('TI-0114','150','-200mmH2O','RTD','PT100','400','150LB 1 1/2\" RF','Okazaki','0','300','C'),('TI-0115','224','-100mmH2O','RTD','PT100','400','150LB 1 1/2\" RF','Okazaki','0','300','C'),('TI-0116','260','-90mmH2O','RTD','PT100','400','150LB 1 1/2\" RF','Okazaki','0','400','C'),('TI-0117','871','-60mmH2O','T/C','K','400','150LB 1 1/2\" RF','Okazaki','0','1000','C'),('TI-0118','903','-40mmH20','T/C','K','400','150LB 1 1/2\" RF','Okazaki','0','903','C'),('TI-0119','1055','-5mmH2O','T/C','K','400','150LB 1 1/2\" RF','Okazaki','0','1200','C'),('TI-0120','1060','-5mmH2O','T/C','K','400','150LB 1 1/2\" RF','Okazaki','0','1200','C'),('TI-0121','960','9.2','T/C','K','Le=890','1/2 NPT','Okazaki','0','1000','C'),('TI-0122','960','9.2','T/C','K','Le=890','1/2 NPT','Okazaki','0','1000','C'),('TI-0124','20','2','RTD','PT100','250','150LB 1\" RF','Okazaki','0','50','C'),('TI-0125','40','0.25','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0126','240','9','RTD','PT100','250','150LB 1\" RF','Okazaki','0','300','C'),('TI-0127','162','17.5','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TI-0129','140','8.8','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-0130','70','8.6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0131','50','8.4','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0142','-','-','T/C','K','-','-','Yamari','0','600','C'),('TI-0143','-','-','T/C','K','-','-','Yamari','0','600','C'),('TI-0144','-','-','T/C','K','-','-','Yamari','0','600','C'),('TI-0145','-','-','T/C','K','-','-','Yamari','0','600','C'),('TI-0146','-','-','T/C','K','-','-','Yamari','0','600','C'),('TI-0147','-','-','T/C','K','-','-','Yamari','0','600','C'),('TI-0149','-','-','T/C','K','-','-','Yamari','0','600','C'),('TI-0150','-','-','T/C','K','-','-','Yamari','0','1200','C'),('TI-02','-','-','RTD','PT100','-','-','Yokogawa','0','200','C'),('TI-0202','133','1.7','RTD','PT100','400','150LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-0203','115','1.6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-0204','124','5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-0205','204','12','RTD','PT100','250','300LB 1\" RF','Okazaki','0','300','C'),('TI-0206','133','1.8','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-0207','133','1.7','RTD','PT100','400','150LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-0208','40','1.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0209','136','14.5','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TI-0209B','-','-','RTD','PT100','-','-','Yamari','0','200','C'),('TI-0210','40','5.7','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0211','43','8.2','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0212','43','11.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0213','75','8.4','RTD','PT100','250','150LB 1\" RF','Okazaki','0','150','C'),('TI-0214','80','1.1','RTD','PT100','250','150LB 1\" RF','Okazaki','0','150','C'),('TI-0215','43','8.1','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0216','42','23.85','RTD','PT100','250','300LB 1\" RF','Okazaki','0','100','C'),('TI-0217','43','9.5','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TI-0218','43','8.3','RTD','PT100','400','150LB 1 1/2\" RF','Okazaki','0','150','C'),('TI-0219','43','8.3','RTD','PT100','400','150LB 1 1/2\" RF','Okazaki','0','150','C'),('TI-0221','9','-','RTD','PT100','300','150LB 1 1/2\" RF','Okazaki','0','150','C'),('TI-0222','20.7','-','RTD','PT100','300','300LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-0224','20.4','-','RTD','PT100','300','300LB 1 1/2\" RF','Okazaki','0','150','C'),('TI-0225','42.7','-','RTD','PT100','300','600LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-0227','8.1','-','RTD','PT100','300','150LB 1 1/2\" RF','Okazaki','0','150','C'),('TI-0228','14.2','-','RTD','PT100','300','300LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-0230','13.9','-','RTD','PT100','300','300LB 1 1/2\" RF','Okazaki','0','150','C'),('TI-0231','24.6','-','RTD','PT100','300','300LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-0233','ATM','-','RTD','PT100','1090','1/2\" NPT','Okazaki','0','150','C'),('TI-0234','ATM','-','RTD','PT100','1090','1/2\" NPT','Okazaki','0','150','C'),('TI-0235','ATM','-','RTD','PT100','1090','1/2\" NPT','Okazaki','0','150','C'),('TI-0236','ATM','-','RTD','PT100','1090','1/2\" NPT','Okazaki','0','150','C'),('TI-0237','ATM','-','RTD','PT100','1090','1/2\" NPT','Okazaki','0','150','C'),('TI-0238','ATM','-','RTD','PT100','-','-','-','0','150','C'),('TI-0239','ATM','-','RTD','PT100','-','-','-','0','150','C'),('TI-0240','ATM','-','RTD','PT100','-','-','-','0','150','C'),('TI-0241','ATM','-','RTD','PT100','-','-','-','0','150','C'),('TI-0242','ATM','-','RTD','PT100','-','-','-','0','150','C'),('TI-0243','1.4','-','RTD','PT100','300','150LB 1 1/2\" RF','Okazaki','0','150','C'),('TI-0244','5.1','-','RTD','PT100','300','150LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-0246','4.9','-','RTD','PT100','300','150LB 1 1/2\" RF','Okazaki','0','150','C'),('TI-0247','16','-','RTD','PT100','300','150LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-0249','ATM','-','RTD','PT100','-','-','-','0','150','C'),('TI-0250','ATM','-','RTD','PT100','-','-','-','0','150','C'),('TI-03','-','-','RTD','PT100','-','-','Yokogawa','0','200','C'),('TI-0303','47','9','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-0304','42','42','RTD','PT100','250','600LB 1\" RF','Okazaki','0','100','C'),('TI-0321','-','-','RTD','PT100','-','RF-300LBS SF 1.5\"','Fisher Rosemount','0','100','C'),('TI-04','-','-','RTD','PT100','-','-','Yokogawa','0','200','C'),('TI-1001','50','22','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1002','50','22','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1003','50','22','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1004','50','22','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1006','50','22','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1007','50','22','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1008','52','21','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1009','40','22','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TI-1010','40','0.01','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1101 A','100','17.5','RTD','PT100','400','300LB 1\" RF','Okazaki','60','120','C'),('TI-1101 B','100','17.5','RTD','PT100','400','300LB 1\" RF','Okazaki','60','120','C'),('TI-1102 A','69','6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1102 B','69','6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1102 C','69','6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1103','69','6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1104','68','2','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1109','-','-','RTD','PT100','-','-','-','0','200','C'),('TI-1110','50','0.005','RTD','PT100','400','150LB 2\" RF','Okazaki','0','200','C'),('TI-1111','40','17.5','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TI-1112 A','91','2.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1112 B','91','2.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1112 C','91','2.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1113','91','2.5','RTD','PT100','250','150LB 1\" RF','Okazaki','50','110','C'),('TI-1121','-','-','RTD','PT100','-','-','-','0','200','C'),('TI-1202','74','19','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1203','85','19','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1204','80','19','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1205','95','19','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1206','73','4.5','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1301','40','17.5','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TI-1307','100','15','T/C','K','Le5=1480','300LB 1 1/2\" RF','Okazaki','0','200','C'),('TI-1308','100','15','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TI-1313','78','6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1314','78','6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1315','78','6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1316','78','6','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1317','60','15','RTD','PT100','250','300LB 1\" RF','Okazaki','0','200','C'),('TI-1318','61','15','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-1401','96','3.8','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1402','129','0.16','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1403','100','0.16','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1405','76','0.1','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1406','40','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1408','40','0.005','RTD','PT100','400','150LB 2\" RF','Okazaki','0','200','C'),('TI-1409','40','0.03','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1501','20','5.8','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1521','0.03','-','RTD','PT100','-','-','Okazaki','0','100','C'),('TI-1522','1.9','-','RTD','PT100','-','-','Okazaki','0','200','C'),('TI-1524','6','-','RTD','PT100','-','-','Okazaki','0','200','C'),('TI-1526','ATM','-','RTD','PT100','-','-','Okazaki','0','200','C'),('TI-1527','ATM','-','RTD','PT100','-','-','Okazaki','0','200','C'),('TI-1601','79','0.22','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1602','70','0.15','RTD','PT100','400','150LB 1\" RF','Okazaki','50','100','C'),('TI-1604','64','0.1','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1605','50','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-1606','50','5.73','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1607','91','2.7','RTD','PT100','250','150LB 1\" RF','Okazaki','50','160','C'),('TI-1608','101','2.65','RTD','PT100','250','150LB 1\" RF','Okazaki','50','160','C'),('TI-1609','40','0.005','RTD','PT100','400','150LB 2\" RF','Okazaki','0','200','C'),('TI-1610','40','0.005','RTD','PT100','400','150LB 2\" RF','Okazaki','0','200','C'),('TI-1611','55','2','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-1612','50','0.03','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-2101','129','0.14kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-2102','50','0.12kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-2103','40','2.66','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-2104','129','-0.25','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-2201','150','0.13kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-2202','103','0.12kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-2203','150','0.3','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-2301','20','20','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TI-2302','-','-','RTD','PT100','-','-','Okazaki','0','100','C'),('TI-2501','148','0.04','RTD','PT100','300','150LB 1\" RF','Okazaki','0','200','C'),('TI-2502','88','0.03','RTD','PT100','300','150LB 1\" RF','Okazaki','0','200','C'),('TI-2504','148','0.005','RTD','PT100','400','150LB0 2\" RF','Okazaki','0','200','C'),('TI-2505','148','0.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-3201','159','0.16kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-3202','104','0.14kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-3203','40','0.10kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-3204','164','0.36','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-4101','67','2.8','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4103','45','42','RTD','PT100','250','600LB 1\" RF','Okazaki','0','200','C'),('TI-4105','100','40','T/C','K','1120','600LB 1\" RF','Okazaki','0','200','C'),('TI-4106','100','40','T/C','K','1120','600LB 1\" RF','Okazaki','0','200','C'),('TI-4107','100','40','T/C','K','1120','600LB 1\" RF','Okazaki','0','200','C'),('TI-4108','100','40','T/C','K','1120','600LB 1\" RF','Okazaki','0','200','C'),('TI-4109','100','40','T/C','K','1120','600LB 1\" RF','Okazaki','0','200','C'),('TI-4110','100','40','T/C','K','1120','600LB 1\" RF','Okazaki','0','200','C'),('TI-4111','100','40','T/C','K','1120','600LB 1\" RF','Okazaki','0','200','C'),('TI-4112','100','40','T/C','K','1120','600LB 1\" RF','Okazaki','0','200','C'),('TI-4114','129','4.5','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4116','40','39','RTD','PT100','250','600LB 1\" RF','Okazaki','0','200','C'),('TI-4121','38','-','RTD','PT100','-','-','Okazaki','0','100','C'),('TI-4122','42','-','RTD','PT100','-','-','Okazaki','0','100','C'),('TI-4124','42','-','RTD','PT100','-','-','Okazaki','0','100','C'),('TI-4126','ATM','-','RTD','PT100','-','-','Okazaki','0','100','C'),('TI-4127','ATM','-','RTD','PT100','-','-','Okazaki','0','100','C'),('TI-4201','139','0.23kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4202','122','0.20kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4203','40','0.19kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4204','40','0.19kg/cm2A','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-4301','138','0.23kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4302','135','0.20kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4303','100','0.16kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4304','40','3.29','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-4401','170','0.14kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4402','120','0.11kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4403','40','0.11','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4501','138','0.23kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4502','80','0.20kg/cm2A','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-4503','40','0.19','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5101','39','2.8','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5105','105','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-5106','105','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-5107','105','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-5108','105','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-5109','105','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-5110','105','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-5111','105','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-5112','105','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-5114','106','4.5','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5201','120','0.08','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5202','117','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5203','40','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5204','40','0.03','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-5301','120','0.06','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5302','119','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5303','100','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5304','40','3.3','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-5401','163','0.06','RTD','PT100','300','150LB 1\" RF','Okazaki','0','200','C'),('TI-5402','119','0.03','RTD','PT100','300','150LB 1\" RF','Okazaki','0','200','C'),('TI-5501','119','0.06','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-5502','110','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6101','74','2.8','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6104','120','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-6105','120','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-6106','120','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-6107','120','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-6108','120','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-6109','120','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-6110','120','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-6111','120','40','T/C','K','635&310','600LB 1\" RF','Okazaki','0','200','C'),('TI-6113','120','2.8','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6201','110','0.09','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6202','105','0.05','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-6203','97','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6204','40','0.04','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6205','40','0.04','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-6301','109','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6302','108','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6303','40','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-6304','40','2.89','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-6401','128','0.05','RTD','PT100','300','150LB 1\" RF','Okazaki','0','200','C'),('TI-6402','108','0.03','RTD','PT100','300','150LB 1\" RF','Okazaki','0','200','C'),('TI-7101','36','14.5','RTD','PT100','400','300LB 1 1/2\" RF','Okazaki','0','100','C'),('TI-7102','36','14.5','RTD','PT100','400','300LB 1 1/2\" RF','Okazaki','0','100','C'),('TI-7103','36','14.5','RTD','PT100','400','300LB 1 1/2\" RF','Okazaki','0','100','C'),('TI-7104','36','14.5','RTD','PT100','400','300LB 1 1/2\" RF','Okazaki','0','100','C'),('TI-7105','36','14.5','RTD','PT100','400','300LB 1 1/2\" RF','Okazaki','0','100','C'),('TI-7106','36','14.5','RTD','PT100','400','300LB 1 1/2\" RF','Okazaki','0','100','C'),('TI-7107','36','14.5','RTD','PT100','400','300LB 1 1/2\" RF','Okazaki','0','100','C'),('TI-7108','36','14.5','RTD','PT100','400','300LB 1 1/2\" RF','Okazaki','0','100','C'),('TI-7109','-','-','RTD','PT100','-','-','-','0','200','C'),('TI-7110','36','14.5','RTD','PT100','250','300LB 1\" RF','Okazaki','0','100','C'),('TI-7201','AMB','50mmH2O','RTD','PT100','400','300LB 2\" RF','Okazaki','0','100','C'),('TI-7202','AMB','50mmH2O','RTD','PT100','400','150LB 2\" RF','Okazaki','0','100','C'),('TI-7203','AMB','50mmH2O','RTD','PT100','400','150LB 2\" RF','Okazaki','0','100','C'),('TI-7204','AMB','50mmH2O','RTD','PT100','400','150LB 2\" RF','Okazaki','0','100','C'),('TI-7205','AMB','50mmH2O','RTD','PT100','400','150LB 2\" RF','Okazaki','0','100','C'),('TI-7206','AMB','50mmH2O','RTD','PT100','400','150LB 2\" RF','Okazaki','0','100','C'),('TI-7207','AMB','1','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-7208','AMB','1','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-7209','AMB','1','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-9162','-','-','RTD','PT100','-','-','-','-','-','-'),('TI-9201','155','4.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-9202','204','16','RTD','PT100','250','300LB 1\" RF','Okazaki','0','250','C'),('TI-9203','155','4.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','200','C'),('TI-9204','133','2','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-9205','204','16','RTD','PT100','250','300LB 1\" RF','Okazaki','0','250','C'),('TI-9212','-','-','RTD','PT100','-','-','-','0','40','C'),('TI-9213','-','-','-','-','-','-','-','-','-','-'),('TI-9331','3','-','T/C','K','-','-','ACEZ','0','100','C'),('TI-9401','32','3.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-9402','39','2.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-9407','7','3','RTD','PT100','250','150LB 1\" RF','Okazaki','0','50','C'),('TI-9408','10.8','1','RTD','PT100','250','150LB 1\" RF','Okazaki','0','50','C'),('TI-9601','AMB','3.5','RTD','PT100','250','150LB 1\" RF','Okazaki','0','100','C'),('TI-9603','AMB','18','RTD','PT100','250','300LB 1\" RF','Okazaki','0','100','C'),('TI-9604','AMB','13','RTD','PT100','250','300LB 1\" RF','Okazaki','0','100','C'),('TI-9612','-','-','RTD','PT100','-','-','-','0','150','C'),('TI-9613','-','-','RTD','PT100','-','-','-','0','150','C'),('TI-9801','102','0.06','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TI-9802','98','0.06','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TS-0223','20.7','-','RTD','PT100','300','300LB 1 1/2\" RF','Yamari','0','200','C'),('TS-0226','42.7','-','RTD','PT100','300','600LB 1.5\" RF','Yamari','0','200','C'),('TS-0229','14.2','-','RTD','PT100','300','300LB 1 1/2\" RF','Yamari','0','200','C'),('TS-0232','24.6','-','RTD','PT100','300','300LB 1 1/2\" RF','Yamari','0','200','C'),('TS-0245','5.1','-','RTD','PT100','300','150LB 1 1/2\" RF','Yamari','0','200','C'),('TS-0245B','-','-','-','-','-','-','-','-','-','-'),('TS-0248','16','-','RTD','PT100','300','150LB 1 1/2\" RF','Yamari','0','200','C'),('TS-0248B','-','-','-','-','-','-','-','-','-','-'),('TS-0291','-','-','-','-','-','-','-','-','-','-'),('TS-1106','100','17.5','RTD','PT100','400','300LB 1\" RF','Okazaki','0','200','C'),('TS-1523','1.9','-','RTD','PT100','-','-','Yamari','0','115','C'),('TS-1525','6','-','RTD','PT100','-','-','Yamari','0','150','C'),('TS-3103','90','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TS-3105','95','0.03','RTD','PT100','400','150LB 1\" RF','Okazaki','0','200','C'),('TS-4113','100','40','RTD','PT100','400','600LB 1\" RF','Okazaki','0','200','C'),('TS-4123','42','-','RTD','PT100','-','-','Yamari','0','75','C'),('TS-4125','42','-','RTD','PT100','-','-','Yamari','0','75','C'),('TS-5113','105','40','RTD','PT100','400','600LB 1\" RF','Okazaki','0','200','C'),('TS-6112','120','40','RTD','PT100','400','600LB 1\" RF','Okazaki','0','200','C'),('TS-9611','-','-','RTD','PT100','-','-','-','0','80','C'),('TT-0148','-','-','T/C','K','-','-','Yamari','0','600','C'),('TT-0322','-','-','RTD','PT100','-','RF-300LBS SF 1.5\"','Fisher Rosemount','0','100','C'),('TT-0323','-','-','RTD','PT100','-','RF-300LBS SF 1.5\"','Fisher Rosemount','0','100','C'),('TT-0324','-','-','RTD','PT100','-','RF-300LBS SF 1.5\"','Fisher Rosemount','0','100','C');
/*!40000 ALTER TABLE `ti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-01-30 13:52:34