import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, View } from 'react-native';

export default function SignOutButton() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to auth page after successful sign out
      router.replace('/(auth)');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}