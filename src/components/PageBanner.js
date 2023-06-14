import { React, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const PageBanner = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          fontWeight={500}
          sx={{ fontSize: { lg: "80px", xs: "50px" } }}
          mb="30px"
          textAlign="center"
          fontFamily={"Convergence"}
          color={"#EB5939"}
        >
          Where Community <br /> Finds Its Place
        </Typography>
        <Typography
          color={"#ffffff"}
          fontSize={"40px"}
          fontFamily={"Open-Sans"}
        >
          Inspiring, Connecting, and Empowering
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} justifyContent={"flex-end"}>
        <Stack
          sx={{ width: "50%" }}
          flexDirection={"row"}
          justifyContent={"flex-end"}
        >
          <input className="search-btn-input"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder=" Type Your Search Here"
            type="text"
          />
          <Button className="search-btn"
            sx={{
              bgcolor: "#EB5939",
              color: "#fff",
              textTransform: "none",
              width: { lg: "173px", xs: "80px" },
              height: "57.6px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: "45px",
              borderBottomRightRadius: "45px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
          >
            Search
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PageBanner;
