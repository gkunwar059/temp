import * as React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../data'

import {useNavigate} from 'react-router-dom';



export default function InfoTable() {
 
  const [data, setData]= useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getData(){
    setLoading(true);
     const res=await axios.get('https://rest.coinapi.io/v1/assets',{
      params: {
        limit: 10
      },
      headers:{'X-CoinAPI-Key ':'0E0BC722-A7CA-4B03-95D2-94DED8E8FE16'}
    })

    const rawData=res.data;
    const filteredData = rawData.filter((data)=> data.type_is_crypto === 1);
    console.log(filteredData);
   setData(filteredData);
   setLoading(false);

  }

  useEffect(()=>{
    getData();
  }, []);

  var tempId = 'bitcoin';

  if(loading)
  {
    return <text>Loading</text>
  }

  else

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency Name</TableCell>
            <TableCell align="right">Currency ID</TableCell>
            <TableCell align="right"> Price(In USD)</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {
            
            data.map((item) => (
            <TableRow
              key={item.asset_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              // onClick={() => navigate(`/info/${item.asset_id}`)}
              onClick={() => navigate(`/info/${tempId}`)}
              
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.asset_id}</TableCell>
              <TableCell align="right">{item.price_usd}</TableCell>
              
            </TableRow>
          ))}
        
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}