import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FaPenSquare, FaShieldAlt } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
import { IoIosPeople } from 'react-icons/io';
import { IoBusiness } from 'react-icons/io5';
import { ButtonCta } from './ButtonCta';
interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'} justifyContent={'center'}>
      <Flex w={16} h={16} align={'center'} justify={'center'} rounded={'full'}>
        {icon}
      </Flex>
      <Text fontWeight={600} align={'center'}>
        {text}
      </Text>
    </Stack>
  );
};

export function Specialty() {
  return (
    <Box bgColor="#330519">
      <Container maxW={'7xl'}>
        <Stack as={Box} textAlign={'center'} spacing={[4, 4, 8]} py={[18, 32, 14]}>
          <Heading
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}
          >
            Veja como posso lhe ajudar
          </Heading>
          <Text
            as="h2"
            color={'whiteAlpha.800'}
            fontWeight="semibold"
            fontSize={['lg', '2xl', '3xl']}
          >
            Se você não achou o que procura, fale comigo no <i>WhatsApp</i>
          </Text>

          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 1, lg: 6 }}>
            <Container maxW={'5xl'}>
              <Box position="relative">
                <Accordion allowToggle reduceMotion={true}>
                  <AccordionItem mt={4}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="center">
                          <Stack spacing={2}>
                            <Feature
                              icon={<Icon as={IoIosPeople} w={16} h={16} />}
                              text={'Acompanhamento em Delegacia'}
                            />
                          </Stack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Acompanhamento em Depoimentos
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Acompanhamento de Inquéritos
                          Policiais
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Apoio para Vítimas e Familiares
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Levantamento de Provas Favoráveis
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Prisão em Flagrante
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Pedido de Liberdade Com e Sem Fiança
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Preparação para Depoimentos
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Registro de Boletim de Ocorrência
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Solicitação de Medidas Protetivas
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt={4}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="center">
                          <Stack spacing={2}>
                            <Feature
                              icon={<Icon as={IoBusiness} w={16} h={16} />}
                              text={'Atuação em Tribunais'}
                            />
                          </Stack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Atuação em Tribunais Estaduais,
                          Federais, STJ e STF
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Recursos Criminais
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Sustentações Orais Perante os
                          Tribunais
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt={4}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="center">
                          <Stack spacing={2}>
                            <Feature
                              icon={<Icon as={FaShieldAlt} w={16} h={16} />}
                              text={'Defesa em Processos Criminais'}
                            />
                          </Stack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Audiência de Custódia
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Acompanhamento de Processos
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Atuação em Favor das Vítimas
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Defesa dos Acusados
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Habeas Corpus
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Liberdade Provisória
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Prisão Domiciliar
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Relaxamento de Prisão
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Revogação de Prisão
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Realização de Audiências
                        </Text>
                        <Text pt="1" fontSize="sm">
                          <Icon as={FcCheckmark} /> Tribunal do Júri
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt={4}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="center">
                          <Stack spacing={2}>
                            <Feature
                              icon={<Icon as={FaPenSquare} w={16} h={16} />}
                              text={'Execução Penal'}
                            />
                          </Stack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Livramento Condicional
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Progressão de Regime
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Pedido de Transferência
                        </Text>
                        <Text pt="2" fontSize="sm">
                          <Icon as={FcCheckmark} /> Remição de Pena
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Container>
          </SimpleGrid>
          <ButtonCta />
        </Stack>
      </Container>
    </Box>
  );
}
