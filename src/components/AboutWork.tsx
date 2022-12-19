import { Button, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { PresentationChart, CurrencyCircleDollar, ChartLineUp } from 'phosphor-react';
import { ReactElement } from 'react';
import { ButtonCta } from './ButtonCta';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction="row" align="center">
      <Flex align="center" justify="center" bg={iconBg} rounded="lg">
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export function AboutWork() {
  return (
    <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text as="span" position="relative" align="left">
              Entenda como podemos
            </Text>{' '}
            {''}
            <Text color={'blue.400'} as={'span'}>
              ajudar sua empresa
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            A prioridade da Contabilidade Tributária é lhe auxiliar da melhor forma,
            evitando problemas com o Governo relacionados a impostos abusivos e várias
            outras investidas despercebidas pela maioria das empresas
          </Text>
          <Stack spacing={6}>
            <Feature
              icon={<Icon as={ChartLineUp} color="purple.500" w={16} h={16} />}
              iconBg="whiteAlpha.50"
              text="Efetuamos uma Análise Financeira na sua Empresa para poder iniciarmos os próximos passos"
            />

            <Feature
              icon={<Icon as={CurrencyCircleDollar} color="green.500" w={16} h={16} />}
              iconBg="whiteAlpha.50"
              text="Iniciamos um Planejamento Financeiro com base na Análise, alinhando expectativas reais para os próximos anos"
            />
            <Feature
              icon={<Icon as={PresentationChart} color="yellow.500" w={16} h={16} />}
              iconBg="whiteAlpha.50"
              text="Montamos um Plano de Ação de acordo com a necessidade da sua Empresa"
            />
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <ButtonCta />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align="center">
        <Image
          maxH="100%"
          maxW="100%"
          rounded="lg"
          alt="..."
          objectFit="cover"
          src={
            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
