import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function SSOCallback() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect to main app after successful authentication
      router.replace('/(tabs)');
    } else {
      // If not signed in, go back to auth
      router.replace('/(auth)');
    }
  }, [isSignedIn, router]);

  return (
    <View className="flex-1 items-center justify-center bg-baby_powder">
      <Text className="text-lg font-poppins text-ultra_violet">
        Completing sign in...
      </Text>
    </View>
  );
}