import './nifty50.scss';
import Navbar from '../../components/navbar/navbar';
import CAL from '../../CAL.csv';
import { useEffect, useState } from 'react';
import csv from 'csvtojson';
import { ResponsiveContainer, LineChart, XAxis, YAxis } from 'recharts';

function Nifty() {
  const [data, setData] = useState([]);
  const [points, setPoints] = useState([]);
  const points1 = [
    { date: '20-09-2003', Close: 2 },
    { date: '20-09-2003', Close: 2 },
    { date: '20-09-2003', Close: 2 }

  ];

  useEffect(() => {
    fetch(`${CAL}`)
      .then(response => response.text())
      .then(csvString => {
        const lines = csvString.split('\n');

        const headers = lines[0].split(',');
        const jsonData = lines
          .slice(1)
          .map(line => {
            const values = line.split(',');
            return headers.reduce((obj, header, index) => {
              obj[header] = values[index];
              return obj;
            }, {});
          });
        let length = jsonData.length;
        jsonData = jsonData.slice(length - 61, length - 1); // Update jsonData assignment
        setData(jsonData);
        console.log(jsonData[10036]);
      })
      .catch(error => {
        console.error('Error fetching CSV data:', error);
      });
  }, []);

  useEffect(() => {
    let temp = [];
    let length = data.length;
    for (let i = length - 61; i < length; i++) {
    //   let open = data[i].Open;
    //   let Close = data[i].Close;
      temp.push({ Date: data[i].Date, Close: data[i].Close }); // Use push method to update temp array
    }
    console.log(temp);
    setPoints(temp);
  }, [data]);

  return (
    <div className='nifty'>
      <Navbar />
      <div className='scrips'>
        <div className='scrip'>CDM</div>
      </div>
      {/* <ResponsiveContainer width='100%' aspect={3}>
        <LineChart data={points1}>
          <XAxis dataKey='Date' />
          <YAxis dataKey='Close' />
        </LineChart>
      </ResponsiveContainer> */}
    </div>
  );
}

export default Nifty;
