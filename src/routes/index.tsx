import { Screen } from '../components/Screen';

import { StackNavigator } from '../context/navigation';

import { Tela1 } from '../screens/Tela1';
import { Tela2 } from '../screens/Tela2';
import { Tela3 } from '../screens/Tela3';
import { Tela4 } from '../screens/Tela4';


export const Routes = () => {
  return (
    <StackNavigator>
      <Screen name='tela1' component={Tela1} />
      <Screen name='tela2' component={Tela2} />
      <Screen name='tela3' component={Tela3} />
      <Screen name='tela4' component={Tela4} />
    </StackNavigator>
  )
}
