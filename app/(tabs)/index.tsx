import { useUser } from '@clerk/clerk-expo'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import Animated, { BounceIn, FadeInLeft, FadeInRight, FadeInUp, SlideInUp } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

export default function Dashboard() {
    const { user } = useUser()
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

    const currentHour = new Date().getHours()
    const greeting = currentHour < 12 ? 'Good morning' : currentHour < 17 ? 'Good afternoon' : 'Good evening'
    const firstName = user?.firstName || 'Student'

    const dummyMCQ = {
        question: "Which of the following is the most common cause of myocardial infarction?",
        options: [
            { id: 'A', text: 'Coronary artery spasm' },
            { id: 'B', text: 'Atherosclerotic plaque rupture' },
            { id: 'C', text: 'Coronary embolism' },
            { id: 'D', text: 'Coronary dissection' }
        ],
        correctAnswer: 'B',
        explanation: 'Atherosclerotic plaque rupture is the most common cause of myocardial infarction, accounting for approximately 70% of cases.'
    }

    return (
        <SafeAreaView className="flex-1 bg-slate-50" edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

            {/* Professional Industry-Standard Header */}
            <Animated.View
                entering={SlideInUp.duration(600).springify()}
                className="bg-white"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.05,
                    shadowRadius: 3,
                    elevation: 1,
                }}
            >
                {/* Compact Header */}
                <View className="flex-row items-center justify-between px-6 py-4">
                    {/* Greeting Section */}
                    <Animated.View entering={FadeInLeft.delay(200).duration(600)} className="flex-1">
                        <Text className="text-xl font-poppins-bold text-gray-900">
                            {greeting}, {firstName}
                        </Text>
                        <Text className="text-sm font-poppins text-gray-600 mt-1">
                            Continue your medical education journey
                        </Text>
                    </Animated.View>

                    {/* Navigation Icons */}
                    <Animated.View
                        entering={FadeInRight.delay(300).duration(600)}
                        className="flex-row items-center space-x-3"
                    >
                        {/* Search Icon */}
                        <TouchableOpacity className="p-2">
                            <MaterialIcons name="search" size={22} color="#6b7280" />
                        </TouchableOpacity>

                        {/* Notifications */}
                        <TouchableOpacity className="relative p-2">
                            <MaterialIcons name="notifications-none" size={22} color="#6b7280" />
                            <Animated.View
                                entering={BounceIn.delay(500)}
                                className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"
                            />
                        </TouchableOpacity>

                        {/* Profile Avatar */}
                        <TouchableOpacity>
                            {user?.imageUrl ? (
                                <Animated.Image
                                    entering={FadeInRight.delay(400)}
                                    source={{ uri: user.imageUrl }}
                                    className="w-8 h-8 rounded-full"
                                />
                            ) : (
                                <Animated.View
                                    entering={FadeInRight.delay(400)}
                                    className="w-8 h-8 rounded-full bg-indigo-500 items-center justify-center"
                                >
                                    <Text className="text-white font-poppins-bold text-xs">
                                        {firstName.charAt(0).toUpperCase()}
                                    </Text>
                                </Animated.View>
                            )}
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </Animated.View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

                {/* Enhanced Today's Overview */}
                <View className="px-6 py-6">


                    <Animated.View
                        entering={FadeInUp.delay(400).duration(800)}
                        className="bg-white rounded-2xl p-8 mb-6 shadow-lg border border-gray-100"
                        style={{
                            shadowColor: '#6366f1',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.15,
                            shadowRadius: 4,
                            elevation: 2,
                        }}
                    >
                        <View className="flex-row items-center justify-between">
                            <View className="flex-1">
                                <View className="flex-row items-center mb-4">
                                    <View className="w-14 h-14 bg-indigo-100 rounded-2xl items-center justify-center mr-4">
                                        <MaterialIcons name="quiz" size={28} color="#6366f1" />
                                    </View>
                                    <View>
                                        <Text className="text-xl font-poppins-bold text-gray-900">Questions Solved</Text>
                                        <Text className="text-base font-poppins text-gray-600">Today's achievement</Text>
                                    </View>
                                </View>
                                <Text className="text-4xl font-poppins-bold text-indigo-600 mb-3">24</Text>
                                <View className="flex-row items-center mb-4">
                                    <MaterialIcons name="trending-up" size={20} color="#10b981" />
                                    <Text className="text-base font-poppins-medium text-green-600 ml-2">+12% from yesterday</Text>
                                </View>
                                <View className="bg-gray-200 rounded-full h-3">
                                    <Animated.View
                                        entering={FadeInRight.delay(800).duration(1000)}
                                        className="bg-light_red-500 rounded-full h-3"
                                        style={{ width: '87%' }}
                                    />
                                </View>
                            </View>

                            <View className="ml-8 items-center">
                                <View className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full items-center justify-center mb-4"
                                    style={{ backgroundColor: '#10b981' }}
                                >
                                    <Text className="text-2xl font-poppins-bold text-white">87%</Text>
                                </View>
                                <Text className="text-lg font-poppins-bold text-gray-900">Accuracy</Text>
                                <Text className="text-base font-poppins text-gray-600">Excellent!</Text>
                            </View>
                        </View>
                    </Animated.View>

                    {/* Professional Study Categories */}
                    <Animated.View
                        entering={FadeInUp.delay(600).duration(800)}
                        className="mb-6"
                    >
                        <View className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            {/* Topic of the Day */}
                            <TouchableOpacity className="flex-row items-center px-6 py-4 border-b border-gray-100">
                                <View className="w-12 h-12 bg-blue-100 rounded-2xl items-center justify-center mr-4">
                                    <MaterialIcons name="today" size={24} color="#3b82f6" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-lg font-poppins-bold text-gray-900">Topic of the Day</Text>
                                    <Text className="text-sm font-poppins text-gray-600">Cardiovascular System</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={20} color="#9ca3af" />
                            </TouchableOpacity>

                            {/* Daily Capsule */}
                            <TouchableOpacity className="flex-row items-center px-6 py-4 border-b border-gray-100">
                                <View className="w-12 h-12 bg-green-100 rounded-2xl items-center justify-center mr-4">
                                    <MaterialIcons name="medical-services" size={24} color="#10b981" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-lg font-poppins-bold text-gray-900">Daily Capsule</Text>
                                    <Text className="text-sm font-poppins text-gray-600">Quick medical facts & tips</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={20} color="#9ca3af" />
                            </TouchableOpacity>

                            {/* Clinical PYQ's */}
                            <TouchableOpacity className="flex-row items-center px-6 py-4">
                                <View className="w-12 h-12 bg-purple-100 rounded-2xl items-center justify-center mr-4">
                                    <MaterialIcons name="assignment" size={24} color="#8b5cf6" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-lg font-poppins-bold text-gray-900">Clinical PYQ's</Text>
                                    <Text className="text-sm font-poppins text-gray-600">Previous year questions</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={20} color="#9ca3af" />
                            </TouchableOpacity>
                        </View>
                    </Animated.View>

                    {/* Enhanced Quick Practice */}

                    <Animated.View
                        entering={FadeInUp.delay(800).duration(800)}
                        className="bg-white rounded-2xl p-8 mb-6 shadow-lg border border-gray-100"
                        style={{
                            shadowColor: '#8b5cf6',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.15,
                            shadowRadius: 4,
                            elevation: 2,
                        }}
                    >
                        <View className="flex-row items-center justify-between mb-6">
                            <View className="flex-row items-center">

                                <Text className="text-xl font-poppins-bold text-gray-900">Daily Challenge</Text>
                            </View>
                            <View className="bg-purple-100 px-4 py-2 rounded-full">
                                <Text className="text-sm font-poppins-bold text-purple-700">Cardiology</Text>
                            </View>
                        </View>

                        <Text className="text-lg font-poppins-medium text-gray-800 mb-6 leading-7">
                            {dummyMCQ.question}
                        </Text>

                        <View className="space-y-3 mb-4">
                            {dummyMCQ.options.map((option, index) => (
                                <TouchableOpacity
                                    key={option.id}
                                    onPress={() => setSelectedAnswer(option.id)}
                                    className={`p-4 rounded-lg border ${index < dummyMCQ.options.length - 1 ? 'mb-3' : ''} ${selectedAnswer === option.id
                                        ? selectedAnswer === dummyMCQ.correctAnswer
                                            ? 'border-green-500 bg-green-50'
                                            : 'border-red-500 bg-red-50'
                                        : selectedAnswer && option.id === dummyMCQ.correctAnswer
                                            ? 'border-green-500 bg-green-50'
                                            : 'border-gray-200 bg-gray-50'
                                        }`}
                                >
                                    <View className="flex-row items-center">
                                        <View className={`w-5 h-5 rounded-full border items-center justify-center mr-3 ${selectedAnswer === option.id
                                            ? selectedAnswer === dummyMCQ.correctAnswer
                                                ? 'border-green-500 bg-green-500'
                                                : 'border-red-500 bg-red-500'
                                            : selectedAnswer && option.id === dummyMCQ.correctAnswer
                                                ? 'border-green-500 bg-green-500'
                                                : 'border-gray-300'
                                            }`}>
                                            <Text className={`text-xs font-poppins-bold ${(selectedAnswer === option.id && selectedAnswer === dummyMCQ.correctAnswer) ||
                                                (selectedAnswer && option.id === dummyMCQ.correctAnswer)
                                                ? 'text-white'
                                                : selectedAnswer === option.id
                                                    ? 'text-white'
                                                    : 'text-gray-600'
                                                }`}>
                                                {option.id}
                                            </Text>
                                        </View>
                                        <Text className={`flex-1 text-sm font-poppins ${selectedAnswer === option.id
                                            ? selectedAnswer === dummyMCQ.correctAnswer
                                                ? 'text-green-800'
                                                : 'text-red-800'
                                            : selectedAnswer && option.id === dummyMCQ.correctAnswer
                                                ? 'text-green-800'
                                                : 'text-gray-700'
                                            }`}>
                                            {option.text}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {selectedAnswer && (
                            <View className={`p-4 rounded-lg border ${selectedAnswer === dummyMCQ.correctAnswer
                                ? 'bg-green-50 border-green-200'
                                : 'bg-red-50 border-red-200'
                                }`}>
                                <View className="flex-row items-center mb-2">
                                    <Ionicons
                                        name={selectedAnswer === dummyMCQ.correctAnswer ? "checkmark-circle" : "close-circle"}
                                        size={18}
                                        color={selectedAnswer === dummyMCQ.correctAnswer ? "#10b981" : "#ef4444"}
                                    />
                                    <Text className={`font-poppins-semibold ml-2 text-sm ${selectedAnswer === dummyMCQ.correctAnswer ? 'text-green-800' : 'text-red-800'
                                        }`}>
                                        {selectedAnswer === dummyMCQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                                    </Text>
                                </View>
                                <Text className="text-sm font-poppins text-gray-700 leading-5">
                                    {dummyMCQ.explanation}
                                </Text>
                            </View>
                        )}
                    </Animated.View>

                    {/* Study Actions */}
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">Continue Studying</Text>

                    <View className="space-y-3 mb-6">
                        <TouchableOpacity className="bg-white rounded-xl p-4 border border-gray-100 flex-row items-center">
                            <View className="w-10 h-10 bg-indigo-100 rounded-lg items-center justify-center mr-4">
                                <Ionicons name="play-circle" size={20} color="#6366f1" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-base font-poppins-semibold text-gray-900">Practice Questions</Text>
                                <Text className="text-sm text-gray-500">Continue where you left off</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white rounded-xl p-4 border border-gray-100 flex-row items-center">
                            <View className="w-10 h-10 bg-blue-100 rounded-lg items-center justify-center mr-4">
                                <Ionicons name="clipboard" size={20} color="#3b82f6" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-base font-poppins-semibold text-gray-900">Mock Exam</Text>
                                <Text className="text-sm text-gray-500">Full-length practice test</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white rounded-xl p-4 border border-gray-100 flex-row items-center">
                            <View className="w-10 h-10 bg-green-100 rounded-lg items-center justify-center mr-4">
                                <Ionicons name="book" size={20} color="#10b981" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-base font-poppins-semibold text-gray-900">Review Notes</Text>
                                <Text className="text-sm text-gray-500">Study materials & summaries</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                        </TouchableOpacity>
                    </View>

                    {/* Recent Activity */}
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">Recent Activity</Text>

                    <View className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                        <View className="p-4 border-b border-gray-100">
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-green-500 rounded-full mr-3"></View>
                                <View className="flex-1">
                                    <Text className="text-sm font-poppins-semibold text-gray-900">
                                        Cardiology Quiz • 92%
                                    </Text>
                                    <Text className="text-xs text-gray-500">2 hours ago</Text>
                                </View>
                            </View>
                        </View>

                        <View className="p-4 border-b border-gray-100">
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-blue-500 rounded-full mr-3"></View>
                                <View className="flex-1">
                                    <Text className="text-sm font-poppins-semibold text-gray-900">
                                        Mock Test #12 • 85%
                                    </Text>
                                    <Text className="text-xs text-gray-500">1 day ago</Text>
                                </View>
                            </View>
                        </View>

                        <View className="p-4">
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-amber-500 rounded-full mr-3"></View>
                                <View className="flex-1">
                                    <Text className="text-sm font-poppins-semibold text-gray-900">
                                        Anatomy Achievement • 90%
                                    </Text>
                                    <Text className="text-xs text-gray-500">2 days ago</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >
    )
}