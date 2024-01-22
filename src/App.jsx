import { Avatar, Box, Container, Divider } from "@mui/material";
import { blue, green, yellow } from "@mui/material/colors";
import "./App.css";
import VerticalLinearStepper from "./VerticalLinearStepper";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NavBar from "./NavBar";
import Grid from "@mui/material/Unstable_Grid2";

export function App() {
  return (
    <Box className="app-container" maxWidth="false">
      <NavBar className="app-navbar" />
      <Container className="order-container" sx={{ boxShadow: 3 }}>
        <Grid container spacing={1} height="150px">
          <Grid
            xs={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: green[500] }}>
              <AssignmentIcon />
            </Avatar>
          </Grid>
          <Grid
            xs={10}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <h3>Tema: Orden N° 10</h3>
          </Grid>
          <Grid xs display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: green[500] }}>AM</Avatar>
          </Grid>
          <Grid
            xs={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          ></Grid>
          <Grid
            xs={10}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <h4>Descripción del tema</h4>
          </Grid>
        </Grid>
        <Box className="order-topic-title">
          <Box className="order-topic-title-content"></Box>
        </Box>
        <Box className="order-topic-content"></Box>
      </Container>

      <Container>
        <Box maxWidth="sm" className="order-stepper-container">
          <VerticalLinearStepper />
        </Box>
        <Divider variant="middle" />
      </Container>

      <Container className="order-msg-container">
        <Grid
          container
          className="order-msg-item"
          spacing={1}
          sx={{ boxShadow: 1 }}
        >
          <Grid
            xs={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: blue[500] }}>DP</Avatar>
          </Grid>
          <Grid xs={9} display="flex" justifyContent="left" alignItems="center">
            <p>Esperamos por la respuesta de la Alianza Comandante.</p>
          </Grid>
          <Grid xs={2} display="flex" alignItems="center">
            hace 30m
          </Grid>
        </Grid>
        <Grid
          container
          className="order-msg-item"
          spacing={1}
          sx={{ boxShadow: 1 }}
        >
          <Grid
            xs={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: yellow[500] }}>JV</Avatar>
          </Grid>
          <Grid xs={9} display="flex" justifyContent="left" alignItems="center">
            <p>Ya notificamos a la Oficina de Consultoría..</p>
          </Grid>
          <Grid xs={2} display="flex" alignItems="center">
            hace 18m
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
