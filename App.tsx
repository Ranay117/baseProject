import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeManager} from './src/components/ThemeManager';
import {store} from './src/redux/state';
import {ThemeModeSwitch} from './src/components/themeModeSwitch/ThemeModeSwitch';
const App = () => (
  <Provider store={store}>
    <ThemeManager>
      <SafeAreaView>
        <ThemeModeSwitch />
      </SafeAreaView>
    </ThemeManager>
  </Provider>
);
export default App;