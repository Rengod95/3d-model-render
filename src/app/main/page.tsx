"use client";

import React, { useState } from "react";
import { Box, Button, Text } from "@mantine/core";

const Page = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <Box size={"md"}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setCount((prev) => prev + 1);
        }}>
        count up
      </Button>
      <Text>{count}</Text>
    </Box>
  );
};

export default Page;
