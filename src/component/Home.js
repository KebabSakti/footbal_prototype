import styled from "@emotion/styled";
import { Button, Card, Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <div className="App">
      <div>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <Card>1</Card>
          </Grid>
          <Grid item xs={12}>
            <Card>1</Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
