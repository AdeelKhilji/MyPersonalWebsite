import {
  Button, 
  Container, 
  FormControl, 
  FormErrorMessage, 
  FormLabel, 
  Heading, 
  Input, 
  Textarea,
  Text
} from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";

import { useState } from "react";

import { sendContactForm } from "./lib/api";
const initValues = {name: "", email: "", message: ""}

const initState = {values: initValues}

export default function Contact({data}) 
{
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const {values, isLoading, error} = state;

  const onBlur = ({target}) => 
  setTouched((previousState) => ({...previousState,[target.name]: true }));

  const handleChange = ({target}) => setState((previousState) => ({
    ...previousState,
    values:{
      ...previousState.values,
      [target.name]: target.value
    }
  }));

  const onSubmit = async () => {
    setState((previousState) =>({
      ...previousState,
      isLoading: true
    }));

    try{
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top"
      });
    }catch(error){
        setState((previousState) =>({
        ...previousState,
        isLoading: false,
        error: error.message
      }));
    }
  };

  return (
    <>
    <div className=" py-40">
    <div className="h-56 grid grid-cols-3 gap-4 content-center justify-items-center...">
      <div></div>
      <div>
   <Container maxW="450px" mt={12}>
          <Heading className=" text-2xl py-2 text-teal-600">CONTACT ME</Heading>
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}
          <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
            <FormLabel>Name</FormLabel>
            <Input 
                  type="text" 
                  name="name" 
                  errorBorderColor="red.300"
                  value={values.name}
                  onBlur={onBlur}
                  onChange={handleChange}
                  className="border-2 border-gray-500 rounded w-60"
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
            <FormLabel>Email</FormLabel>
            <Input 
                  type="email" 
                  name="email" 
                  value={values.email} 
                  errorBorderColor="red.300"
                  onBlur={onBlur}
                  onChange={handleChange}
                  className="border-2 border-gray-500 rounded w-60"
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
            <FormLabel>Message</FormLabel>
            <Textarea 
                  type="text" 
                  name="message" 
                  rows={5}
                  value={values.message} 
                  errorBorderColor="red.300"
                  onBlur={onBlur}
                  onChange={handleChange}
                  className="border-2 border-gray-500 rounded w-60"
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <Button
                  variant ="outline"
                  colorScheme='blue'
                  isLoading={isLoading}
                  disabled={!values.name || !values.email || !values.message}
                  onClick={onSubmit}
                  className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded w-60"
          >SUBMIT</Button>
        </Container>
   </div>
      <div></div>
    </div>
    </div>
    </>
  )
}