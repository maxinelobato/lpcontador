import { Icon, IconButton, Link, Stack, Tooltip } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export function ScrollCtaWhatsapp() {
  return (
    <Stack
      position="fixed"
      zIndex={2}
      bottom="30px"
      right="30px"
      justifyContent="center"
      alignItems="center"
    >
      <Tooltip
        backdropFilter="auto"
        backdropBlur="1rem"
        rounded="md"
        bgColor="blackAlpha.500"
        shadow="xl"
        border="1px solid"
        color="whiteAlpha.900"
        borderColor="whiteAlpha.200"
        label="Atendimento 24h"
        placement="top-start"
      >
        <Link
          style={{ textDecoration: 'none' }}
          href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
          isExternal
        >
          <IconButton
            color="whiteAlpha.900"
            aria-label="behavior"
            bgColor="green.500"
            variant="solid"
            w={14}
            h={14}
            shadow="base"
            _hover={{
              bgColor: 'green.600',
              transform: 'scale(1.1)',
              border: '1px',
              borderColor: 'whiteAlpha.900',
            }}
            isRound
          >
            <Icon as={FaWhatsapp} w={8} h={8} />
          </IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
}
