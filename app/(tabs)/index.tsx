import Principal from '@/src/Principal';
import { StatusBar } from 'native-base';
import { NativeBaseProvider } from 'native-base'
import { TEMAS } from '@/src/styles/estilos';

export default function HomeScreen() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      <Principal/>
    </NativeBaseProvider>
  );
}
