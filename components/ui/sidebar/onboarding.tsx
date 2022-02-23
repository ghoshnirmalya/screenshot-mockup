import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import UploadImageButton from "@/components/ui/upload-image-button";

interface IProps {
  setImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
}

const Onboarding: FC<IProps> = ({ setImage }) => {
  return (
    <Box h="100vh">
      <Center p={4} h="100%" d="flex" flexDir="column" textAlign="center">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Image src={Logo} alt="Screenshot Mockup" height={50} width={300} />
            <Heading size="md" color="blue.600" fontWeight="semibold">
              Make your screenshots look{" "}
              <Box as="span" color="cyan.500" fontWeight="bold">
                even better
              </Box>
              .
            </Heading>
          </VStack>
          <UploadImageButton setImage={setImage} />
        </VStack>
      </Center>
    </Box>
  );
};

export default Onboarding;
