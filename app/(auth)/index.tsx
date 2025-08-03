import { useSSO } from '@clerk/clerk-expo'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import * as AuthSession from 'expo-auth-session'
import * as Haptics from 'expo-haptics'
import * as WebBrowser from 'expo-web-browser'
import React, { useCallback, useEffect } from 'react'
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

export const useWarmUpBrowser = () => {
    useEffect(() => {
        void WebBrowser.warmUpAsync()



        return () => {
            void WebBrowser.coolDownAsync()
        }
    }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function Page() {
    useWarmUpBrowser()
    const { startSSOFlow } = useSSO()

    const onPress = useCallback(async () => {
        try {
            // Haptic feedback for button press
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

            const { createdSessionId, setActive } = await startSSOFlow({
                strategy: 'oauth_google',
                redirectUrl: AuthSession.makeRedirectUri({
                    scheme: 'medstep',
                    path: '/sso-callback',
                }),
            })

            if (createdSessionId) {
                setActive!({ session: createdSessionId })
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2))
        }
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-baby_powder">
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fffffb"
                translucent={false}
            />

            {/* Subtle decorative elements */}
            <View className="absolute top-16 right-6 w-2 h-2 bg-french_gray/30 rounded-full" />
            <View className="absolute top-28 right-12 w-1 h-1 bg-light_red/40 rounded-full" />
            <View className="absolute bottom-32 left-8 w-3 h-3 bg-french_gray/20 rounded-full" />

            <View className="flex-1 justify-center items-center px-6 pb-8">
                {/* Header Logo - Centered and Larger */}
                <Animated.View
                    entering={FadeInUp.delay(200).duration(800)}
                    className="items-center mb-8"
                >
                    <View className="items-center justify-center mb-6">
                        <Image
                            source={require('../../assets/images/splash-icon.png')}
                            style={{ width: 250, height: 250 }}
                            resizeMode="contain"
                        />
                    </View>
                </Animated.View>

                {/* Welcome Text */}
                <Animated.View
                    entering={FadeInUp.delay(400).duration(800)}
                    className="items-center mb-8"
                >
                    <Text className="text-4xl font-poppins-bold text-french_gray-100 mb-6 text-center">
                        Welcome to Excellence
                    </Text>
                    <Text className="text-xl font-poppins text-french_gray-400 text-center leading-5 px-4 mb-10">
                        Join thousands of medical students mastering{'\n'}
                        their exams with expert-curated content
                    </Text>
                </Animated.View>

                {/* Sign In Button with Google Icon */}
                <Animated.View
                    entering={FadeInDown.delay(600).duration(800)}
                    className="w-full px-4 mb-4"
                >
                    <TouchableOpacity
                        onPress={onPress}
                        className="bg-baby_powder border-2 border-light_red rounded-xl py-5 px-6 flex-row items-center justify-center"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                        }}
                    >
                        <AntDesign name="google" size={20} color="#ff6b6c" />
                        <Text className="text-base font-poppins-semibold text-light_red ml-3">
                            Continue with Google
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* Terms and Privacy Policy */}
                <Animated.View
                    entering={FadeInUp.delay(700).duration(800)}
                    className="px-6 mb-6"
                >
                    <Text className="text-xs font-poppins text-french_gray-400 text-center leading-4 mb-20">
                        By continuing, you agree to our{' '}
                        <Text className="text-light_red font-poppins-medium">Terms of Service</Text>
                        {' '}and{' '}
                        <Text className="text-light_red font-poppins-medium">Privacy Policy</Text>
                    </Text>
                </Animated.View>

                {/* Features Preview - Professional */}
                <Animated.View
                    entering={FadeInUp.delay(800).duration(800)}
                    className="flex-row justify-center space-x-10 mb-6 gap-4"
                >
                    <View className="items-center">
                        <View className="w-10 h-10 bg-french_gray-800 rounded-xl items-center justify-center mb-2">
                            <MaterialIcons name="quiz" size={18} color="#b8b8d1" />
                        </View>
                        <Text className="text-xs font-poppins text-french_gray-400 ">10K+ MCQs</Text>
                    </View>

                    <View className="items-center">
                        <View className="w-10 h-10 bg-french_gray-800 rounded-xl items-center justify-center mb-2">
                            <MaterialIcons name="trending-up" size={18} color="#b8b8d1" />
                        </View>
                        <Text className="text-xs font-poppins text-french_gray-400 ">Track Progress</Text>
                    </View>

                    <View className="items-center">
                        <View className="w-10 h-10 bg-french_gray-800 rounded-xl items-center justify-center mb-2">
                            <MaterialIcons name="school" size={18} color="#b8b8d1" />
                        </View>
                        <Text className="text-xs font-poppins text-french_gray-400">Expert Content</Text>
                    </View>
                </Animated.View>

                {/* Professional Footer */}
                <Animated.View
                    entering={FadeInUp.delay(1000).duration(800)}
                    className="mt-4"
                >
                    <Text className="text-xs font-poppins text-french_gray-500 text-center">
                        Trusted by 50,000+ Medical Students Worldwide
                    </Text>
                </Animated.View>
            </View>
        </SafeAreaView>
    )
}