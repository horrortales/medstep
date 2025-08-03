import { useSSO } from '@clerk/clerk-expo'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import * as AuthSession from 'expo-auth-session'
import * as Haptics from 'expo-haptics'
import * as WebBrowser from 'expo-web-browser'
import React, { useCallback, useEffect } from 'react'
import { Image, ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'

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
        <ImageBackground
            source={require('../../assets/images/bgimage.png')}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            {/* Dark overlay for better text readability */}
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
            />

            <SafeAreaView className="flex-1">
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent={true}
                />

                <View className="flex-1 justify-between px-6 py-14">
                    {/* Top Section - Logo and Branding */}
                    <Animated.View
                        entering={FadeInUp.delay(200).duration(800)}
                        className="items-center pt-12"
                    >
                        <View className="items-center justify-center mb-0">
                            <Image
                                source={require('../../assets/images/medlogin.png')}
                                style={{ width: 400, height: 400 }}
                                resizeMode="contain"
                            />
                        </View>


                    </Animated.View>

                    {/* Center Section - Main Content Card */}
                    <Animated.View
                        entering={FadeInUp.delay(400).duration(800)}
                        className="mx-4"
                    >
                        <View
                            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-5"
                            style={{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 10 },
                                shadowOpacity: 0.3,
                                shadowRadius: 20,
                                elevation: 10,
                            }}
                        >
                            <Text className="text-3xl font-poppins-bold text-white text-center mb-4">
                                Welcome Back
                            </Text>
                            <Text className="text-base font-poppins text-white/90 text-center mb-8 leading-6">
                                Join thousands of medical students mastering their exams with expert-curated content
                            </Text>

                            {/* Sign In Button */}
                            <TouchableOpacity
                                onPress={onPress}
                                className="bg-white rounded-2xl py-4 px-6 flex-row items-center justify-center mb-6"
                                style={{
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 8,
                                    elevation: 5,
                                }}
                            >
                                <AntDesign name="google" size={22} color="#4285F4" />
                                <Text className="text-lg font-poppins-semibold text-gray-800 ml-3">
                                    Continue with Google
                                </Text>
                            </TouchableOpacity>

                            {/* Features Grid */}
                            <View className="flex-row justify-between mb-6">
                                <View className="items-center flex-1">
                                    <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center mb-2">
                                        <MaterialIcons name="quiz" size={20} color="white" />
                                    </View>
                                    <Text className="text-xs font-poppins-medium text-white text-center">
                                        10K+ MCQs
                                    </Text>
                                </View>

                                <View className="items-center flex-1">
                                    <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center mb-2">
                                        <MaterialIcons name="trending-up" size={20} color="white" />
                                    </View>
                                    <Text className="text-xs font-poppins-medium text-white text-center">
                                        Progress Tracking
                                    </Text>
                                </View>

                                <View className="items-center flex-1">
                                    <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center mb-2">
                                        <MaterialIcons name="school" size={20} color="white" />
                                    </View>
                                    <Text className="text-xs font-poppins-medium text-white text-center">
                                        Expert Content
                                    </Text>
                                </View>
                            </View>

                            {/* Terms */}
                            <Text className="text-xs font-poppins text-white/70 text-center leading-4">
                                By continuing, you agree to our{' '}
                                <Text className="text-white font-poppins-medium underline">Terms of Service</Text>
                                {' '}and{' '}
                                <Text className="text-white font-poppins-medium underline">Privacy Policy</Text>
                            </Text>
                        </View>
                    </Animated.View>

                    {/* Bottom Section - Trust Badge */}
                    <Animated.View
                        entering={FadeInUp.delay(600).duration(800)}
                        className="items-center pb-4"
                    >
                        <View className="flex-row items-center mb-2">
                            <MaterialIcons name="verified" size={16} color="white" />
                            <Text className="text-sm font-poppins-medium text-white ml-2">
                                Trusted Platform
                            </Text>
                        </View>
                        <Text className="text-xs font-poppins text-white/80 text-center">
                            50,000+ Medical Students Worldwide
                        </Text>
                    </Animated.View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}