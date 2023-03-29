import React from "react";
import { Box, Container, Grid, Rating, Typography } from "@mui/material";

function CardData() {
    const [value, setValue] = React.useState(2);
    const [value2, setValue2] = React.useState(5);


  return (
    <div>
      <Container sx={{ mt: 10, mb: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h3" sx={{color: "blue", fontWeight: "bold"}}>Our Happy Customers</Typography>
            <Typography sx={{ mt: 3 }}>
              Here what our customers think about we are.
            </Typography>
            <Box mt={50}>
              <Rating name="read-only" value={value2} readOnly sx={{color: "green"}} />
              <Typography>Based on 786 reviews</Typography>
              <Typography variant= "subtitle2" sx={{mt: 2}}>Trustpilot</Typography>
              </Box>
          </Grid>
          <Grid item xs={10} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{ border: "1px solid black", borderRadius: 5, padding: 5 }}
            >
              <Typography variant="h6" sx={{fontWeight: "bold", color: "navyblue"}}>
                Matt Gardener was knowledgeable
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
              <Box mt={2}>
              <Rating name="read-only" value={value} readOnly sx={{color: "green"}} />
              <Typography>Lisie Craven</Typography>
              </Box>
            </Box>

            <Box
              sx={{ border: "1px solid black", borderRadius: 5, padding: 5, mt : 5 }}
            >
              <Typography variant="h6" sx={{fontWeight: "bold", color: "navyblue"}}>
                Matt Gardener was knowledgeable
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                Lorem Ipsum.
              </Typography>
              <Box mt={2}>
              <Rating name="read-only" value={value} readOnly sx={{color: "green"}} />
              <Typography>Lisie Craven</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CardData;
