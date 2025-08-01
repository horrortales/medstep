import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'NotoSansCondensed-Regular': require('../assets/fonts/NotoSans_Condensed-Regular.ttf'),
    'NotoSansCondensed-Light': require('../assets/fonts/NotoSans_Condensed-Light.ttf'),
    'NotoSansCondensed-Medium': require('../assets/fonts/NotoSans_Condensed-Medium.ttf'),
    'NotoSansCondensed-Bold': require('../assets/fonts/NotoSans_Condensed-Bold.ttf'),
    'NotoSansCondensed-SemiBold': require('../assets/fonts/NotoSans_Condensed-SemiBold.ttf'),
    'NotoSansCondensed-Black': require('../assets/fonts/NotoSans_Condensed-Black.ttf'),
    'NotoSansCondensed-Thin': require('../assets/fonts/NotoSans_Condensed-Thin.ttf'),
    'NotoSansCondensed-ExtraBold': require('../assets/fonts/NotoSans_Condensed-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Stack />;
}
