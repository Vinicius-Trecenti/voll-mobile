import { VStack, Box, ScrollView } from "native-base"
import { EntradaTexto } from "../components/EntradaTexto"
import { Botao } from "../components/Botao"
import { CardConsultas } from "../components/CardConsultas"
import { Titulo } from "../components/Titulo"

export default function Explorar() { 
    return (
        <ScrollView flex={1} bgColor="white">

            <VStack flex={1} alignItems="flex-start" justifyContent={"flex-start"} bg={"white"} borderRadius={"lg"} shadow={2} p={5}>

                <Box w="100%" borderRadius={"lg"} p="3" mt={5} shadow={1} borderRightRadius={'md'} bg={"white"}>
                    <EntradaTexto placeholder="Digite a especialidade" />
                    <EntradaTexto placeholder="Digite sua localização" />
                    <Botao mt={3} mb={3}>Buscar</Botao>
                </Box>

                <Titulo color={"blue.500"} alignSelf={"center"} mb={2}>Resultado da busca</Titulo>

                <CardConsultas nome="Dr. Vinicius Trecenti" especialidade="Cardiologista"
                    foto="https://github.com/Vinicius-Trecenti.png"
                    data="08/07/2024"
                    //passar se foi atendido ou agendado
                    foiAtendido
                />

                <CardConsultas nome="Dr. Vinicius Trecenti" especialidade="Cardiologista"
                    foto="https://github.com/Vinicius-Trecenti.png"
                    data="08/07/2024"
                    //passar se foi atendido ou agendado
                    foiAtendido
                />

                <CardConsultas nome="Dr. Vinicius Trecenti" especialidade="Cardiologista"
                    foto="https://github.com/Vinicius-Trecenti.png"
                    data="08/07/2024"
                    //passar se foi atendido ou agendado
                    foiAtendido
                    />
            </VStack>
        </ScrollView>
    )
}