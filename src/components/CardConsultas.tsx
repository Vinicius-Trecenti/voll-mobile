import { Text, Avatar, VStack } from 'native-base';
import { Botao } from './Botao';

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string; //significa que nao é obrigatório
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

export function CardConsultas({
    nome,
    foto,
    especialidade,
    data,
    foiAtendido,
    foiAgendado

}: CardProps) {
    return (
        <VStack w="100%" p="5" bg={foiAtendido ? 'blue.100' : 'white'} borderRadius={"lg"} shadow={2}mb={5}>

            <VStack flexDir={"row"}>
                <Avatar size="lg" source={{ uri: foto }} />
                <VStack pl={4}>
                    <Text fontSize={"md"} bold>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
                
            </VStack>

            <Botao mt={4}>
                {foiAgendado ? 'Cancelar' : 'Agendar consulta'}
            </Botao>
        </VStack>
    )
}