DROP TABLE IF EXISTS "users";

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS "circuits";

CREATE TABLE "circuits" (
  "circuitid" int NOT NULL,
  "circuitref" varchar(256) NOT NULL DEFAULT '',
  "name" varchar(255) NOT NULL DEFAULT '',
  "location" varchar(255) DEFAULT NULL,
  "country" varchar(255) DEFAULT NULL,
  "lat" float DEFAULT NULL,
  "lng" float DEFAULT NULL,
  "alt" int DEFAULT NULL,
  "url" varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY ("circuitid"),
  UNIQUE("url")
);

DROP TABLE IF EXISTS constructor_results;

CREATE TABLE constructor_results (
  "constructorresultsid" int NOT NULL,
  "raceid" int NOT NULL DEFAULT '0',
  "constructorid" int NOT NULL DEFAULT '0',
  "points" float DEFAULT NULL,
  "status" varchar(255) DEFAULT NULL,
  PRIMARY KEY ("constructorresultsid")
);

DROP TABLE IF EXISTS "constructor_standings";

CREATE TABLE "constructor_standings" (
  "constructorstandingsid" int NOT NULL,
  "raceid" int NOT NULL DEFAULT '0',
  "constructorid" int NOT NULL DEFAULT '0',
  "points" float NOT NULL DEFAULT '0',
  "position" int DEFAULT NULL,
  "positiontext" varchar(255) DEFAULT NULL,
  "wins" int NOT NULL DEFAULT '0',
  PRIMARY KEY ("constructorstandingsid")
);


DROP TABLE IF EXISTS "constructors";

CREATE TABLE "constructors" (
  "constructorid" int NOT NULL,
  "constructorref" varchar(255) NOT NULL DEFAULT '',
  "name" varchar(255) NOT NULL DEFAULT '',
  "nationality" varchar(255) DEFAULT NULL,
  "url" varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY ("constructorid"),
  UNIQUE("name")
);


DROP TABLE IF EXISTS driver_standings;

CREATE TABLE driver_standings (
  "driverstandingsid" int NOT NULL,
  "raceid" int NOT NULL DEFAULT '0',
  "driverid" int NOT NULL DEFAULT '0',
  "points" float NOT NULL DEFAULT '0',
  "position" int DEFAULT NULL,
  "positiontext" varchar(255) DEFAULT NULL,
  "wins" int NOT NULL DEFAULT '0',
  PRIMARY KEY ("driverstandingsid")
);


DROP TABLE IF EXISTS "drivers";

CREATE TABLE "drivers" (
  "driverid" int NOT NULL,
  "driverref" varchar(255) NOT NULL DEFAULT '',
  "number" int DEFAULT NULL,
  "code" varchar(3) DEFAULT NULL,
  "forename" varchar(255) NOT NULL DEFAULT '',
  "surname" varchar(255) NOT NULL DEFAULT '',
  "dob" date DEFAULT NULL,
  "nationality" varchar(255) DEFAULT NULL,
  "url" varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY ("driverid"),
  UNIQUE("url")
);


DROP TABLE IF EXISTS "lap_times";

CREATE TABLE "lap_times" (
  "raceid" int NOT NULL,
  "driverid" int NOT NULL,
  "lap" int NOT NULL,
  "position" int DEFAULT NULL,
  "time" varchar(255) DEFAULT NULL,
  "milliseconds" int DEFAULT NULL,
  PRIMARY KEY ("raceid","driverid","lap")
);



DROP TABLE IF EXISTS "pit_stops";

CREATE TABLE "pit_stops" (
  "raceid" int NOT NULL,
  "driverid" int NOT NULL,
  "stop" int NOT NULL,
  "lap" int NOT NULL,
  "time" time NOT NULL,
  "duration" varchar(255) DEFAULT NULL,
  "milliseconds" int DEFAULT NULL,
  PRIMARY KEY ("raceid","driverid","stop")
);



