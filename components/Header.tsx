import {
  Button,
  ButtonGroup,
  Flex,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineAliwangwang } from 'react-icons/ai';

function Header() {
  return (
    <Flex
      w="100%"
      align="center"
      position="absolute"
      boxShadow="base"
      p="6"
      rounded="md"
      bg="white"
    >
      <Link href="/">
        <Flex ml="10px" gap="3" fontSize="2xl">
          <AiOutlineAliwangwang />
          <Text>airbnb</Text>
        </Flex>
      </Link>
      <Spacer />
      <ButtonGroup gap="3" mr="10px">
        <Button type="button" borderRadius="22px">
          회원가입
        </Button>
        <Button type="button" borderRadius="22px">
          로그인
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Header;
