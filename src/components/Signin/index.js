import React from 'react'
import video from '../videos/video.mp4'
import { HeroBg } from '../HeroSection/HeroElements'
import { FormButton, FormInput, FormLabel, FormH1, FormContent, FormWrap, Form, Text, Container, Icon, VideoBg} from './SigninElement'

const SignIn = () => {
  return (
    <>
      <Container>
      <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
          <FormWrap>
            <Icon to="/">dolla</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
          </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;