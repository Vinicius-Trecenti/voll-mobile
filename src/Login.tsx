import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
export default function Login() {
  return (
    <VStack  flex={1} alignItems="center" p={5} background="white" justifyContent={"center"}>
      <Image source={Logo} alt="logo Voll" />

      <Titulo>Faça Login em sua conta!</Titulo>

      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="Insira seu email..." width="100%" borderRadius="lg" bgColor={"gray.100"} shadow={3}/>
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Password</FormControl.Label>
          <Input placeholder="Insira sua senha" width="100%" borderRadius="lg" bgColor={"gray.100"} shadow={3}/>
        </FormControl>
      </Box>

      <Button width="100%" mt={10} bg={"blue.800"} borderRadius="lg">
        Entrar
      </Button>

      <Link mt={3}>Esqueceu sua senha?</Link>

      <Box flexDirection="row" w="100%" justifyContent={"center"}  mt={8}>
        <Text>Ainda não possui cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


