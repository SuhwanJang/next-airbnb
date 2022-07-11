import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  ModalCloseButton,
  ModalHeader,
  InputRightElement,
  InputGroup,
  Stack,
  Select,
  Flex,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';
import { Field, Form, Formik, FormikProps, FieldInputProps } from 'formik';
import React from 'react';

interface Iprops {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  email: string;
  name: string;
  password: string;
  month: string;
  day: string;
  year: string;
}

const monthList = Array.from(Array(12), (_i, i) => String(`${i + 1}월`));
const dayList = Array.from(Array(31), (_, i) => String(`${i + 1}일`));
const yearList = Array.from(Array(121), (_, i) => String(`${2020 - i}년`));

export default function SignUpModal({ isOpen, onClose }: Iprops) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{ email: '', name: '', password: '', month: '', day: '', year: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Stack spacing={4} marginTop="30px">
                  <Field name="email">
                    {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<FormValues> }) => (
                      <FormControl isInvalid={Boolean(form.errors.email && form.touched.email)}>
                        <Input {...field} type="email" id="email" placeholder="이메일 주소" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="name">
                    {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<FormValues> }) => (
                      <FormControl isInvalid={Boolean(form.errors.name && form.touched.name)}>
                        <Input {...field} id="name" placeholder="이름(예: 길동)" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<FormValues> }) => (
                      <FormControl isInvalid={Boolean(form.errors.password && form.touched.password)}>
                        <InputGroup>
                          <Input
                            {...field}
                            pr="4.5rem"
                            id="password"
                            type={show ? 'text' : 'password'}
                            placeholder="비밀번호 설정하기"
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
                  <Text fontSize="md" fontWeight="bold">
                    생일
                  </Text>
                  <Text>만 18세 이상의 성인만 회원으로 가입할 수 있습니다.</Text>
                  <Flex gap="3">
                    <Field name="month">
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<FormValues>;
                      }) => (
                        <FormControl id="month">
                          <Select id="month" onChange={field.onChange}>
                            {monthList.map((v) => (
                              <option id="month" value={v}>
                                {v}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="day">
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<FormValues>;
                      }) => (
                        <FormControl id="day">
                          <Select id="day" onChange={field.onChange}>
                            {dayList.map((v) => (
                              <option id="day" value={v}>
                                {v}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="year">
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<FormValues>;
                      }) => (
                        <FormControl id="year">
                          <Select id="year" onChange={field.onChange}>
                            {yearList.map((v) => (
                              <option id="year" value={v}>
                                {v}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                </Stack>
                <Button mt={4} width="100%" colorScheme="red" isLoading={props.isSubmitting} type="submit">
                  가입하기
                </Button>
              </Form>
            )}
          </Formik>
          <Divider marginTop="5" color="gray.300" />
        </ModalBody>

        <ModalFooter justifyContent="flex-start">
          <Text>
            이미 계정이 있나요?{' '}
            <Link href="/" color="blue">
              로그인
            </Link>
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
