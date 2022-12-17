import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
  Sparkle,
  ChatsCircle,
  Handshake,
  ChartLineUp,
  CircleWavyCheck,
} from 'phosphor-react';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;

  return (
    <Stat
      as="dl"
      px={{ base: 2, md: 4 }}
      py={5}
      backdropFilter="auto"
      backdropBlur="1rem"
      bgColor="whiteAlpha.50"
      shadow="xl"
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="lg"
    >
      <Flex
        justifyContent={{ base: 'center', md: 'center' }}
        direction={{ base: 'column-reverse', md: 'column' }}
      >
        <Box alignContent="center">
          <StatLabel fontWeight={'medium'} as="dt">
            {title}
          </StatLabel>
          <StatNumber fontSize={['sm', 'md', 'lg']} fontWeight={'medium'} as="dd">
            {stat}
          </StatNumber>
        </Box>
        <VStack>
          <Box pt={6} my={'auto'} color="whiteAlpha.800">
            {icon}
          </Box>
        </VStack>
      </Flex>
    </Stat>
  );
}

export function Description() {
  return (
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 4, md: 14, lg: 0 }}
      mt={[0, 0, -28]}
    >
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={{ base: 5, lg: 5 }}>
        <StatsCard
          title={'Referência no '}
          stat={'Mercado'}
          icon={<Sparkle size={'3em'} />}
        />
        <StatsCard
          title={'Atendimento'}
          stat={'Exclusivo'}
          icon={<ChatsCircle size={'3em'} />}
        />
        <StatsCard
          title={'Compromisso com'}
          stat={'Seu Negócio'}
          icon={<Handshake size={'3em'} />}
        />
        <StatsCard
          title={'Assessoria'}
          stat={'Especializada'}
          icon={<CircleWavyCheck size={'3em'} />}
        />
        <StatsCard
          title={'Gestão'}
          stat={'Tributária'}
          icon={<ChartLineUp size={'3em'} />}
        />
      </SimpleGrid>
    </Stack>
  );
}
