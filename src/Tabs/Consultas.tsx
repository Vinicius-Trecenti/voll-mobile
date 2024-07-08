import { VStack, Text } from "native-base"
import { CardConsultas } from "../components/CardConsultas"

export default function Consultas() { 
    return (
        <VStack p="5">
            <Text>Consultas</Text>
            <CardConsultas nome="Dr. Vinicius Trecenti" especialidade="Cardiologista"
                foto="https://github.com/Vinicius-Trecenti.png"
                data="08/07/2024"
                //passar se foi atendido ou agendado
                />
        </VStack>
    )
}