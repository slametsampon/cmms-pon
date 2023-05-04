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
-- Table structure for table `lt`
--

DROP TABLE IF EXISTS `lt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lt` (
  `Tagnumber` varchar(16) NOT NULL DEFAULT '',
  `PressNorm` varchar(15) DEFAULT NULL,
  `TempNorm` varchar(15) DEFAULT NULL,
  `SensorType` varchar(50) DEFAULT NULL,
  `SensorModel` varchar(50) DEFAULT NULL,
  `MFG` varchar(25) DEFAULT NULL,
  `RangeLow` varchar(10) DEFAULT NULL,
  `RangeHigh` varchar(10) DEFAULT NULL,
  `RangeUnit` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Tagnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lt`
--

LOCK TABLES `lt` WRITE;
/*!40000 ALTER TABLE `lt` DISABLE KEYS */;
INSERT INTO `lt` VALUES ('LA-0291','-','-','-','-','-','-','-','-'),('LA-0292','-','-','-','-','-','-','-','-'),('LA-9120','-','-','LSW','-','-','-','-','-'),('LA-9121','-','-','-','-','-','-','-','-'),('LC-9119','-','-','-','-','-','-','-','-'),('LI-0102','-','-','DISP','NQI310Z-11H41XXII-8','Yamatake Honeywell','0','800','M'),('LI-0201','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','8','M'),('LI-0217','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','3.4','M'),('LI-0258','-','-','PRESS GAGE','-','-','0','500','M'),('LI-0259','-','-','TOP MOUNT ','-','-','0','2.1','mm'),('LI-1001','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','2300','mm'),('LI-1101','-','-','DPT','JTE929-1AB22J01A-MUAP1-XX','Yamatake Honeywell','0','9400','mm'),('LI-1107','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','6400','mm'),('LI-1151','-','-','PRESS. GAGE','-','-','0','8000','mmH2O'),('LI-1302','-','-','DISP','NQI310Z-17N4203II-8','Yamatake Honeywell','0','300','mm'),('LI-1403','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','6700','mm'),('LI-1451','-','-','PERSS. GAGE','-','-','0','8000','mmH2O'),('LI-1501','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LI-1604','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','6400','mm'),('LI-1605','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','2600','mm'),('LI-1606','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','6300','mm'),('LI-1651','-','-','PRESS. GAGE','-','-','0','8000','mmH2O'),('LI-1652','-','-','PRESS. GAGE','-','-','0','8000','mmH2O'),('LI-2103','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','5500','mm'),('LI-2151','-','-','PRESS. GAGE','-','-','0','7000','mmH2O'),('LI-2503','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','3400','mm'),('LI-2551','-','-','PRESS. GAGE','-','-','0','5000','mm'),('LI-3202','-','-','DISP','NQI310Z-17N3210II-8','Yamatake Honeywell','0','1','mm'),('LI-4107','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','7.3','M'),('LI-4155','-','-','PRESS GAGE','-','-','0','9','M'),('LI-5104','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','4','M'),('LI-5154','-','-','PRESS GAGE','-','-','0','6','M'),('LI-6104','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','3.5','M'),('LI-6154','-','-','DPT','-','-','0','5','M'),('LI-7101','-','-','Tank gage','TGM-4620E','Sakura Endress','0','18000','mm'),('LI-7102','-','-','Tank gage','TGM-4620E','Sakura Endress','0','18000','mm'),('LI-7103','-','-','Tank gage','TGM-4620E','Sakura Endress','0','18000','mm'),('LI-7104','-','-','Tank gage','TGM-4620E','Sakura Endress','0','18000','mm'),('LI-7106','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','18000','mm'),('LI-7107','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','18000','mm'),('LI-7108','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','18000','mm'),('LI-7109','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','18000','mm'),('LI-7201','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','18000','mm'),('LI-7202','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','26000','mm'),('LI-7203','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','14900','mm'),('LI-7204','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','14900','mm'),('LI-7205','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','13000','mm'),('LI-7206','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','13000','mm'),('LI-7251','-','-','PRESS GAGE','-','-','0','26400','mm'),('LI-7252','-','-','PRESS GAGE','-','-','0','26400','mm'),('LI-7253','-','-','PRESS GAGE','-','-','0','15200','mm'),('LI-7254','-','-','PRESS GAGE','-','-','0','15200','mm'),('LI-7255','-','-','PRESS GAGE','-','-','0','13300','mm'),('LI-7256','-','-','PRESS GAGE','-','-','0','13300','mm'),('LI-8101','-','-','DPT','JTF929-E1RAA2J00-MWAN2-XX','Yamatake Honeywell','0','7','M'),('LI-8102','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','4.4','M'),('LI-8103','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','4.4','mm'),('LI-8104','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','4.4','mm'),('LI-8201','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','4.4','mm'),('LI-8202','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','4.4','mm'),('LI-8301','-','-','DPT','JTF929-E1RAA2J00-MWAN2-XX','Yamatake Honeywell','0','3.3','mm'),('LI-8302','-','-','DPT','JTF929-E1RAA2J00-MWAN2-XX','Yamatake Honeywell','0','6000','mm'),('LI-9111','-','-','DPT','EJA110A-DMS4A-92DA/FU1/D4','Yokogawa','0','10000','mmH2O'),('LI-9112','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1000','mmH2O'),('LI-9113','-','-','DPT','EJA110A-DMS4A-92DA/FU1/D4','Yokogawa','0','10000','mmH2O'),('LI-9114','-','-','DPT','EJA110A-DMS4A-92DA/FU1/D4','Yokogawa','0','10000','mmH2O'),('LI-9211','-','-','-','-','-','0','0','-'),('LI-9212','-','-','-','-','-','0','0','-'),('LI-9252','-','-','PRESS GAGE','-','-','0','3.3','mm'),('LI-9301','-','-','DPT','JTD930-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','15.4','mm'),('LI-9302','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','4.2','mm'),('LI-9303','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','6','mm'),('LI-9304','-','-','DPT','EJA110A-DMS4A-92DA/FU1/D4','Yokogawa','0','5970','mmH2O'),('LI-9351','-','-','PRESS GAGE','-','-','0','15.7','mm'),('LI-9352','-','-','PRESS GAGE','-','-','0','4.6','mmH2O'),('LI-9353','-','-','PRESS GAGE','-','-','0','6.3','mm'),('LI-9405','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','2.4','mm'),('LI-9451','-','-','PRESS GAGE','-','-','0','2600','mm'),('LI-9601','-','-','DISP','NQI310Z-11N3203II-8','Yamatake Honeywell','0','300','M'),('LI-9602A','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','7.4','mm'),('LI-9602B','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','7.4','mm'),('LI-9652 A','-','-','PRESS GAGE','-','-','0','8.4','mm'),('LI-9652 B','-','-','PRESS GAGE','-','-','0','8.4','mm'),('LI-9921','-','-','DPT','STD920-E1H-00000-PWD6-C7E9','Yamatake','0','10000','mmH2O'),('LICA-9331-1','0.15','33','DPT','692','Huba Control','0','2000','mmH2O'),('LS-0103','-','-','Float type Level Switch','CS-5613E','Sakura Endress','0','0','M'),('LS-0202','-','-','Float type Level Switch','MPC-2211E','Sakura Endress','0','0','M'),('LS-0203','-','-','Float type Level Switch','MPC-2211E','Sakura Endress','0','0','M'),('LS-0206','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','M'),('LS-0207','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','M'),('LS-0209','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','M'),('LS-0210','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','M'),('LS-0212','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','M'),('LS-0213','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','M'),('LS-0214','-','-','LSW','-','-','0','0','-'),('LS-0219','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','M'),('LS-0220','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','-'),('LS-0222','-','-','Float type Level Switch','CS-5613E','Sakura Endress','0','0','-'),('LS-0231','20.4','40','-','FR-6092S','Tokyo Keiso Co. Ltd','0','350','mm'),('LS-0232','13.9','40','-','FR-6092S','Tokyo Keiso Co. Ltd','0','0','-'),('LS-0233','ATM','55','-','FR-6091S','Tokyo Keiso Co. Ltd','0','0','-'),('LS-0241','4.9','40','SWITCH','FR-6091S','Tokyo Keiso Co. Ltd','0','350','mm'),('LS-0242','16','40','SWITCH','FR-6092S','Tokyo Keiso Co. Ltd','0','350','mm'),('LS-0243','ATM','55','SWITCH','FR-6091S','Tokyo Keiso Co. Ltd','0','0','-'),('LS-1106','-','-','-','-','-','0','0','mm'),('LS-1521','ATM','55','-','-','-','180','0','mm'),('LS-2304','-','-','-','-','-','0','0','mm'),('LS-2401','-','-','-','-','-','0','2','mm'),('LS-306','-','-','SWITCH','-','-','-','-','-'),('LS-4108','-','-','Float type Level Switch','CS-5613E','Sakura Endress','0','0','M'),('LS-4121','ATM','55','--','FR-6091S','Tokyo Keiso Co. Ltd','0','0','M'),('LS-7501B','-','-','LSW','-','-','0','13300','mm'),('LS-7501C','-','-','LSW','-','-','0','0','mm'),('LS-8303','-','-','LSW','-','-','0','0','-'),('LS-8304 A','-','-','LSW','-','-','0','0','-'),('LS-8304B','-','-','LSW','-','-','0','0','-'),('LS-8502','ATM','80','SWITCH','KRV-1F','Nohken inc','-','-','-'),('LS-8503','1202mmH2O','89','SWITCH','KRV-1F','Nohken inc','-','-','-'),('LS-8504','1202mmH2O','89','SWITCH','KRV-1F','Nohken inc','-','-','-'),('LS-9205','-','-','-','-','-','0','0','-'),('LS-9206','-','-','Float type Level Switch','CS-5613E','Sakura Endress','0','0','-'),('LS-9211','-','-','SWITCH','-','-','-','-','-'),('LS-9212A','-','-','SWITCH','-','-','-','-','-'),('LS-9331','-','-','LSW','-','-','0','0','-'),('LS-9381','-','-','-','-','-','0','0','-'),('LS-9402','-','-','-','-','-','0','0','-'),('LS-9403','-','-','-','-','-','0','0','-'),('LS-9404','-','-','-','-','-','0','0','-'),('LS-9502','-','-','Float type Level Switch','MPC-2201E','Sakura Endress','0','0','-'),('LS-9604 A','-','-','TOP MOUNT  ','-','-','0','1.4','mm'),('LS-9604 B','-','-','TOP MOUNT  ','-','-','0','1.4','mm'),('LS-9701','-','-','TOP MOUNT ','-','-','0','1.5','mm'),('LSA-9331-2','ATM','70','FLOAT LS','SFA-50','Goema Pte Ltd','-','-','-'),('LSA-9331-3','-','-','FLOAT LS','SFA-50','Goema Pte Ltd','-','-','-'),('LSA-9331-4','ATM','40','DIAPRAGM  PS','NIS-3','Goema Pte Ltd','-','-','-'),('LSA-9331-5','ATM','40','DIAPRAGM  PS','NIS-4','Goema Pte Ltd','-','-','-'),('LT-0101','-','-','-','-','Yokogawa','0','800','M'),('LT-0106','-','-','DISP','NQI310Z-17N3105II-8','Yamatake Honeywell','0','500','M'),('LT-0204','-','-','DISP','NQI310Z-11N3103II-8','Yamatake Honeywell','0','300','M'),('LT-0205','-','-','DISP','NQI310Z-17N31XXII-8','Yamatake Honeywell','0','800','M'),('LT-0208','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','3.35','M'),('LT-0211','-','-','DISP','NQI310Z-11N31XXII-8','Yamatake Honeywell','0','800','M'),('LT-0215','-','-','DISP','NQI310Z-11N31XXII-8','Yamatake Honeywell','0','0','M'),('LT-0221','-','-','DISP','NQI310Z-11N4105II-8','Yamatake Honeywell','0','500','mm'),('LT-0321','-','-','electronic','12222-058','Masoneilan','0','356','mm'),('LT-0322','-','-','electronic','12222-058','Masoneilan','0','356','mm'),('LT-1002','-','-','DPT','JTE929-1AB22J015-MUAP1-XX','Yamatake Honeywell','0','1400','mm'),('LT-1102','-','-','DPT','JTE929-1AB22J015-MUAP1-XX','Yamatake Honeywell','0','1000','mm'),('LT-1103','-','-','DISP','NQI310Z-17N4205II-8','Yamatake Honeywell','0','500','mm'),('LT-1104','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1500','mm'),('LT-1201','-','-','DPT','JTE929-1AB22J015-MUAP1-XX','Yamatake Honeywell','0','3200','mm'),('LT-1202','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','4600','mm'),('LT-1301','-','-','DPT','JTE929-1AB22J015-MUAP1-XX','Yamatake Honeywell','0','4000','mm'),('LT-1401A','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1000','mm'),('LT-1401B','-','-','-','-','-','0','0','mm'),('LT-1402','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','900','mm'),('LT-1502','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-1601','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','2200','mm'),('LT-1602','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','1800','mm'),('LT-1603','-','-','DISP','NQI320Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-1607','-','-','DISP','KFLB12Z-3217N3203B1-7','Yamatake Honeywell','0','300','mm'),('LT-2101','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-2102','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-2201','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-2202','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-2203','-','-','DISP','NQI320Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-2302','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-2303 A','-','-','DPT','JTR926Z-1A322JXX5-MUAN2-XX','Yamatake Honeywell','0','1000','mm'),('LT-2303 B','-','-','DPT','JTR926Z-1A322JXX5-MUAN2-XX','Yamatake Honeywell','0','1000','mm'),('LT-2402','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','1100','mm'),('LT-2403','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','1100','mm'),('LT-2501','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-2502','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-3102','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1300','mm'),('LT-3103','-','-','DISP','NQI310Z-17N3210II-8','Yamatake Honeywell','0','1000','mm'),('LT-3201','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-3203','-','-','DISP','NQI320Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-4101','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','1.5','M'),('LT-4102','-','-','DPT','JTE929-1AC22J015-MUAP1-XX','Yamatake Honeywell','0','1','M'),('LT-4103','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','3.8','M'),('LT-4105','-','-','DPT','JTE929-1AC22J015-MUAP1-XX','Yamatake Honeywell','0','1','M'),('LT-4201','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','3','M'),('LT-4202','-','-','DISP','NQI310Z-17N3205II-8','Yamatake Honeywell','0','0.5','M'),('LT-4203','-','-','DISP','NQI320Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-4301','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1.8','M'),('LT-4302','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','0.8','M'),('LT-4401','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1.4','M'),('LT-4402','-','-','DISP','NQI320Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-4501','-','-','DISP','NQI310Z-17N3210II-8','Yamatake Honeywell','0','1','M'),('LT-4502','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-4503','-','-','DISP','NQI320Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-5101','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','0.8','M'),('LT-5102','-','-','DPT','JTE929-1AC22J015-MUAP1-XX','Yamatake Honeywell','0','1','M'),('LT-5103','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','2.1','M'),('LT-5201','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1.2','M'),('LT-5202','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-5301','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1.2','M'),('LT-5302','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-5401','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','0.8','M'),('LT-5402','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-5501','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1','M'),('LT-5502','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-6101','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','0.8','M'),('LT-6102','-','-','DPT','JTE929-1AC22J015-MUAP1-XX','Yamatake Honeywell','0','1','M'),('LT-6103','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','1.8','M'),('LT-6201','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1.4','M'),('LT-6202','-','-','DPT','JTE929-1AA22J015-MUAP1-XX','Yamatake Honeywell','0','1','M'),('LT-6203','-','-','DISP','NQI320Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-6301','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1.2','M'),('LT-6302','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-6401','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','0.8','M'),('LT-6402','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','0.3','M'),('LT-7105','-','-','DISP','NQI310Z-11N4205II-8','Yamatake Honeywell','0','500','mm'),('LT-8501','-','-','DPT','-','-','0','1500','mmH2O'),('LT-8511','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1.4','mm'),('LT-9201','-','-','DISP','NQI310Z-11N32XXII-8','Yamatake Honeywell','0','800','mm'),('LT-9202','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','3000','mm'),('LT-9203','-','-','DISP','NQI310Z-11N32XXII-8','Yamatake Honeywell','0','800','mm'),('LT-9211','-','-','DPT','-','-','0','500','mmH2O'),('LT-9401','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','5','mm'),('LT-9503','-','-','DISP','NQI310Z-11N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-9603 A','-','-','DISP','KFLB12Z-3211N3203BI-7','Yamatake Honeywell','0','300','mm'),('LT-9603 B','-','-','DISP','KFLB12Z-3211N3203BI-7','Yamatake Honeywell','0','300','mm'),('LT-9702','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','1.5','mm'),('LT-9801','-','-','DPT','JTD920-E1R-00000-MWAN2-XX','Yamatake Honeywell','0','900','mm'),('LT-9802','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LT-9803','-','-','DISP','NQI310Z-17N3203II-8','Yamatake Honeywell','0','300','mm'),('LX-8102','-','-','ROTA METER','CP-221-1A0','Tokyo Keiso Co. Ltd','10','100','NL/h'),('LX-8103','-','-','ROTA METER','CP-221-1A0','Tokyo Keiso Co. Ltd','10','100','NL/h'),('LX-8104','-','-','ROTA METER','CP-221-1A0','Tokyo Keiso Co. Ltd','10','100','NL/h'),('LX-8201','-','-','ROTA METER','CP-221-1A0','Tokyo Keiso Co. Ltd','10','100','NL/h'),('LX-8202','-','-','ROTA METER','CP-221-1A0','Tokyo Keiso Co. Ltd','10','100','NL/h'),('LX-9401','-','-','ROTAMETER','CP-221-1A0','Tokyo Keiso Co. Ltd','10','100','NL/h'),('LX-9702','-','-','ROTAMETER','CP-221-1A0','Tokyo Keiso Co. Ltd','10','100','NL/h');
/*!40000 ALTER TABLE `lt` ENABLE KEYS */;
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