import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
export const Assign = () => {
  const [cat, setCat] = useState("");
  const [data, setData] = useState([]);
  return (
    <Grid container spacing={3} sx={{ bgcolor: "rgb(252,248,209)" }}>
      <Grid item xs={8}>
        <TextField
          label="Type Color Name"
          fullWidth
          onChange={(e) => setCat(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          sx={{ height: "55px" }}
          variant="contained"
          fullWidth
          onClick={() => setData([...data, cat])}
        >
          Show
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Grid container spacing={2} align="center">
          {data.map((item) => (
            <Grid item xs={12 }>
              <div
                style={{
                  borderRadius: item,
                  border: "3px dotted black",
                  height: 150,
                }}
              >
                <h2>{item}</h2>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
