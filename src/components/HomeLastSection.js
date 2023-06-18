import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const HomeLastSection = () => {
  return (
    <Stack mt={"150px"}>
      <Stack
        flexDirection={'row'}
        height={"100vh"}
        borderTop={"1px solid white"}
        alignItems={"center"}
        classNameName="rising-stars"
        sx={{
          "&:hover": {
            background: "linear-gradient(45deg, #851DE0, transparent)",
            border: "none",
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
          marginLeft={"30px"}
          width={"25%"}
        >
          <Typography
            classNameName="rising-stars-typo"
            color={"#851DE0"}
            fontSize={"50px"}
            fontFamily={"Montserrat"}
            fontWeight={"800"}
          >
            Meet The Rising Stars
          </Typography>
          <Button
            classNameName="rising-stars-button"
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
        <Stack flexDirection={'row'}>
          <figure className="snip1559">
            <div className="profile-image">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
                alt="profile-sample2"
              />
            </div>
            <figcaption>
              <h3>Sue Shei</h3>
              <h5>Founder</h5>
              <p>
                Which is worse, that everyone has his price, or that the price
                is always so low.
              </p>
              <div className="icons">
                <a href="www.google.com">
                <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="www.google.com">
                  {" "}
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="www.google.com">
                  {" "}
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <div className="profile-image">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg"
                alt="profile-sample7"
              />
            </div>
            <figcaption>
              <h3>Will Barrow</h3>
              <h5>Web Designer</h5>
              <p>
                I'm killing time while I wait for life to shower me with meaning
                and happiness.
              </p>
              <div className="icons">
                <a href="www.google.com">
                <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="www.google.com">
                  {" "}
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="www.google.com">
                  {" "}
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <div className="profile-image">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
                alt="profile-sample6"
              />
            </div>
            <figcaption>
              <h3>Indigo Violet</h3>
              <h5>Public Relations</h5>
              <p>
                The only skills I have the patience to learn are those that have
                no real application in life.{" "}
              </p>
              <div className="icons">
                <a href="www.google.com">
                <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="www.google.com">
                  {" "}
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="www.google.com">
                  {" "}
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </figcaption>
          </figure>
        </Stack>
      </Stack>

      <Stack
        borderTop={"1px solid white"}
        height={"100vh"}
        justifyContent={"center"}
        classNameName="com-event-1"
        sx={{
          "&:hover": {
            background: "linear-gradient(45deg, #EB5939, transparent)",
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
          marginLeft={"30px"}
          width={"25%"}
        >
          <Typography
            classNameName="com-event-typography"
            color={"#EB5939"}
            fontSize={"50px"}
            fontFamily={"Montserrat"}
            fontWeight={"800"}
          >
            Community Events
          </Typography>
          <Button
            classNameName="com-event-button"
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
        justifyContent={"center"}
        height={"100vh"}
        borderTop={"1px solid white"}
        alignItems={"flex-end"}
        classNameName="exclusive-deals"
        sx={{
          "&:hover": {
            //backgroundColor: "#EB5939",
            background: "linear-gradient(315deg, #EB5939, transparent)",
            border: "none",
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
          marginRight={"30px"}
          width={"30%"}
        >
          <Typography
            classNameName="exclusive-deals"
            color={"#EB5939"}
            fontSize={"50px"}
            fontFamily={"Montserrat"}
            fontWeight={"800"}
          >
            Exclusive Deals and Discounts
          </Typography>
          <Button
            classNameName="exclusive-deals-button"
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
    </Stack>
  );
};

export default HomeLastSection;
