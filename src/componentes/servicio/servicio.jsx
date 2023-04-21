import './servicio.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Web from '../../assets/img/codigoweb.png'
import diseño from '../../assets/img/Diseñodepagina.png'
import Diseñoweb from '../../assets/img/desarrolloweb.png'
import Fotaki from '../../assets/img/codigoweb.png'
import Azderecha from '../../assets/img/ImagenazulD.png'
import Five from '../../assets/img/fivestars.png'
import Comillas from '../../assets/img/comillas.png'
import Azul from '../../assets/img/imgabstractaizquierda.png'
import { FaUserLock } from 'react-icons/fa'
import marcos from '../../assets/img/Marcos.jpg'
import alexis from '../../assets/img/alexis.jpg'
import cami from '../../assets/img/Camila.jpeg'

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
                                <Heading size='md'>Web maintenance </Heading>
                                <Text>Me encargo de tareas de mantenimiento para optimizacion de la app web.</Text>
                            </CardBody>
                        </Card>
                    </HStack>
                </VStack>
            </Container>


            <Container width='full' id='proyectos'>
                <VStack >
                    <VStack>
                        <HStack >
                            <Image src={Azderecha} className='imgAbs' />
                        </HStack>
                        <Text color={'#0C7FB0'}>Recent projects</Text>
                        <Heading>My Portfolio</Heading>
                    </VStack>
                    <HStack gap='75px' className='stackPortfolio'>
                        <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px' className='cardsProyecto'>
                            <Stack>
                                <Image src={Fotaki} height='150px' />
                                <Heading size='md'> Portfolio proyecto</Heading>
                            </Stack>
                            <CardBody>
                                <Text>Es la version definitiva del Portfolio actual</Text>
                                <Button marginTop='4px' as={motion.button} paddingX="65px" whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                            </CardBody>
                        </Card>
                        <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px' className='cardsProyecto'>
                            <Stack>
                                <Image src={Fotaki} height='150px' />
                                <Heading size='md'> Forniture web</Heading>
                            </Stack>
                            <CardBody>
                                <Text>I create a web page for a forniture market</Text>
                                <Button marginTop='4px' as={motion.button} paddingX='65px' whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                            </CardBody>
                        </Card>
                        <Card width='270px' height='350px' bg={'#F9F9F9'} marginLeft='10px' className='cardsProyecto'>
                            <Stack>

                                <Image src={Fotaki} height='150px' />
                                <Heading size='md'>Hotel web</Heading>
                            
                            </Stack>
                            <CardBody>
                                <Text>Es una pagina web para un hotel de Mar del Plata.</Text>
                                <Button marginTop='4px' as={motion.button} paddingX='65px' whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View on github</Button>
                            </CardBody>
                        </Card>
                    </HStack>
                    <Stack>
                        <Button marginTop='4px' as={motion.button} paddingX='10px' whileHover={{ color: '#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'> View All</Button>
                    </Stack>
                </VStack>
            </Container>


            <Stack id='testimonios' width={'full'} margin="0 auto">
            <VStack   gap="45px" marginLeft="40px">
                <VStack>
                    <Text color={'#0C7FB0'} marginTop="20px">Client's feedback</Text>
                    <HStack>
                        <Image src={Azul} className='imgabstractaFeed' />
                    </HStack>
                    <Stack>
                        <Heading>Testimonials</Heading>
                    </Stack>
                </VStack>
                <HStack gap="30px" className='stackFeed' marginLeft="45px" margin="0 auto">
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} className='cardsFeedback' bg={'#F9F9F9'} width='300px' height='300px'>
                        <HStack gap={10}>
                            <Image className='imgFeed' src={cami} />
                            <Image src={Comillas} w='100px' className='comillasfeed'/>
                        </HStack>
                        <CardBody className='cardsFeedback'>
                            <Heading size='md'> Camila Moncada</Heading>
                            <Image src={Five} className='fiveStars' />
                            <Text>Manuel realiza trabajos muy buenos, todos fueron entregados en tiempo y forma; ademas trabaja muy bien con su equipo, sin duda volveria a contratarlos</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} className='cardsFeedback' bg={'#F9F9F9'} width='300px' height='300px'>
                        <HStack >
                            <Image className='imgFeed' src={alexis} />
                            <Image src={Comillas} w='100px' />
                        </HStack>
                        <CardBody className='cardsFeedback'>
                            <Heading size='md'>Alexis juncos</Heading>
                            <Image src={Five} className='fiveStars' />
                            <Text>Manuel se encargo de la promocion de mis productos materos y se dispararon las ventas!</Text>
                        </CardBody>
                    </Card>
                    <Card as={motion.div} whileHover={{ scale: 1.1, color: '#0C7FB0' }} bg={'#F9F9F9'} className='cardsFeedback' width='300px' height='300px'>
                        <HStack >
                            <Image className='imgFeed' src={marcos} />
                            <Image src={Comillas} w='100px' />
                        </HStack>
                        <CardBody className='cardsFeedback'>
                            <Heading size='md'>Marcos Servezinski </Heading>
                            <Image src={Five} className='fiveStars' />
                            <Text>Los trabajos que Manuel ha hecho son muy ingenios, las ideas que yo le dije el las tranformo tal cual yo me las imaginaga!</Text>
                        </CardBody>
                    </Card>
                </HStack>
                <VStack gap="15px">
                    <HStack justify={'space-around'}>

                    <Button as={motion.button} borderRadius='50%' bg={'#F9F9F9'} size='xs' whileHover={{ backgroundColor: '#0C7FB0' }}></Button>
                    <Button as={motion.button} borderRadius='50%' bg={'#F9F9F9'} size='xs' whileHover={{ backgroundColor: '#0C7FB0' }}> </Button>
                    <Button as={motion.button} borderRadius='50%' bg={'#F9F9F9'} size='xs' whileHover={{ backgroundColor: '#0C7FB0' }}></Button>
                    </HStack>
                <VStack>
                    <Button arginTop='4px' as={motion.button} paddingX='10px'whileHover={{  color:'#0C7FB0' }} color={'#F9F9F9'} bg={'#0C7FB0'} variant='solid'>View all</Button>
                </VStack>
                </VStack>
            </VStack>
        </Stack>
        </>
    )
}
export default Service