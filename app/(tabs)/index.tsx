import SignOutButton from '@/components/SignOutButton'
import { useUser } from '@clerk/clerk-expo'
import { StatusBar, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Page() {
  const { user } = useUser()

  return (
    <SafeAreaProvider>
        <StatusBar
                barStyle="dark-content"
                backgroundColor="#fffffb"
                translucent={false}
            />

<View className="flex-1 items-center justify-center bg-baby_powder p-6">
        
        <Text className="text-3xl font-poppins-bold text-ultra_violet mb-4">
          Welcome to MEDSTEP!
        </Text>
        <Text className="text-lg font-poppins text-french_gray-300 mb-8">
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
        <SignOutButton />
      </View>
    </SafeAreaProvider>
    
    
  )
}