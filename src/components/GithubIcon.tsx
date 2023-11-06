import {Icon, Box} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa";

function GithubIcon() {
  return (
    <Box>
      <a
        href="https://github.com/BravoLu/Genshin-Impact-Characters"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
        }}
      >
        <Icon as={FaGithub} w={8} h={8} color="gray.700" />
      </a>
    </Box>
  );
}

export default GithubIcon;
