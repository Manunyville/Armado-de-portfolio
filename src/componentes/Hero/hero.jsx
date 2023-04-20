import React from "react";
import './hero.css'
import Foto from '../../assets/img/FotodelTP.png'
import { motion } from "framer-motion"
import { Stack, HStack, VStack, Button, ButtonGroup, Text, Heading, Image, Card, CardHeader, CardBody, Container } from '@chakra-ui/react'
import { RiMedalLine } from "react-icons/ri";
import { FaAward, FaUsers, FaTrophy } from "react-icons/fa";


const Hero = () => {

    return (
        <>
        <Container width={"full"} >
        <Stack  padding="15px">
            <nav>
                <HStack gap="500px" justify={'center'}>
                    <Stack>
                        <Heading color={'#0C7FB0'} size='lg' >Portfolio</Heading>
                    </Stack>
                    <ButtonGroup spacing='25'>
                        <a href="#hero">

                            <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>
                                Home
                            </Button>
                        </a>
                        <a href="#about">

                            <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>
                                About
                            </Button>
                        </a>
                        <a href="#misServicios">

                            <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>
                                Services
                            </Button>
                        </a>
                        <a href="#proyectos">

                            <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#061820'} border={'none'} bg={'#FFFFFF'} variant='link'>
                                Portfolio
                            </Button>
                        </a>
                        <a href="#contact">

                            <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} bg={'#0C7FB0'} color={'#F9F9F9'} padding={4} border={'none'} borderRadius={5} size='xs'>
                                Contact me
                            </Button>
                        </a>
                    </ButtonGroup>
                </HStack>
                <hr />
            </nav>

        </Stack>
    </Container>
        <Container id="hero" width={"full"} margin="0">
            <Stack marginLeft="130px" gap="60px">
                <HStack width="1200px" justifyContent="space-around" >
                    <VStack>
                        <Stack>
                            <Text fontSize='xl' color={'#0C7FB0'}>Hello, I'm</Text>


                            <Heading size={"lg"}>Manuel Nyville</Heading>
                            <Heading fontSize='xl' color={'#0C7FB0'} >Front End Developer</Heading>
                            <Text color={'#6D7173'}>I am a Front end developer and content creator.</Text>
                        </Stack>

                        <ButtonGroup>
                            <a href="#contact">
                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>
                                    Hire me
                                </Button>
                            </a>
                            <a href="#proyectos">
                                <Button as={motion.button} whileHover={{ color: '#0C7FB0' }} color={'#0C7FB0'} colorScheme='teal' variant='outline' >
                                    See Portfolio
                                </Button>
                            </a>
                        </ButtonGroup>
                    </VStack>
                    <HStack >
                        <Stack >
                            <img src={Foto} className="fotoMia" />
                        </Stack>
                    </HStack>
                </HStack>
                <Stack justify={"space-evenly"} direction={"row"} width="1200px">
                    <Card as={motion.div} whileHover={{ scale: 1.2, color: '#A7D1E3' }} bg={'#F9F9F9'} className="cardHero" >
                        <CardHeader >
                            <Heading size='md' className="imgHero"> <RiMedalLine /> </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>0 Awards</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.2, color: '#A7D1E3' }} bg={'#F9F9F9'} className="cardHero">
                        <CardHeader>
                            <Heading size='md' className="imgHero">  <FaUsers /></Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>10+ Clients</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.2, color: '#A7D1E3' }} bg={'#F9F9F9'} className="cardHero">
                        <CardHeader>
                            <Heading size='md' className="imgHero"> <FaAward /> </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>02 Months experience</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.3, color: '#A7D1E3' }} bg={'#F9F9F9'} className="cardHero">
                        <CardHeader>
                            <Heading size='md' className="imgHero"> <FaTrophy /> </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>+10 Proyects</Text>
                        </CardBody>
                    </Card>

                </Stack>
            </Stack>
        </Container>
        </>


       
    )
}
export default Hero