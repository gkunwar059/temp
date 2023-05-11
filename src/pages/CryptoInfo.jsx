// // import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
// import { makeStyles, Typography, LinearProgress } from "@mui/material";
// import axios from "axios";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// // import ReactHtmlParser from "react-html-parser";
// import HTMLReactParser from "html-react-parser"; 

// import CoinInfo from "../components/CoinInfo";
// import { SingleCoin } from "../config/api";
// import { numberWithCommas } from "../components/CoinsTable";
// import { CryptoState } from "../CryptoContext";

// const CryptoInfo = () => {
//   const { id } = useParams();
//   const [coin, setCoin] = useState();

//   const { currency, symbol } = CryptoState();

//   const fetchCoin = async () => {
//     const { data } = await axios.get(SingleCoin(id));

//     setCoin(data);
//   };

//   useEffect(() => {
//     fetchCoin();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const useStyles = makeStyles((theme) => ({
//     container: {
//       display: "flex",
//       [theme.breakpoints.down("md")]: {
//         flexDirection: "column",
//         alignItems: "center",
//       },
//     },
//     sidebar: {
//       width: "30%",
//       [theme.breakpoints.down("md")]: {
//         width: "100%",
//       },
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       marginTop: 25,
//       borderRight: "2px solid grey",
//     },
//     heading: {
//       fontWeight: "bold",
//       marginBottom: 20,
//       fontFamily: "Montserrat",
//     },
//     description: {
//       width: "100%",
//       fontFamily: "Montserrat",
//       padding: 25,
//       paddingBottom: 15,
//       paddingTop: 0,
//       textAlign: "justify", 
//     },
//     marketData: {
//       alignSelf: "start",
//       padding: 25,
//       paddingTop: 10,
//       width: "100%",
//       [theme.breakpoints.down("md")]: {
//         display: "flex",
//         justifyContent: "space-around",
//       },
//       [theme.breakpoints.down("sm")]: {
//         flexDirection: "column",
//         alignItems: "center",
//       },
//       [theme.breakpoints.down("xs")]: {
//         alignItems: "start",
//       },
//     },
//   }));

//   const classes = useStyles();

//   if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

//   return (
//     <div className={classes.container}>
//       <div className={classes.sidebar}>
//         <img
//           src={coin?.image.large}
//           alt={coin?.name}
//           height="200"
//           style={{ marginBottom: 20 }}
//         />
//         <Typography variant="h3" className={classes.heading}>
//           {coin?.name}
//         </Typography>
//         <Typography variant="subtitle1" className={classes.description}>
//         {/* {coin?.description} */}
//           {HTMLReactParser(coin?.description.en.split(". ")[0])}
//         </Typography>
//         <div className={classes.marketData}>
//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" className={classes.heading}>
//               Rank:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
//               {numberWithCommas(coin?.market_cap_rank)}
//             </Typography>
//           </span>

//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" className={classes.heading}>
//               Current Price:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
//               {symbol}{" "}
//               {numberWithCommas(
//                 coin?.market_data.current_price[currency.toLowerCase()]
//               )}
//             </Typography>
//           </span>
//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" className={classes.heading}>
//               Market Cap:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
//               {symbol}{" "}
//               {numberWithCommas(
//                 coin?.market_data.market_cap[currency.toLowerCase()]
//                   .toString()
//                   .slice(0, -6)
//               )}
//               M
//             </Typography>
//           </span>
//         </div>
//       </div>
//       <CoinInfo coin={coin} />
//     </div>
//   );
// };

// export default CryptoInfo;


// // import { LinearProgress, Typography } from "@mui/material";
// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import ReactHtmlParser from "react-html-parser";

// // import CoinInfo from "../components/CoinInfo";
// // import { SingleCoin } from "../config/api";
// // import { numberWithCommas } from "../components/CoinsTable";
// // import { CryptoState } from "../CryptoContext";

// // const CryptoInfo = () => {
// //     const { id } = useParams();
// //     const [coin, setCoin] = useState();

// //     const { currency, symbol } = CryptoState();

// //     const fetchCoin = async () => {
// //         const { data } = await axios.get(SingleCoin(id));

// //         setCoin(data);
// //     };

