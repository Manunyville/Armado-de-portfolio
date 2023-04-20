import './servicio.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/codigoweb.png'
import diseño from '../../assets/img/Diseñodepagina.png'
import Diseñoweb from '../../assets/img/desarrolloweb.png'
import Fotaki from '../../assets/img/codigoweb.png'
import Azderecha from '../../assets/img/ImagenazulD.png'

const Service = () => {

    return (

        <>
            <Container width="full" id='misServicios'>
                <VStack gap="15px">
                    <VStack marginTop="20px">
                        <Text color={'#0C7FB0'}>Services I provide</Text>
                        <Heading>My Services</Heading>
                    </VStack>
                    <HStack height="300px" width="1200px" justify={"space-evenly"}>
                        <Card className='cardServ' bg={'#F9F9F9'} height="150px" width="220px">
                            <Stack>
                                <Image className='webImg' src={Web} />
                            </Stack>
                            <CardBody>
                                <Heading size='md'> Website developement </Heading>
                                <Text>Yo transformo ideas complejas en paginas web sencillas de utilizar.</Text>
                            </CardBody>
                        </Card>
                        <Card className='cardServ' bg={'#F9F9F9'} height="150px" width="220px">
                            <Stack>
                                <Image className='webImg' src={Diseñoweb} />
                            </Stack>
                            <CardBody>
                                <Heading size='md'>Website design</Heading>
                                <Text>Realizo los diseños de las paginas de acuerdo a lo que el cliente desee. </Text>
                            </CardBody>
                        </Card>
                        <Card bg={'#F9F9F9'} className='cardServ' height="150px" width="220px" >
                            <Stack>
                                <Image className='webImg' src={diseño} />
                            </Stack>
                            <CardBody>
                                <Heading size='md'>Content creation </Heading>
                                <Text>Creo contenido para marcas con el objetivo de impulsar sus ventas .</Text>
                            </CardBody>
                        </Card>
                    </HStack>
                </VStack>
            </Container>
            <Container width='1200px' id='proyectos'>
                <VStack >
                    <VStack>
                        <Stack >
                            <Image src={Azderecha} className='imgAbs' marginLeft="800px" />
                        </Stack>
                        <Text color={'#0C7FB0'}>Recent projects</Text>
                        <Heading>My Portfolio</Heading>
                    </VStack>
                    <HStack gap='75px'>
                        <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px'>
                            <CardHeader>
                                <Image src={Fotaki} height='150px' />
                                <Heading size='md'> Portfolio proyecto</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Es una version anterior del Portfolio actual</Text>
                                <Button marginTop='4px' as={motion.button} paddingX="65px" whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                            </CardBody>
                        </Card>
                        <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px'>
                            <CardHeader>
                                <Image src={Fotaki} height='150px' />
                                <Heading size='md'> Forniture web</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>I create a web page for a forniture market</Text>
                                <Button marginTop='4px' as={motion.button} paddingX='65px' whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                            </CardBody>
                        </Card>
                        <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px'>
                            <CardHeader>
                                <Image src={Fotaki} height='150px' />
                                <Heading size='md'>Promove torpedo deluxe</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Video presentacion nuevo modelo de mate deluxe!</Text>
                                <Button marginTop='4px' as={motion.button} paddingX='65px' whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                            </CardBody>
                        </Card>
                    </HStack>
                    <Stack>
                        <Button marginTop='4px' as={motion.button} paddingX='10px' whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'> View All</Button>
                    </Stack>
                </VStack>
            </Container>
        </>
    )
}
export default Service