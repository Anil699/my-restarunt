import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          ."My Restaurant" is a welcoming and vibrant eatery where culinary excellence. Located in a cozy corner of the city, this restaurant offers a diverse menu that caters to all tastes, featuring everything from classic comfort food to innovative gourmet dishes. The ambiance is both stylish and inviting, making it an ideal spot for casual dining, special occasions, or a simple gathering with friends. At "My Restaurant," every meal is crafted with care, using the freshest ingredients, ensuring a delightful experience for every guest who walks through the doors.








        </p>
    
         
      </Box>
    </Layout>
  );
};

export default About;
