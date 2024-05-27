import {VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox} from 'native-base'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';
import { useState } from 'react';
import Logo from './assets/Logo.png'

export default function Login() {

  const [numSecao, setNumSecao] = useState(0)
  const secoes= [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id:1, 
          label: 'Nome',
          placeholder: 'Insira seu nome completo...'
        },
        {
          id:2, 
          label: 'Email',
          placeholder: 'Insira seu email...'
        }
      ],
      checkbox: []
    },
    {
      id:2,
      titulo: 'Agora, mais alguns dados sobre você',
      entradaTexto: [
        {
          id:1,
          label: 'CPF',
          placeholder: 'Insira seu CPF...'
        },
        {
          id:2,
          label: 'Data de nascimento',
          placeholder: 'Insira sua data de nascimento...'
        }
      ],
      checkbox: []
    },
    {
      id:3,
      titulo: 'Para finalizar, quais são o seus planos? ',
      entradaTexto: [],	
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica',
        }, 
        {
          id: 2,
          value: 'Unimed',
        }
      ]
    }
  ]

  function avancarSecao(){
    if(numSecao < secoes.length -1){
      setNumSecao(numSecao + 1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }
  return (
    <VStack  flex={1} alignItems="center" p={5} background="white" justifyContent={"center"}>
      <Image source={Logo} alt="logo Voll" />

      <Titulo>{secoes[numSecao].titulo}</Titulo>

      <Box>  
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
              return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>

      <Box>  
        {
          secoes[numSecao].checkbox.map(checkbox => {
          return <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
          })
        } 
      </Box>

      { numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor={'gray.400'}>Voltar</Botao> }
      <Botao onPress={() => avancarSecao()} mt={4}>Avançar</Botao>
    </VStack>
  );
}


