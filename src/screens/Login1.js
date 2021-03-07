import React from "react";
import { TextField, Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const Login1 = () => {
  return (
    <div
      style={{
        margintop: 30,
      }}
    >
      <Grid container>
        <Grid item md={4} />
        <Grid
          item
          md={4}
          style={{
            backgroundColor: "whitesmoke",
          }}
        >
          <Typography
            variant="h1"
            style={{ marginBottom: 50, textAlign: "center" }}
          >
            Signup
          </Typography>
          <TextField
            id="outlined-basic"
            label="first name"
            variant="outlined"
            style={{ marginBottom: 30, marginInline: 150, color: "#8FBC8F" }}
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="last name"
            variant="outlined"
            style={{ marginBottom: 30, marginInline: 150 }}
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="email id"
            variant="outlined"
            style={{ marginBottom: 30, marginInline: 150 }}
          />
          <br></br>

          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            style={{ marginBottom: 30, marginInline: 150 }}
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="re-enter password"
            variant="outlined"
            style={{ marginBottom: 30, marginInline: 150 }}
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="phone-no"
            variant="outlined"
            style={{ marginBottom: 30, marginInline: 150 }}
          />
          <br></br>
          <Link   to="/acbd">
            {/* <Button
              variant="contained"
              style={{
                backgroundColor: "#8FBC8F",
                color: "FFEBCD",
                marginInline: 200,
              }}
            > */}
              {" "}
              signup{" "}
            {/* </Button> */}
          </Link>
        </Grid>

        <Grid item md={4} />
      </Grid>
    </div>
  );
};

export default Login1;
