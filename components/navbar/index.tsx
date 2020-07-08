import React from "react";
import { Box, Link as _Link, Button, Stack } from "@chakra-ui/core";
import { NextComponentType } from "next";
import Link from "next/link";

const Navbar: NextComponentType = () => {
  return (
    <Box>
      <Box
        w="full"
        mx="auto"
        d="flex"
        justifyContent="space-between"
        p={4}
        borderWidth={1}
      >
        <Stack
          isInline
          spacing={4}
          align="center"
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/">
                  <_Link>Home</_Link>
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/sign-in">
                  <_Link>Sign In</_Link>
                </Link>
              </Box>
              <Box>
                <Link href="/sign-up">
                  <Button variantColor="cyan">Sign Up</Button>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
