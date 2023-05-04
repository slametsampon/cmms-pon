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
-- Table structure for table `mac`
--

DROP TABLE IF EXISTS `mac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mac` (
  `Tagnumber` varchar(16) NOT NULL DEFAULT '',
  `MotorType` varchar(50) DEFAULT NULL,
  `CurrentNomial` varchar(15) DEFAULT NULL,
  `CurrentSet` varchar(15) DEFAULT NULL,
  `CurrentActual` varchar(50) DEFAULT NULL,
  `Rpm` varchar(50) DEFAULT NULL,
  `Power` varchar(10) DEFAULT NULL,
  `Voltage` varchar(10) DEFAULT NULL,
  `MFG` varchar(25) DEFAULT NULL,
  `VibStdG` varchar(10) DEFAULT NULL,
  `VibStdMetric` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Tagnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mac`
--

LOCK TABLES `mac` WRITE;
/*!40000 ALTER TABLE `mac` DISABLE KEYS */;
INSERT INTO `mac` VALUES ('A-011M','IM','0.55','0.8','-','1430','0.2','380','YASKAWA','0.7','6.87'),('A-022M','IM','0.55','1.1','-','1380','0.2','380','ABB','0.7','6.87'),('A-023M','IM','0.55','0.8','-','1430','0.2','380','YASKAWA','0.7','6.87'),('A-024M','IM','1.17','1.6','-','1420','0.4','380','YASKAWA','0.7','6.87'),('A-102M','IM','11.3','11','-','1430','5.5','380','MEC','0.7','6.87'),('A-110-P2M','IM','0.55','1','-','1410','0.4','380','MEC','0.7','6.87'),('A-110M','IM','165','152','-','980','90','380','MEC','0.7','6.87'),('A-230M','IM','7.8','9','-','1430','3.7','380','MEC','0.7','6.87'),('A-310M','IM','43','45','-','1460','22','380','MEC','0.7','6.87'),('A-311M','IM','43','45','-','1460','22','380','MEC','0.7','6.87'),('A-815M','IM','0.35','0.63','-','1410','0.2','380','SUMITOMO','0.58','5.69'),('A-821M','IM','0.55','0.63','-','1410','0.2','380','SUMITOMO','0.58','5.69'),('A-833M','IM','2.6','3.5','-','1440','1.5','380','YASKAWA','0.58','5.69'),('A-834M','IM','0.55','0.9','-','1400','0.2','380','ABB','0.58','5.69'),('A-835AM','IM','0.55','0.9','-','1400','0.2','380','ABB','0.58','5.69'),('A-835BM','IM','0.55','0.9','-','1400','0.2','380','ABB','0.58','5.69'),('A-921M','IM','0.3','0.63','-','1350','0.18','380','Teikoku Electric.','0.58','5.69'),('B-011BM','IM','-','-','-','2948','35','380','-','-','-'),('B-011M','IM','90','27.5','-','1490','260','6000','GEC Alsthom','1.1','10.79'),('B-012M','IM','90','27.5','-','1490','260','6000','GEC Alsthom','1.1','10.79'),('B-811AM','IM','33','36','-','1450','18.5','380','MEC','0.96','9.42'),('B-811BM','IM','33','36','-','1450','18.5','380','MEC','0.96','9.42'),('B-921M','IM','127','-','-','2970','75','380','ABB','0.71','6.97'),('B-935AM','IM','1.3','1.6','-','2850','0.75','380','ABB','0.71','6.97'),('B-935BM','IM','1.3','1.6','-','2850','0.75','380','ABB','0.71','6.97'),('B-939M','IM','11.4','13','-','1450','5.5','380','ABB','0.5','4.90'),('B-941AM','IM','141.6','160','-','1480','75','380','AEG','1','9.81'),('B-941BM','IM','141.6','160','-','1480','75','380','AEG','1','9.81'),('B-951M','IM','80.6','85','-','1470','45','380','MEC','0.50','4.90'),('C-009-P2M','IM','2.1','2.2','-','1430','0.75','380','YASKAWA','0.50','4.90'),('C-009M','IM','259','250','-','370','145','380','YASKAWA','0.74','7.26'),('C-011/018-P2M','IM','13','12','-','1440','5.5','380','TOSHIBA','0.48','4.71'),('C-011/018-Z1M','IM','7.6','9','-','1430','3.7','380','TOSHIBA','0.48','4.71'),('C-011/018M','IM','262','260','-','368','2050','6000','TOSHIBA','0.90','8.83'),('C-012-P2M','IM','2.6','4','-','1440','1.5','380','TOSHIBA','0.50','4.90'),('C-012B-P2M','IM','-','-','-','-','0.37','380','-','-','-'),('C-012B-P3M','IM','-','-','-','-','1.5','380','-','-','-'),('C-012BM','IM','-','-','-','-','110','380','-','-','-'),('C-012M','IM','30','30','-','493','220','6000','TOSHIBA','0.70','6.87'),('C-112-XM','IM','2.1','1.9','-','1400','0.75','380','MEC','0.48','4.71'),('C-112M','IM','130','135','-','2960','75','380','MEC','1.80','17.66'),('C-150-P2M','IM','2.6','3.5','-','1440','1.5','380','TOSHIBA','0.58','5.69'),('C-150M','IM','220','225','-','492','100','380','TOSHIBA','1.00','9.81'),('C-412-P2M','IM','3.8','4','-','1440','1.5','380','TOSHIBA','0.48','4.71'),('C-412M','IM','76','50','-','493','570','6000','TOSHIBA','1.20','11.77'),('C-717M','IM','-','-','-','-','-','380','-','-','-'),('C-991-F1M','IM','-','-','-','-','-','-','-','-','-'),('C-991-F2M','IM','-','-','-','940','2.2','380','SIEMENS','0.50','4.90'),('C-991AM','IM','-','-','-','1485','90','380','Schorch','2.00','19.62'),('C-991BM','IM','-','-','-','1492','90','380','SIEMENS','2.00','19.62'),('D-941M','IM','-','-','-','1400','0.25','380','-','-','-'),('E-018AM','IM','15','36','-','1475','15','380','Brook Crompt.','0.76','7.46'),('E-018BM','IM','15','36','-','1475','15','380','Brook Crompt.','0.76','7.46'),('E-018CM','IM','-','-','-','1440','7.5','380','-','-','-'),('E-018DM','IM','-','-','-','1440','7.5','380','-','-','-'),('E-115/143AM','IM','57','65','-','1465','30','380','Brook Hansen','0.78','7.65'),('E-115/143BM','IM','57','65','-','1465','30','380','Brook Hansen','0.78','7.65'),('E-118AM','IM','76','78','-','980','37','380','Brook Hansen','0.69','6.77'),('E-118BM','IM','76','78','-','980','37','380','Brook Hansen','0.69','6.77'),('E-118CM','IM','76','78','-','980','37','380','Brook Hansen','0.69','6.77'),('E-118DM','IM','76','78','-','980','37','380','Brook Hansen','0.69','6.77'),('E-145AM','IM','76','77','-','980','37','380','Brook Hansen','0.69','6.77'),('E-145BM','IM','76','75','-','980','37','380','Brook Hansen','0.69','6.77'),('E-145CM','IM','76','75','-','980','37','380','Brook Hansen','0.69','6.77'),('E-145DM','IM','76','77','-','980','37','380','Brook Hansen','0.69','6.77'),('E-145EM','IM','-','-','-','985','37','380','-','0.69','6.77'),('E-145FM','IM','-','-','-','985','37','380','-','0.69','6.77'),('E-165AM','IM','57','60','-','1465','30','380','Brook Hansen','0.85','8.34'),('E-165BM','IM','57','60','-','1465','30','380','Brook Hansen','0.98','9.61'),('E-165CM','IM','57','60','-','1465','30','380','Brook Hansen','0.98','9.61'),('E-165DM','IM','57','60','-','1465','30','380','Brook Hansen','0.98','9.61'),('E-165EM','IM','-','60','-','1465','30','380','Brook Hansen','0.98','9.61'),('E-165FM','IM','57','60','-','1465','30','380','Brook Hansen','0.98','9.61'),('E-165GM','IM','57','60','-','1465','30','380','Brook Hansen','0.98','9.61'),('E-165HM','IM','57','60','-','1465','30','380','Brook Hansen','0.98','9.61'),('E-165IM','IM','-','-','-','960','30','380','-','0.98','9.61'),('E-165JM','IM','-','-','-','960','30','380','-','0.98','9.61'),('E-414AM','IM','28','30','-','1475','15','380','Brook Crompt.','0.70','6.87'),('E-414BM','IM','28','30','-','1475','15','380','Brook Crompt.','0.70','6.87'),('E-418AM','IM','35','35','-','1465','18.5','380','Brook Crompt.','0.85','8.34'),('E-418BM','IM','35','35','-','1465','18.5','380','Brook Crompt.','0.85','8.34'),('E-425AM','IM','28','36','-','1475','15','380','Brook Crompt.','0.70','6.87'),('E-425BM','IM','28','36','-','1475','15','380','Brook Crompt.','0.70','6.87'),('E-437AM','IM','13.1','10.5','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-437BM','IM','13.1','10.5','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-437CM','IM','13.1','10.5','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-525AM','IM','13.1','12','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-525BM','IM','13.1','12','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-525CM','IM','13.1','12','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-535AM','IM','13.1','12.5','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-535BM','IM','13.1','12.5','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-535CM','IM','13.1','12.5','-','730','5.5','380','Brook Crompt.','0.82','8.04'),('E-625AM','IM','57','60','-','1465','30','380','Brook Hansen','0.70','6.87'),('E-625BM','IM','57','60','-','1465','30','380','Brook Hansen','0.70','6.87'),('E-922AM','IM','22','24.5','-','1470','11','380','Brook Crompt.','0.70','6.87'),('E-922BM','IM','22','23','-','1470','11','380','Brook Crompt.','0.70','6.87'),('F-240M','IM','11.3','13','-','1450','5.5','380','MEC','0.50','4.90'),('P-011AM','IM','0.76','1.6','-','1355','0.37','380','SIEMENS','0.50','4.90'),('P-011BM','IM','0.76','1.6','-','1355','0.37','380','SIEMENS','0.50','4.90'),('P-021AM','IM','-','-','-','2955','75','380','Teikoku Electric.','2.68','26.29'),('P-021BM','IM','-','-','-','2955','75','380','Teikoku Electric.','2.68','26.29'),('P-022AM','CAN','5.5','6','-','2860','2.2','380','Teikoku Electric.','380','8'),('P-022BM','CAN','5.5','6','-','2860','2.2','380','Teikoku Electric.','380','8'),('P-023M','CAN','23','25','-','2920','11','380','Teikoku Electric.','380','7'),('P-024M','CAN','3.8','4','-','2870','1.5','380','Teikoku Electric.','380','8'),('P-025AM','CAN','5.5','12','-','2910','5.5','380','Teikoku Electric.','380','6'),('P-025BM','CAN','5.5','12','-','2910','5.5','380','Teikoku Electric.','380','6'),('P-026M','IM','0.55','1','-','1400','0.25','380','Teikoku Electric.','0.50','4.90'),('P-102M','IM','0.76','1','-','1355','0.37','380','SIEMENS','0.52','5.10'),('P-110AM','IM','6.63','8','-','3000','3.9','380','Nikkiso Co LTD','0.70','6.87'),('P-110BM','IM','6.63','8','-','3000','3.9','380','Nikkiso Co LTD','0.70','6.87'),('P-117M','CAN','23','24','-','2900','11','380','Teikoku Electric.','380','7'),('P-118AM','IM','230','237','-','1485','132','380','SIEMENS','1.80','17.66'),('P-118BM','IM','230','235','-','1485','132','380','SIEMENS','1.80','17.66'),('P-121AM','CAN','90','95','-','2900','45','380','Teikoku Electric.','380','10'),('P-121BM','CAN','90','97','-','2900','45','380','Teikoku Electric.','380','10'),('P-142AM','IM','186','200','-','2980','110','380','SIEMENS','1.20','11.77'),('P-142BM','IM','186','200','-','2980','110','380','SIEMENS','1.20','11.77'),('P-145AM','CAN','55','59','-','2900','26','380','Teikoku Electric.','380','9'),('P-145BM','CAN','55','59','-','2900','26','380','Teikoku Electric.','380','9'),('P-147AM','CAN','23','26','-','2900','11','380','Teikoku Electric.','380','7'),('P-147BM','CAN','23','25','-','2900','11','380','Teikoku Electric.','380','7'),('P-162AM','IM','194','200','-','1485','110','380','SIEMENS','1.80','17.66'),('P-162BM','IM','194','198','-','1485','110','380','SIEMENS','1.80','17.66'),('P-163M','IM','194','200','-','1485','110','380','SIEMENS','1.80','17.66'),('P-165AM','CAN','55','58','-','2900','26','380','Teikoku Electric.','380','9'),('P-165BM','CAN','55','58','-','2900','26','380','Teikoku Electric.','380','9'),('P-167AM','CAN','23','25','-','2900','11','380','Teikoku Electric.','380','7'),('P-167BM','CAN','23','25','-','2900','11','380','Teikoku Electric.','380','7'),('P-169AM','CAN','6.6','14','-','2900','6.6','380','Teikoku Electric.','380','6'),('P-169BM','CAN','6.6','14','-','2900','6.6','380','Teikoku Electric.','380','6'),('P-212M','CAN','23','23','-','2900','11','380','Teikoku Electric.','380','7'),('P-215M','CAN','5.5','5.8','-','2900','2.2','380','Teikoku Electric.','380','6'),('P-217AM','CAN','7.5','7.8','-','2900','3','380','Teikoku Electric.','380','6'),('P-217BM','CAN','23','-','-','-','-','-','-','-','6'),('P-222M','CAN','5.5','24','-','2900','11','380','Teikoku Electric.','380','7'),('P-225M','CAN','3.3','5.6','-','2900','2.2','380','Teikoku Electric.','380','6'),('P-226M','CAN','5.44','3.5','-','2900','1.1','380','Teikoku Electric.','380','6'),('P-230AM','IM','5.44','7.5','-','3000','3.2','380','Nikkiso Co LTD','0.68','6.67'),('P-230BM','IM','0.66','7.5','-','3000','3.2','380','Nikkiso Co LTD','0.68','6.67'),('P-231M','IM','2.38','1.5','-','1355','0.37','380','SIEMENS','0.48','4.71'),('P-233M','IM','3.3','3.25','-','1405','1.35','380','SIEMENS','0.52','5.10'),('P-237M','CAN','3.3','3.25','-','2900','1.1','380','Teikoku Electric.','380','6'),('P-243M','CAN','3.3','3.4','-','2900','1.1','380','Teikoku Electric.','380','6'),('P-251M','CAN','16','3.5','-','2900','1.1','380','Teikoku Electric.','380','6'),('P-252M','CAN','3.3','17','-','2900','6.6','380','Teikoku Electric.','380','6'),('P-255M','CAN','3','3.5','-','2900','1.1','380','Teikoku Electric.','380','6'),('P-257M','CAN','15','3','-','2900','1.1','380','Teikoku Electric.','380','6'),('P-312AM','CAN','15','13','-','2900','5.5','380','Teikoku Electric.','380','6'),('P-312BM','CAN','5.5','13','-','2900','5.5','380','Teikoku Electric.','380','6'),('P-321AM','CAN','5.5','5.7','-','2900','2.2','380','Teikoku Electric.','380','6'),('P-321BM','CAN','124','5.7','-','2900','2.2','380','Teikoku Electric.','380','6'),('P-322AM','CAN','124','124','-','1450','55','380','Teikoku Electric.','380','10'),('P-322BM','CAN','23','124','-','1450','55','380','Teikoku Electric.','380','10'),('P-325AM','CAN','23','25','-','2900','11','380','Teikoku Electric.','380','7'),('P-325BM','CAN','2.4','25','-','2900','11','380','Teikoku Electric.','380','7'),('P-326AM','CAN','2.4','2.5','-','2900','0.75','380','Teikoku Electric.','380','6'),('P-326BM','CAN','-','2.5','-','2900','0.75','380','Teikoku Electric.','380','6'),('P-411AM','IM','18','20','-','2967','155','6000','SIEMENS','2.68','26.29'),('P-411BM','IM','18','20','-','2967','155','6000','SIEMENS','2.68','26.29'),('P-417AM','CAN','48','50','-','2900','22','380','Teikoku Electric.','2900','9'),('P-417BM','CAN','48','50','-','2900','22','380','Teikoku Electric.','2900','9'),('P-422AM','CAN','39','40','-','2900','18.5','380','Teikoku Electric.','2900','9'),('P-422BM','CAN','39','40','-','2900','18.5','380','Teikoku Electric.','2900','9'),('P-425AM','CAN','3.8','4','-','2900','1.5','380','Teikoku Electric.','2900','6'),('P-425BM','CAN','3.8','4','-','2900','1.5','380','Teikoku Electric.','2900','6'),('P-426AM','CAN','2.4','2.5','-','2900','0.75','380','Teikoku Electric.','2900','6'),('P-426BM','CAN','2.4','2.5','-','2900','0.75','380','Teikoku Electric.','2900','6'),('P-432M','CAN','23','25','-','2900','11','380','Teikoku Electric.','2900','7'),('P-435AM','CAN','33','36','-','2900','15','380','Teikoku Electric.','2900','7'),('P-435BM','CAN','33','36','-','2900','15','380','Teikoku Electric.','2900','7'),('P-442AM','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','2900','6'),('P-442BM','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','2900','6'),('P-445M','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','2900','6'),('P-452M','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','2900','6'),('P-455AM','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','2900','6'),('P-455BM','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','2900','6'),('P-456M','CAN','2.4','2.5','-','2810','0.75','380','Teikoku Electric.','-','6'),('P-511AM','IM','150','165','-','2970','90','380','SIEMENS','2.68','26.29'),('P-511BM','IM','150','165','-','2970','90','380','SIEMENS','2.68','26.29'),('P-517AM','CAN','13','12.5','-','2900','5.5','380','Teikoku Electric.','-','6'),('P-517BM','CAN','13','13','-','2900','5.5','380','Teikoku Electric.','-','6'),('P-522AM','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','-','6'),('P-522BM','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','-','6'),('P-525AM','CAN','5.5','5.5','-','2860','2.2','380','Teikoku Electric.','-','6'),('P-525BM','CAN','5.5','5.5','-','2860','2.2','380','Teikoku Electric.','-','6'),('P-532M','CAN','1.5','4','-','2900','1.5','380','Teikoku Electric.','-','6'),('P-535AM','CAN','10','10','-','2900','3.7','380','Teikoku Electric.','-','6'),('P-535BM','CAN','10','10','-','2900','3.7','380','Teikoku Electric.','-','6'),('P-542AM','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','-','6'),('P-542BM','CAN','5.5','5.5','-','2900','2.2','380','Teikoku Electric.','-','6'),('P-545M','CAN','3.8','4','-','2900','1.5','380','Teikoku Electric.','-','6'),('P-552M','CAN','3.8','4','-','2900','1.5','380','Teikoku Electric.','-','6'),('P-555AM','CAN','3.8','4','-','2900','1.5','380','Teikoku Electric.','-','6'),('P-555BM','CAN','3.8','4','-','2900','1.5','380','Teikoku Electric.','-','6'),('P-611AM','IM','128','144','-','2970','75','380','SIEMENS','2.68','26.29'),('P-611BM','IM','128','144','-','2970','75','380','SIEMENS','2.68','26.29'),('P-617AM','CAN','23','24','-','2900','11','380','Teikoku Electric.','-','7'),('P-617BM','CAN','23','24','-','2900','11','380','Teikoku Electric.','-','7'),('P-622AM','CAN','23','24','-','2900','11','380','Teikoku Electric.','-','7'),('P-622BM','CAN','23','24','-','2900','11','380','Teikoku Electric.','-','7'),('P-625AM','CAN','10','10','-','2900','3.7','380','Teikoku Electric.','-','6'),('P-625BM','CAN','10','10','-','2900','3.7','380','Teikoku Electric.','-','6'),('P-632AM','CAN','3.3','3.5','-','2870','1.1','380','Teikoku Electric.','-','6'),('P-632BM','CAN','3.3','3.5','-','2870','1.1','380','Teikoku Electric.','-','6'),('P-635AM','CAN','10','10','-','2910','3.7','380','Teikoku Electric.','-','6'),('P-635BM','CAN','10','10','-','2910','3.7','380','Teikoku Electric.','-','6'),('P-642AM','CAN','3.3','3.5','-','2870','1.1','380','Teikoku Electric.','-','6'),('P-642BM','CAN','3.3','3.5','-','2870','1.1','380','Teikoku Electric.','-','6'),('P-645AM','CAN','3.3','3.5','-','2870','1.1','380','Teikoku Electric.','-','6'),('P-645BM','CAN','3.3','3.5','-','2870','1.1','380','Teikoku Electric.','-','6'),('P-711AM','IM','53','60','-','2945','30','380','SIEMENS','2.68','26.29'),('P-711BM','IM','53','60','-','2945','30','380','SIEMENS','2.68','26.29'),('P-712M','CAN','10','10','-','2900','3.7','380','Teikoku Electric.','2900','6'),('P-721AM','CAN','126','144','-','2900','65','380','Teikoku Electric.','2900','11'),('P-721BM','CAN','126','144','-','2900','65','380','Teikoku Electric.','2900','11'),('P-722AM','CAN','126','144','-','2900','65','380','Teikoku Electric.','2900','11'),('P-722BM','CAN','126','144','-','2900','65','380','Teikoku Electric.','2900','11'),('P-723AM','CAN','126','144','-','2900','65','380','Teikoku Electric.','2900','11'),('P-723BM','CAN','126','144','-','2900','65','380','Teikoku Electric.','2900','11'),('P-724AM','CAN','17','18','-','2900','7.5','380','Teikoku Electric.','2900','6'),('P-724BM','CAN','17','18','-','2900','7.5','380','Teikoku Electric.','2900','6'),('P-725AM','CAN','17','17','-','2900','7.5','380','Teikoku Electric.','2900','6'),('P-725BM','CAN','17','17','-','2900','7.5','380','Teikoku Electric.','2900','6'),('P-726AM','CAN','17','17','-','2900','7.5','380','Teikoku Electric.','2900','6'),('P-726BM','CAN','17','17','-','2900','7.5','380','Teikoku Electric.','2900','6'),('P-751AM','IM','90','30','-','1490','260','6000','US Electric','1.10','10.79'),('P-751BM','-','-','-','-','-','4.4','380','ENGINE','-','6'),('P-751CM','-','-','-','-','-','4.4','380','ENGINE','-','6'),('P-752M','IM','43','50','-','2880','22','380','US Electric','0.70','6.87'),('P-757M','IM','-','-','-','2940','-','380','-','-','-'),('P-811M','CAN','2.6','4','-','2870','1.5','380','Teikoku Electric.','-','6'),('P-813BM','Subm','-','-','-','-','-','380','-','-','-'),('P-815M','IM','2.2','2.5','-','2850','1.1','380','SIEMENS','0.52','5.10'),('P-816M','IM','2.1','-','-','2885','3.7','380','SIEMENS','-','-'),('P-817M','IM','1.3','1.6','-','1390','0.55','380','SIEMENS','0.52','5.10'),('P-819M','IM','13','11.5','-','2910','5.5','380','SIEMENS','0.68','6.67'),('P-820M','IM','1.3','1.6','-','1390','0.55','380','SIEMENS','0.52','5.10'),('P-821M','IM','1.3','1.6','-','1390','0.55','380','SIEMENS','0.52','5.10'),('P-822M','IM','2.1','1.9','-','1390','0.75','380','SIEMENS','0.52','5.10'),('P-823M','Subm','2.1','1.9','-','1400','0.75','380','-','0.68','6.67'),('P-831AM','IM','2.6','3.5','-','2860','1.5','380','MEC','0.80','7.85'),('P-831BM','IM','2.6','3.5','-','2860','1.5','380','MEC','0.80','7.85'),('P-831CM','IM','-','-','-','-','11','380','-','-','7.85'),('P-832AM','IM','7.6','9','-','2900','3.7','380','MEC','0.80','7.85'),('P-832BM','IM','7.6','9','-','2900','3.7','380','MEC','0.80','7.85'),('P-832CM','IM','0.76','-','-','-','-','-','-','-','7.85'),('P-833M','IM','-','1.2','-','1375','0.37','380','SIEMENS','0.50','4.90'),('P-834M','IM','2.1','2.2','-','1410','0.75','380','ABB','0.50','4.90'),('P-835M','IM','0.44','0.8','-','1400','0.25','380','ABB','0.50','4.90'),('P-851AM','IM','22','22','-','1430','11','380','MEC','0.95','9.32'),('P-851BM','IM','-','-','-','2900','5.6','380','-','-','9.32'),('P-852AM','IM','7.6','9','-','1430','3.7','380','MEC','0.50','4.90'),('P-852BM','IM','7.6','9','-','1430','3.7','380','MEC','0.50','4.90'),('P-853M','IM','13','12.5','-','2910','5.5','380','MEC','0.50','4.90'),('P-854AM','IM','5.5','5.3','-','1420','2.2','380','MEC','1.50','14.72'),('P-854BM','IM','5.5','5.3','-','1420','2.2','380','MEC','1.50','14.72'),('P-911AM','IM','-','-','-','1450','5.6','380','-','-','-'),('P-911BM','IM','-','-','-','1440','3.7','380','-','-','-'),('P-921AM','IM','204.4','180','-','2980','110','380','SIEMENS','1.40','13.73'),('P-921BM','IM','204.4','180','-','2980','110','380','SIEMENS','1.40','13.73'),('P-922AM','CAN','39','39.5','-','2900','18.5','380','Teikoku Electric.','-','9'),('P-922BM','CAN','39','39.5','-','2900','18.5','380','Teikoku Electric.','-','9'),('P-923M','IM','55','-','-','2925','18.5','380','TECCO','-','-'),('P-925AM','IM','0.76','1.2','-','1400','0.37','380','TECCO','0.52','5.10'),('P-925BM','IM','0.76','1.2','-','1400','0.37','380','TECCO','0.52','5.10'),('P-926AM','IM','0.44','1','-','1400','0.25','380','ABB','0.52','5.10'),('P-926BM','IM','0.44','1','-','1400','0.25','380','ABB','0.52','5.10'),('P-930AM','IM','69','-','-','2940','37','380','YASKAWA','-','14.00'),('P-930BM','IM','69','-','-','2940','37','380','YASKAWA','-','14.00'),('P-930CM','IM','-','-','-','-','-','380','-','-','-'),('P-931AM','IM','53','55','-','2945','30','380','SIEMENS','0.92','9.03'),('P-931BM','IM','53','55','-','2945','30','380','SIEMENS','0.92','9.03'),('P-932AM','IM','21.4','24','-','2915','11','380','SIEMENS','0.89','8.73'),('P-932BM','IM','21.4','24','-','2915','11','380','SIEMENS','0.89','8.73'),('P-934AM','CAN','33','34','-','2920','15','380','Teikoku Electric.','-','9'),('P-934BM','CAN','33','34','-','2920','15','380','Teikoku Electric.','-','9'),('P-935AM','IM','16','21','-','2850','11','380','BALDOR','0.89','8.73'),('P-935BM','IM','16','21','-','2850','11','380','BALDOR','0.89','8.73'),('P-938AM','IM','3.4','3','-','2870','1.5','380','SIEMENS','1.00','9.81'),('P-938BM','IM','3.4','3','-','2870','1.5','380','SIEMENS','1.00','9.81'),('P-939AM','IM','16','23','-','2850','11','380','BALDOR','0.89','8.73'),('P-939BM','IM','16','22','-','2850','11','380','BALDOR','0.89','8.73'),('P-941AM','IM','35','35','-','987','285','6000','SIEMENS','1.45','14.22'),('P-941BM','IM','35','35','-','987','285','6000','SIEMENS','1.45','14.22'),('P-943AM','IM','0.7','-','-','1380','0.36','380','Leroy Somer','0.72','7.06'),('P-943BM','IM','0.7','-','-','1380','0.36','380','Leroy Somer','0.72','7.06'),('P-944AM','IM','0.7','-','-','1430','0.36','380','Leroy Somer','0.72','7.06'),('P-944BM','IM','0.7','-','-','1430','0.36','380','Leroy Somer','0.72','7.06'),('P-945AM','IM','0.7','-','-','1380','0.18','380','Leroy Somer','0.72','7.06'),('P-945BM','IM','0.7','-','-','1380','0.18','380','Leroy Somer','0.72','7.06'),('P-946AM','IM','29.9','32','-','2930','15','380','SIEMENS','0.89','8.73'),('P-946BM','IM','29.9','32','-','2930','15','380','SIEMENS','0.89','8.73'),('P-961AM','IM','4.7','14','-','2910','2.2','380','TECCO','0.72','7.06'),('P-961BM','IM','4.7','13','-','2910','2.2','380','TECCO','0.72','7.06'),('P-961CM','-','-','-','-','-','-','-','-','-','7.06'),('P-963AM','IM','2.5','2.5','-','2870','1.1','380','SIEMENS','0.68','6.67'),('P-963BM','IM','4.7','5','-','2870','2.2','380','SIEMENS','0.68','6.67'),('P-973M','IM','4.7','5','-','2870','2.2','380','SIEMENS','0.80','7.85'),('P-974AM','IM','6.1','6.5','-','2855','3','380','SIEMENS','1.10','10.79'),('P-974BM','IM','6.1','6.5','-','2855','3','380','SIEMENS','1.10','10.79'),('P-982AM','CAN','16','18','-','2900','6.6','380','Teikoku Electric.','-','6'),('P-982BM','CAN','16','18','-','2900','6.6','380','Teikoku Electric.','-','6'),('P-985M','CAN','3.8','4','-','1430','1.5','380','Teikoku Electric.','-','6'),('S-831M','IM','5.5','5','-','1430','2.2','380','YASKAWA','-','6.00'),('U-941AM','IM','204.4','-','-','2950','110','380','TRAIN EMA','-','6.00'),('U-941BM','IM','-','-','-','-','-','380','-','-','-');
/*!40000 ALTER TABLE `mac` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-01-30 13:52:33