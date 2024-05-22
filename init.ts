import pool from "./src/api/v1/config/db.connection";
import fs from "fs";
import path from 'path';
import csv from 'csv-parser';
import dotenv from 'dotenv';
var sql = fs.readFileSync("./data/init.sql", "utf8");
dotenv.config();

const init = async () => {
  try {
    await pool.query(sql);
    console.log("Tables created");
  } catch (error) {
    console.log(error);
  }
  try{
    await start();
  }catch (error) {
    console.log(error);
  }
};

interface CSVConfig {
  filePath: string;
  tableName: string;
  columns: string[];
}

const csvConfigs: { [key: string]: CSVConfig } = {
  circuits: {
    filePath: path.join(__dirname, 'data', 'csv', 'circuits.csv'),
    tableName: 'circuits',
    columns: ['circuitId', 'circuitRef', 'name', 'location', 'country', 'lat', 'lng', 'alt', 'url']
  },
  constructor_results: {
    filePath: path.join(__dirname, 'data', 'csv', 'constructor_results.csv'),
    tableName: 'constructor_results',
    columns: ['constructorResultsId', 'raceId', 'constructorId', 'points', 'status']
  },
  constructor_standings: {
    filePath: path.join(__dirname, 'data', 'csv', 'constructor_standings.csv'),
    tableName: 'constructor_standings',
    columns: ['constructorStandingsId', 'raceId', 'constructorId', 'points', 'position', 'positionText', 'wins']
  },
  constructors: {
    filePath: path.join(__dirname, 'data', 'csv', 'constructors.csv'),
    tableName: 'constructors',
    columns: ['constructorId', 'constructorRef', 'name', 'nationality', 'url']
  },
  driver_standings: {
    filePath: path.join(__dirname, 'data', 'csv', 'driver_standings.csv'),
    tableName: 'driver_standings',
    columns: ['driverStandingsId', 'raceId', 'driverId', 'points', 'position', 'positionText', 'wins']
  },
  drivers: {
    filePath: path.join(__dirname, 'data', 'csv', 'drivers.csv'),
    tableName: 'drivers',
    columns: ['driverId', 'driverRef', 'number', 'code', 'forename', 'surname', 'dob', 'nationality', 'url']
  },
  lap_times: {
    filePath: path.join(__dirname, 'data', 'csv', 'lap_times.csv'),
    tableName: 'lap_times',
    columns: ['raceId', 'driverId', 'lap', 'position', 'time', 'milliseconds']
  },
  pit_stops: {
    filePath: path.join(__dirname, 'data', 'csv', 'pit_stops.csv'),
    tableName: 'pit_stops',
    columns: ['raceId', 'driverId', 'stop', 'lap', 'time', 'duration', 'milliseconds']
  },
  qualifying: {
    filePath: path.join(__dirname, 'data', 'csv', 'qualifying.csv'),
    tableName: 'qualifying',
    columns: ['qualifyId', 'raceId', 'driverId', 'constructorId', 'number', 'position', 'q1', 'q2', 'q3']
  }, 
  races : {
    filePath: path.join(__dirname, 'data', 'csv', 'races.csv'),
    tableName: 'races',
    columns: ['raceId', 'year', 'round', 'circuitId', 'name', 'date', 'time', 'url', 'fp1_date', 'fp1_time', 'fp2_date', 'fp2_time', 'fp3_date', 'fp3_time', 'quali_date', 'quali_time', 'sprint_date', 'sprint_time']
  }, 
  results : {
    filePath: path.join(__dirname, 'data', 'csv', 'results.csv'),
    tableName: 'results',
    columns : ['resultId', 'raceId', 'driverId', 'constructorId', 'number', 'grid', 'position', 'positionText', 'positionOrder', 'points', 'laps', 'time', 'milliseconds', 'fastestLap', 'rank', 'fastestLapTime', 'fastestLapSpeed', 'statusId']
  },
  seasons : {
    filePath: path.join(__dirname, 'data', 'csv', 'seasons.csv'),
    tableName: 'seasons',
    columns: ['year', 'url']
  },
  status : {
    filePath: path.join(__dirname, 'data', 'csv', 'status.csv'),
    tableName: 'status',
    columns: ['statusId', 'status']
  },
};

const insertCSVData = async (config: CSVConfig) => {
  const results: any[] = [];
  const filePath = config.filePath;

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', async () => {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        for (const row of results) {
          const values = config.columns.map(column => row[column] == '\\N' ? null : row[column] );
          const placeholders = config.columns.map((_, index) => `$${index + 1}`).join(', ');
          const query = `INSERT INTO ${config.tableName} (${config.columns.join(', ')}) VALUES (${placeholders})`;
          await client.query(query, values);
        }
        await client.query('COMMIT');
        console.log(`${config.tableName} data inserted successfully`);
      } catch (error) {
        await client.query('ROLLBACK');
        console.error(`Error inserting ${config.tableName} data:`, error);
      } finally {
        client.release();
      }
    });
};

const start = async () => {
  try {
    for (const key in csvConfigs) {
      await insertCSVData(csvConfigs[key]);
    }
  } catch (error) {
    console.error('Error in start function:', error);
  }
};
init();




