import "@/global.css";
import { useAuth } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';

export default function App() {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading while auth state is being determined
  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-poppins text-ultra_violet">Loading...</Text>
      </View>
    );
  }

  // Redirect based on authentication status
  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  } else {
    return <Redirect href="/(auth)" />;
  }
}