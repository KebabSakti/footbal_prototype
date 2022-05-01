import styled from "@emotion/styled";
import {
  Avatar,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";

export default function Home() {
  const coachStyle = {
    backgroundColor: "#efefef",
    minHeight: "300px",
    textAlign: "center",
  };

  const playerStyle = {
    backgroundColor: "#efefef",
    minHeight: "60px",
    textAlign: "center",
  };

  return (
    <div className="App">
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Paper elevation={0}>
                    <Typography variant="h2">90</Typography>
                  </Paper>
                </Grid>
                <Grid item md={6} xs={12} style={{ textAlign: "right" }}>
                  <Typography variant="h2">Player 1 turn </Typography>
                </Grid>
              </Grid>
            </Grid>
            {[...Array(3).keys()].map((item, index) => {
              return (
                <Grid item md={4} xs={12} key={index}>
                  <Paper elevation={0} style={coachStyle}>
                    <h1>Player {index}</h1>
                    {[...Array(7).keys()].map((item, index) => {
                      return (
                        <Chip
                          key={index}
                          avatar={<Avatar>QB</Avatar>}
                          label={"Player " + index}
                          style={{ margin: "4px" }}
                        />
                      );
                    })}
                  </Paper>
                </Grid>
              );
            })}
            {[...Array(120).keys()].map((item, index) => {
              return (
                <Grid item md={1} xs={6} key={index}>
                  <Paper elevation={0} style={playerStyle}>
                    {index}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
