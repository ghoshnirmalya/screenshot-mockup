import UploadImageButton from "@/components/ui/upload-image-button";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

const Onboarding: FC = () => {
  return (
    <Box h="100vh">
      <Center p={4} h="100%" d="flex" flexDir="column" textAlign="center">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Image
              src="/images/logo.svg"
              alt="Screenshot Mockup"
              height={50}
              width={300}
            />
            <Heading size="md" color="blue.600" fontWeight="semibold">
              Make your screenshots look{" "}
              <Box as="span" color="cyan.500" fontWeight="bold">
                even better
              </Box>
              .
            </Heading>
          </VStack>
          <UploadImageButton />
        </VStack>
      </Center>
    </Box>
  );
};

export default Onboarding;
