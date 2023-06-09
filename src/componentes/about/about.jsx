import './about.css'
import React from 'react'
import { Stack, HStack, VStack, Flex, Button, ButtonGroup, Text, Container, Heading, Image } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Foto from '../../assets/img/Aboutyo.png'

const About = () => {

    return (


        <Stack width='full' id='about' margin="0" bg={'#F9F9F9'} >
            <HStack w="1200px" gap="120px" marginTop="15px">
                <HStack marginLeft="220px">
                    <Image src={Foto} w="1400px" height="auto"/>
                </HStack>
                <VStack>
                    <Stack>
                        <Heading>About me</Heading>
                        <Heading size='lg' color={'#6D7173'}> 02 Meses de experiencia en desarrolo Front end</Heading>
                        <Text color={'#6D7173'}>Hola, yo soy Manuel, un desarrollador Front end, me encargo del desarrollo de paginas web y aplicaciones web de acuerdo a lo que el cliente proponga. Ademas transforma ideas complejas en paginas sencillas de utilizar. </Text>
                    </Stack>
                </VStack>
            </HStack>
        </Stack>

    )
}
export default About