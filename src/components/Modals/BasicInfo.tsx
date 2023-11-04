import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react";
import Titles from "./Titles";
import { CharacterDetail } from "../Cards/CharacterCard";
import RarityDisplay from "../RarityDisplay";

function BasicInfo({
  real_name,
  rarity,
  title,
  weapon,
  vision,
  model_type,
  birthday,
  constellation,
  region,
  affiliation,
  special_dish,
  release_day,
  release_version,
}: {
  real_name?: string;
  rarity?: string;
  title?: string[];
  weapon?: string;
  vision?: string;
  model_type?: string;
  birthday?: string;
  constellation?: string;
  region?: string;
  affiliation?: string;
  special_dish?: string;
  release_day?: string;
  release_version?: string;
}) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Information</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Full Name</Td>
            <Td>{real_name}</Td>
          </Tr>
          <Tr>
            <Td>Rarity</Td>
            <Td>
              <RarityDisplay rarity={rarity} />
            </Td>
          </Tr>
          <Tr>
            <Td>Title</Td>
            <Td>
              <Titles title={title} />
            </Td>
          </Tr>
          <Tr>
            <Td>Weapon</Td>
            <Td>
              <HStack>
                <Image src={"/" + weapon + ".png"} boxSize="30px" />
                <Text>{weapon}</Text>
              </HStack>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default BasicInfo;
