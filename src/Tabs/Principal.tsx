import { VStack, Text, ScrollView, Image, Box, Divider } from "native-base"

import Logo from '../assets/Logo.png'
import { Titulo } from "../components/Titulo"
import { EntradaTexto } from "../components/EntradaTexto"
import { Botao } from "../components/Botao"

export default function Principal() { 
    return (
        <ScrollView  p="5">
            <Image source={Logo} alt="logo Voll" mt={5}/>
            <Titulo color={"blue.500"} alignSelf={"flex-start"}>Boas-Vindas!</Titulo>

            <Box w="100%" borderRadius={"lg"} p="3" mt={5} shadow={1} borderRightRadius={'md'} bg={"white"}>
                    <EntradaTexto placeholder="Digite a especialidade" />
                    <EntradaTexto placeholder="Digite sua localização" />
                    <Botao mt={3} mb={3}>Buscar</Botao>
            </Box>

            <Titulo color={"blue.800"} mt={5}>Depoimentos</Titulo>

            <Text mt={3} ml={3}>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Paisis, filhis, espiritis santis. Quem manda na minha terra sou euzis! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!

            Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Paisis, filhis, espiritis santis. A ordem dos tratores não altera o pão duris. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
            </Text>

            <Text alignSelf={"center"} fontWeight={"bold"} fontSize={"md"} mt={2}>
                Julio, 40 anos, São Paulo/SP
            </Text>

            <Divider mt={2} mb={5}/>
            
            <Text mt={3} ml={3}>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Paisis, filhis, espiritis santis. Quem manda na minha terra sou euzis! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!

            Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Paisis, filhis, espiritis santis. A ordem dos tratores não altera o pão duris. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
            </Text>

            <Text alignSelf={"center"} fontWeight={"bold"} fontSize={"md"} mt={2}>
                Roger, 35 anos, Minas Gerais/MG
            </Text>

            <Divider mt={2} mb={5} />
            
        </ScrollView>
    )
}