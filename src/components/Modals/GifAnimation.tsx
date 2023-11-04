import {
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";

function GifAnimation({ name,  }: { name?: string }) {
  return (
    <>
      <Tabs>
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