// //     useEffect(() => {
// //         fetchCoin();
// //         // eslint-disable-next-line react-hooks/exhaustive-deps
// //     }, []);

// //     const Container = styled("div")({
// //         display: "flex",
// //         [theme.breakpoints.down("md")]: {
// //             flexDirection: "column",
// //             alignItems: "center",
// //         },
// //     });

// //     const Sidebar = styled("div")({
// //         width: "30%",
// //         [theme.breakpoints.down("md")]: {
// //             width: "100%",
// //         },
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         marginTop: 25,
// //         borderRight: "2px solid grey",
// //     });

// //     const Heading = styled(Typography)({
// //         fontWeight: "bold",
// //         marginBottom: 20,
// //         fontFamily: "Montserrat",
// //     });

// //     const Description = styled(Typography)({
// //         width: "100%",
// //         fontFamily: "Montserrat",
// //         padding: 25,
// //         paddingBottom: 15,
// //         paddingTop: 0,
// //         textAlign: "justify",
// //     });

// //     const MarketData = styled("div")({
// //         alignSelf: "start",
// //         padding: 25,
// //         paddingTop: 10,
// //         width: "100%",
// //         [theme.breakpoints.down("md")]: {
// //             display: "flex",
// //             justifyContent: "space-around",
// //         },
// //         [theme.breakpoints.down("sm")]: {
// //             flexDirection: "column",
// //             alignItems: "center",
// //         },
// //         [theme.breakpoints.down("xs")]: {
// //             alignItems: "start",
// //         },
// //     });

// //     if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

// //     return (
// //         <Container>
// //             <Sidebar>
// //                 <img
// //                     src={coin?.image.large}
// //                     alt={coin?.name}
// //                     height="200"
// //                     style={{ marginBottom: 20 }}
// //                 />
// //                 <Heading variant="h3">{coin?.name}</Heading>
// //                 <Description variant="subtitle1">
// //                     {ReactHtmlParser(coin?.description.en.split(". ")[0])}
// //                 </Description>
// //                 <MarketData>
// //                     <span style={{ display: "flex" }}>
// //                         <Typography variant="h5" className={classes.heading}>
// //                             Rank:
// //                         </Typography>
// //                         &nbsp; &nbsp;
// //                         <Typography
// //                             variant="h5"
// //                             style={{
// //                                 fontFamily: "Montserrat",
// //                             }}
// //                         >
// //                             {numberWithCommas(coin?.market_cap_rank)}
// //                         </Typography>
// //                     </span>

// //                     <span style={{ display: "flex" }}>
// //                         {/* <Typography variant="h5" className={classes.heading}>
// //                             Current Price:
// //                         </Typography> */}
// //                         <Heading >
// //                             Current Price:
// //                         </Heading>
// //                         &nbsp; &nbsp;
// //                         <Typography
// //                             variant="h5"
// //                             style={{
// //                                 fontFamily: "Montserrat",

// //                             }}
// //                         >
// //                             {symbol}{" "}
// //                             {numberWithCommas(
// //                                 coin?.market_data.market_cap[currency.toLowerCase()]
// //                                     .toString()
// //                                     .slice(0, -6)
// //                             )}

// //                         </Typography>
// //                     </span>

// //                     <CoinInfo coin={coin} />

// //                 </MarketData>

// //             </Sidebar>
// //         </Container>

// //     );
// // }




// // export default CryptoInfo;


import React from 'react'
import Header from '../components/Header'
import {useNavigate, useParams} from 'react-router-dom'

const CryptoInfo = () => {
    const [data, setData]= useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  async function getSingleData(){
    // setLoading(true);
     const res=await axios.get(`https://rest.coinapi.io/v1/assets/${id}`,{
      
      headers:{'X-CoinAPI-Key ':'0E0BC722-A7CA-4B03-95D2-94DED8E8FE16'}
    })
    console.log(res);
//     const rawData=res.data;
//     const filteredData = rawData.filter((data)=> data.type_is_crypto === 1);
//     console.log(filteredData);
//    setData(filteredData);
//    setLoading(false);
  }

  useEffect(()=>{
    getSingleData();
  }, []);

  return (
      <>
      <Header/>
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
        
          {/* {
            
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
          ))} */}
        
         
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default CryptoInfo