DROP TABLE IF EXISTS "qualifying";

CREATE TABLE "qualifying" (
  "qualifyid" int NOT NULL,
  "raceid" int NOT NULL DEFAULT '0',
  "driverid" int NOT NULL DEFAULT '0',
  "constructorid" int NOT NULL DEFAULT '0',
  "number" int NOT NULL DEFAULT '0',
  "position" int DEFAULT NULL,
  "q1" varchar(255) DEFAULT NULL,
  "q2" varchar(255) DEFAULT NULL,
  "q3" varchar(255) DEFAULT NULL,
  PRIMARY KEY ("qualifyid")
);


DROP TABLE IF EXISTS "races";

CREATE TABLE "races" (
  "raceid" int NOT NULL,
  "year" int NOT NULL DEFAULT '0',
  "round" int NOT NULL DEFAULT '0',
  "circuitid" int NOT NULL DEFAULT '0',
  "name" varchar(255) NOT NULL DEFAULT '',
  "date" date NOT NULL DEFAULT '1949-01-01',
  "time" time DEFAULT NULL,
  "url" varchar(255) DEFAULT NULL,
  "fp1_date" date DEFAULT NULL,
  "fp1_time" time DEFAULT NULL,
  "fp2_date" date DEFAULT NULL,
  "fp2_time" time DEFAULT NULL,
  "fp3_date" date DEFAULT NULL,
  "fp3_time" time DEFAULT NULL,
  "quali_date" date DEFAULT NULL,
  "quali_time" time DEFAULT NULL,
  "sprint_date" date DEFAULT NULL,
  "sprint_time" time DEFAULT NULL,

  PRIMARY KEY ("raceid"),
  UNIQUE("url")
);


DROP TABLE IF EXISTS "results";

CREATE TABLE "results" (
  "resultid" int NOT NULL,
  "raceid" int NOT NULL DEFAULT '0',
  "driverid" int NOT NULL DEFAULT '0',
  "constructorid" int NOT NULL DEFAULT '0',
  "number" int DEFAULT NULL,
  "grid" int NOT NULL DEFAULT '0',
  "position" int DEFAULT NULL,
  "positiontext" varchar(255) NOT NULL DEFAULT '',
  "positionorder" int NOT NULL DEFAULT '0',
  "points" float NOT NULL DEFAULT '0',
  "laps" int NOT NULL DEFAULT '0',
  "time" varchar(255) DEFAULT NULL,
  "milliseconds" int DEFAULT NULL,
  "fastestlap" int DEFAULT NULL,
  "rank" int DEFAULT '0',
  "fastestlaptime" varchar(255) DEFAULT NULL,
  "fastestlapspeed" varchar(255) DEFAULT NULL,
  "statusid" int NOT NULL DEFAULT '0',
  PRIMARY KEY ("resultid")
);
DROP TABLE IF EXISTS "sprint_results";

CREATE TABLE sprint_results (
    "resultid" int NOT NULL,
    "raceid" int NOT NULL,
    "driverid" int NOT NULL,
    "constructorid" int NOT NULL,
    "number" int,
    "grid" int NOT NULL,
    "position" int,
    "positiontext" varchar(255),
    "positionorder" int NOT NULL,
    "points" int NOT NULL,
    "laps" int NOT NULL,
    "time" varchar(255),
    "milliseconds" int,
    "fastestlap" int,
    "fastestlaptime" varchar(255),
    "statusid" int NOT NULL,
    PRIMARY KEY ("resultid")
);

DROP TABLE IF EXISTS "seasons";

CREATE TABLE "seasons" (
  "year" int NOT NULL DEFAULT '0',
  "url" varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY ("year"),
  UNIQUE("url")
);


DROP TABLE IF EXISTS "status";

CREATE TABLE "status" (
  "statusid" int NOT NULL,
  "status" varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY ("statusid")
);
