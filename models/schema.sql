DROP DATABASE IF EXISTS ghosted_by;

CREATE DATABASE ghosted_by;
USE ghosted_by;

CREATE TABLE `ghostedby` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `glassdoor_id` VARCHAR( 255) NOT NULL,
  `company_name` VARCHAR( 255 ) NOT NULL,
  `logo` VARCHAR( 255 ) NOT NULL,
  `ghosted_count` VARCHAR( 255 ) NOT NULL,
  `time_stamp` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);