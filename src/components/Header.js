
import { AppBar, Container, MenuItem, Select, Toolbar, Typography} from "@mui/material";
  import {
    createTheme,
    ThemeProvider,
  } from "@mui/material/styles";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
// import {Search} from './Search'
import CryptoSearch from './CryptoSearch' 
//   import { useTheme } from "@mui/material/styles";

  
//   import { CryptoState } from "../CryptoContext";
  
//   const useStyles = makeStyles((theme) => ({
//     title: {
//       flex: 1,
//       color: "gold",
//       fontFamily: "Montserrat",
//       fontWeight: "bold",
//       cursor: "pointer",
//     },
//   }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  function Header() {
    // const classes = useStyles();
    // const { currency, setCurrency } = CryptoState();
    const [currency, setCurrency] = useState('NP');
  
    const navigate = useNavigate();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar style={{justifyContent: 'space-between'}}>
              <Typography
                onClick={() => navigate(`/`)}
                variant="h6"
                // style={{marginRight: "auto" }}
                // className={classes.title}
              >
                Crypto Task 
              </Typography>
              
          <CryptoSearch />
              {/* <Button color="inherit">Login</Button> */}
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15   }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"NP"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;
  
  // "react-html-parser": "^2.0.2",