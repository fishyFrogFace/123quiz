import React, { useState, useEffect } from "react";
import { Typography, Container, TextField, Grid } from "@material-ui/core";

export default function Greeting() {
  const [name, setName] = useState("Harry");
  const [surname, setSurname] = useState("Potter");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = name + " " + surname;
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="container" style={{ marginTop: "40px" }}>
      <Grid container direction="column" spacing={2} style={{ width: "400px" }}>
        <Grid item>
          <TextField
            value={name}
            variant="outlined"
            fullWidth={true}
            onChange={event => setName(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            value={surname}
            variant="outlined"
            fullWidth={true}
            onChange={event => setSurname(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography>Width: {width}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
