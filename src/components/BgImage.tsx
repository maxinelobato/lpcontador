import { Box, BoxProps } from '@chakra-ui/react';

export function BgImage(props: BoxProps) {
  return (
    <Box
      zIndex={0}
      maxW="100%"
      maxH="auto"
      bgImage="/img/bgImage.webp"
      bgSize="cover"
      bgPosition="center center"
      {...props}
    />
  );
}
