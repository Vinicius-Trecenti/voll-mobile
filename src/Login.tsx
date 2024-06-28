import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';


export default function Login({ navigation }) {
    return (
        <VStack flex={1} alignItems="center" p={5} background="white" justifyContent={"center"}>
            <Image source={Logo} alt="logo Voll" />

            <Titulo>Faça Login em sua conta!</Titulo>

            <Box>
                <EntradaTexto label='Email' placeholder="Insira seu email..." />
                <EntradaTexto label='Password' placeholder="Insira sua senha" />
            </Box>

            <Botao>Entrar</Botao>

            <Link mt={3}>Esqueceu sua senha?</Link>

            <Box flexDirection="row" w="100%" justifyContent={"center"} mt={8}>
                <Text>Ainda não possui cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color="blue.500">
                        Faça seu cadastro!
                    </Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}


