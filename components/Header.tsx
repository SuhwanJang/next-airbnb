import { Button, ButtonGroup, Flex, Link, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineAliwangwang } from 'react-icons/ai';
import SignUpModal from './auth/SignUpModal';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w="100%" align="center" boxShadow="base" p="6" rounded="md" bg="white">
        <Link href="/">
          <Flex ml="10px" gap="3" fontSize="2xl">
            <AiOutlineAliwangwang />
            <Text>airbnb</Text>
          </Flex>
        </Link>
        <Spacer />
        <ButtonGroup gap="3" mr="10px">
          <Button borderRadius="22px" onClick={onOpen}>
            회원가입
          </Button>
          <Button borderRadius="22px">로그인</Button>
        </ButtonGroup>
      </Flex>
      <SignUpModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Header;
