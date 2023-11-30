import { View, StatusBar, BackHandler } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export const App = function () {

  const webviewRef = React.useRef<WebView>(null);

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      webviewRef.current?.goBack();
      return true;
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='#003355' />

      <WebView
        ref={webviewRef}
        source={{ uri: 'https://posso-misturar.vercel.app/' }}
      />

    </View>
  );
}