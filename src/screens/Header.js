import { Button, Grid, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import React from "react";
import {Link } from "react-router-dom"
const Header = () => {
  return (
    <div style={{ marginTop: 30 , backgroundColor:"#8FBC8F", marginBottom:50}}>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={2}>
          <img
            src="http://www.myiconfinder.com/uploads/iconsets/256-256-31e62789475b747b2a6949dfbc2e51c9.png"
            style={{
              width: 100,
              height: 100,
              margin:10
            }}
          />
        </Grid>

        <Grid item md={4} style={{ margin: 35, backgroundColor:"FFEBCD" }}>
          <Button>
            <Typography
              variant="body1"
              style={{
                marginInline: 35,
                fontSize: 19,
                fontWeight:"bold",
                color:"#F0F8FF"
              }}
            >
              Men
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="body1"
              style={{
                marginInline: 25,
                fontSize: 19,
                fontWeight:"bold",
                color:"#F0F8FF"
              }}
            >
              WoMen
            </Typography>
          </Button>
          <Button>
            <Typography
              variant="body1"
              style={{
                marginInline: 25,
                fontSize: 19,
                fontWeight:"bold",
                color:"#F0F8FF"
              }}
            >
              Sale
            </Typography>
          </Button>
        </Grid>
        <Grid item md={3} style={{ margin: 35 }} >
        
          <Button variant="contained" color="primary" endIcon={<LockIcon />}  style={{
              marginInline:20,
              backgroundColor:" #F0F8FF",
              color:"#556B2F"
          }}>
           login 
          </Button>
         
          <Button variant="contained" color="primary" endIcon={<LockIcon />} style={{
             
              backgroundColor:" #F0F8FF",
              color:"#556B2F"
          }}>
            signup
          </Button>
          
        </Grid>
        <Grid item md={1} />
      </Grid>
    </div>
  );
};

export default Header;
