import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const HomeLastSection = () => {
  return (
    <Stack mt={"150px"}>
      <Stack
        borderTop={"1px solid white"}
        className="com-event-1"
        sx={{
          "&:hover": {
            backgroundColor: "#EB5939",
            color: "white",
            border: "none",
            "& .com-event-typography": {
              color: "white",
            },
            "& .com-event-button": {
              backgroundColor: "white",
              color: "#EB5939",
            },
          },
        }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          padding={"40px"}
          paddingLeft={"80px"}
          width={"25%"}
        >
          <Typography
            className="com-event-typography"
            color={"#EB5939"}
            fontSize={"50px"}
            fontFamily={"Montserrat"}
            fontWeight={"800"}
          >
            Community Events
          </Typography>
          <Button
            className="com-event-button"
            sx={{
              mt: "10px",
              color: "white",
              borderRadius: "45px",
              padding: "10px",
              backgroundColor: "#EB5939",
              textTransform: "none",
              width: "30%",
              fontWeight: "400",
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Stack>

      <Stack
        borderTop={"1px solid white"}
        alignItems={"flex-end"}
        className="exclusive-deals"
        sx={{
          "&:hover": {
            backgroundColor: "#EB5939",
            border:'none',
            color: "white",
            "& .exclusive-deals": {
              color: "white",
            },
            "& .exclusive-deals-button": {
              backgroundColor: "white",
              color: "#EB5939",
            },
          },
        }}
      >
        <Stack
          flexDirection={"column"}
          justifyItems={"flex-end"}
          alignItems={"center"}
          padding={"40px"}
          paddingLeft={"80px"}
          width={"25%"}
        >
          <Typography
            className="exclusive-deals"
            color={"#EB5939"}
            fontSize={"50px"}
            fontFamily={"Montserrat"}
            fontWeight={"800"}
          >
            Exclusive Deals and Discounts
          </Typography>
          <Button
            className="exclusive-deals-button"
            sx={{
              mt: "10px",
              color: "white",
              borderRadius: "45px",
              padding: "10px",
              backgroundColor: "#EB5939",
              textTransform: "none",
              width: "30%",
              fontWeight: "400",
            }}
          >
            Shop Now
          </Button>
        </Stack>
      </Stack>

      <Stack
        borderTop={"1px solid white"}
        className="rising-stars"
        sx={{
          "&:hover": {
            backgroundColor: "#851DE0",
            border:'none',
            color: "white",
            "& .rising-stars-typo": {
              color: "white",
            },
            "& .rising-stars-button": {
              backgroundColor: "white",
              color: "#851DE0",
            },
          },
        }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          padding={"40px"}
          paddingLeft={"80px"}
          width={"25%"}
        >
          <Typography
            className="rising-stars-typo"
            color={"#851DE0"}
            fontSize={"50px"}
            fontFamily={"Montserrat"}
            fontWeight={"800"}
          >
            Meet The Rising Stars
          </Typography>
          <Button
            className="rising-stars-button"
            sx={{
              mt: "10px",
              color: "white",
              borderRadius: "45px",
              padding: "10px",
              backgroundColor: "#851De0",
              textTransform: "none",
              width: "30%",
              fontWeight: "400",
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomeLastSection;
