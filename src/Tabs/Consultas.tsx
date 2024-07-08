import { VStack, Divider, ScrollView} from "native-base"
import { CardConsultas } from "../components/CardConsultas"
import { Titulo } from "../components/Titulo"
import { Botao } from "../components/Botao"

export default function Consultas() { 
    return (
        <ScrollView p="5">
            <Titulo color={"blue.500"}>Minhas Consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>
                Próximas Consultas
            </Titulo>

            <CardConsultas nome="Dr. Vinicius Trecenti" especialidade="Cardiologista"
                foto="https://github.com/Vinicius-Trecenti.png"
                data="08/07/2024"
                //passar se foi atendido ou agendado
                foiAgendado
            />

            <Divider mt={5} />

            <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>
                Consultas Passadas
            </Titulo>

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
        </ScrollView>
    )
}