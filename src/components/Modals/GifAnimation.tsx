import {
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Center,
  Heading,
} from "@chakra-ui/react";

function GifAnimation({ name,  }: { name?: string }) {
  return (
    <>
      <Tabs m="10px">
        <TabList>
          <Tab>Normal Attack</Tab>
          <Tab>Charged Attack</Tab>
          <Tab>Plunging Attack</Tab>
          <Tab>Elemental Skill</Tab>
          <Tab>Elemental Burst</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Center>
              <Image src={"/" + name + "Attack.gif"} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <Image src={"/" + name + "Charged.gif"} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <Image src={"/" + name + "Plunging.gif"} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <Image src={"/" + name + "Skill.gif"} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <Image src={"/" + name + "Burst.gif"} />
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default GifAnimation;
