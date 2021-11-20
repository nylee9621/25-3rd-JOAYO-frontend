import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import LoadFonts from './src/components/LoadFonts/LoadFonts';
import Root from '@/navigations/Root';
import { Store } from '@/store/reducers';

const App: React.FC = () => {
  const [isLoadFont, setIsLoadFont] = useState<boolean>(false);

  if (!isLoadFont) return <LoadFonts setIsLoadFont={setIsLoadFont} />;
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
