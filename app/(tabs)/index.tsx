import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
        <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

            {/* Header with User Info and Notifications */}
            <View className="bg-white px-6 py-4 border-b border-gray-100">
                <View className="flex-row items-center justify-between mb-4">
                    <View className="flex-row items-center flex-1">
                        {user?.imageUrl ? (
                            <Image
                                source={{ uri: user.imageUrl }}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                        ) : (
                            <View className="w-12 h-12 rounded-full bg-light_red items-center justify-center mr-4">
                                <Text className="text-white font-poppins-bold text-lg">
                                    {firstName.charAt(0).toUpperCase()}
                                </Text>
                            </View>
                        )}
                        <View className="flex-1">
                            <Text className="text-lg font-poppins-bold text-gray-900">
                                {greeting}, {firstName}!
                            </Text>
                            <Text className="text-sm font-poppins text-gray-600">
                                Ready to ace your medical exams?
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity className="relative p-2">
                        <Ionicons name="notifications-outline" size={24} color="#374151" />
                        <View className="absolute -top-1 -right-1 w-5 h-5 bg-light_red rounded-full items-center justify-center">
                            <Text className="text-white text-xs font-poppins-bold">3</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

                {/* Stats Overview */}
                <View className="px-6 py-6">
                    <View className="flex-row justify-between mb-6">
                        <View className="bg-white rounded-2xl p-5 flex-1 mr-2 shadow-sm border border-gray-100">
                            <View className="flex-row items-center justify-between mb-3">
                                <View className="w-10 h-10 bg-blue-100 rounded-xl items-center justify-center">
                                    <Ionicons name="library-outline" size={20} color="#3b82f6" />
                                </View>
                                <Text className="text-xs font-poppins-medium text-gray-500 uppercase tracking-wide">Today</Text>
                            </View>
                            <Text className="text-2xl font-poppins-bold text-gray-900 mb-1">24</Text>
                            <Text className="text-sm font-poppins text-gray-600">Questions Solved</Text>
                            <View className="flex-row items-center mt-2">
                                <Ionicons name="trending-up" size={12} color="#10b981" />
                                <Text className="text-xs font-poppins-medium text-green-600 ml-1">+12% from yesterday</Text>
                            </View>
                        </View>

                        <View className="bg-white rounded-2xl p-5 flex-1 ml-2 shadow-sm border border-gray-100">
                            <View className="flex-row items-center justify-between mb-3">
                                <View className="w-10 h-10 bg-orange-100 rounded-xl items-center justify-center">
                                    <Ionicons name="flame-outline" size={20} color="#f97316" />
                                </View>
                                <Text className="text-xs font-poppins-medium text-gray-500 uppercase tracking-wide">Streak</Text>
                            </View>
                            <Text className="text-2xl font-poppins-bold text-gray-900 mb-1">7</Text>
                            <Text className="text-sm font-poppins text-gray-600">Days Active</Text>
                            <View className="flex-row items-center mt-2">
                                <Ionicons name="trophy-outline" size={12} color="#f59e0b" />
                                <Text className="text-xs font-poppins-medium text-amber-600 ml-1">Personal best!</Text>
                            </View>
                        </View>
                    </View>

                    {/* Daily MCQ Challenge */}
                    <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="flex-row items-center">
                                <View className="w-8 h-8 bg-purple-100 rounded-lg items-center justify-center mr-3">
                                    <Ionicons name="bulb-outline" size={16} color="#8b5cf6" />
                                </View>
                                <Text className="text-lg font-poppins-bold text-gray-900">Daily Challenge</Text>
                            </View>
                            <View className="bg-purple-100 px-3 py-1 rounded-full">
                                <Text className="text-xs font-poppins-bold text-purple-700">MCQ</Text>
                            </View>
                        </View>

                        <Text className="text-base font-poppins-medium text-gray-900 mb-4 leading-6">
                            {dummyMCQ.question}
                        </Text>

                        <View className="mb-4">
                            {dummyMCQ.options.map((option, index) => (
                                <TouchableOpacity
                                    key={option.id}
                                    onPress={() => setSelectedAnswer(option.id)}
                                    className={`p-4 rounded-xl border-2 ${index < dummyMCQ.options.length - 1 ? 'mb-4' : ''} ${selectedAnswer === option.id
                                        ? selectedAnswer === dummyMCQ.correctAnswer
                                            ? 'border-green-500 bg-green-50'
                                            : 'border-red-500 bg-red-50'
                                        : selectedAnswer && option.id === dummyMCQ.correctAnswer
                                            ? 'border-green-500 bg-green-50'
                                            : 'border-gray-200 bg-gray-50'
                                        }`}
                                >
                                    <View className="flex-row items-center">
                                        <View className={`w-6 h-6 rounded-full border-2 items-center justify-center mr-3 ${selectedAnswer === option.id
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
                                        <Text className={`flex-1 font-poppins ${selectedAnswer === option.id
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
                            <View className={`p-4 rounded-xl ${selectedAnswer === dummyMCQ.correctAnswer ? 'bg-green-50' : 'bg-red-50'
                                }`}>
                                <View className="flex-row items-center mb-2">
                                    <Ionicons
                                        name={selectedAnswer === dummyMCQ.correctAnswer ? "checkmark-circle" : "close-circle"}
                                        size={20}
                                        color={selectedAnswer === dummyMCQ.correctAnswer ? "#10b981" : "#ef4444"}
                                    />
                                    <Text className={`font-poppins-bold ml-2 ${selectedAnswer === dummyMCQ.correctAnswer ? 'text-green-800' : 'text-red-800'
                                        }`}>
                                        {selectedAnswer === dummyMCQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                                    </Text>
                                </View>
                                <Text className="text-sm font-poppins text-gray-700 leading-5">
                                    {dummyMCQ.explanation}
                                </Text>
                            </View>
                        )}
                    </View>

                    {/* Weekly Progress */}
                    <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
                        <View className="flex-row items-center justify-between mb-4">
                            <View className="flex-row items-center">
                                <View className="w-8 h-8 bg-green-100 rounded-lg items-center justify-center mr-3">
                                    <Ionicons name="bar-chart-outline" size={16} color="#10b981" />
                                </View>
                                <Text className="text-lg font-poppins-bold text-gray-900">Weekly Progress</Text>
                            </View>
                            <Text className="text-sm font-poppins-bold text-green-600">85%</Text>
                        </View>
                        <View className="bg-gray-200 rounded-full h-3 mb-3">
                            <View className="bg-gradient-to-r from-green-400 to-green-600 rounded-full h-3" style={{ width: '85%' }} />
                        </View>
                        <Text className="text-sm font-poppins text-gray-600">
                            Excellent progress! You're ahead of your weekly goal by 15%.
                        </Text>
                    </View>

                    {/* Quick Actions */}
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-lg font-poppins-bold text-gray-900">Quick Actions</Text>
                        <TouchableOpacity>
                            <Text className="text-sm font-poppins-medium text-light_red">View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-between mb-6 gap-3">
                        <TouchableOpacity
                            className="bg-light_red rounded-2xl p-5 flex-1 shadow-sm items-center"
                            style={{
                                shadowColor: '#ff6b6c',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.3,
                                shadowRadius: 8,
                                elevation: 6,
                            }}
                        >
                            <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center mb-3">
                                <Ionicons name="play-circle" size={24} color="white" />
                            </View>
                            <Text className="text-sm font-poppins-bold text-white mb-1">Start Quiz</Text>
                            <Text className="text-xs font-poppins text-white/90">Begin practice</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="bg-blue-600 rounded-2xl p-5 flex-1 shadow-sm items-center"
                            style={{
                                shadowColor: '#2563eb',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.3,
                                shadowRadius: 8,
                                elevation: 6,
                            }}
                        >
                            <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center mb-3">
                                <Ionicons name="document-text" size={24} color="white" />
                            </View>
                            <Text className="text-sm font-poppins-bold text-white mb-1">Mock Test</Text>
                            <Text className="text-xs font-poppins text-white/90">Full exam</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="bg-green-600 rounded-2xl p-5 flex-1 shadow-sm items-center"
                            style={{
                                shadowColor: '#16a34a',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.3,
                                shadowRadius: 8,
                                elevation: 6,
                            }}
                        >
                            <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center mb-3">
                                <Ionicons name="book" size={24} color="white" />
                            </View>
                            <Text className="text-sm font-poppins-bold text-white mb-1">Study Notes</Text>
                            <Text className="text-xs font-poppins text-white/90">Review topics</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Recent Activity */}
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-lg font-poppins-bold text-gray-900">Recent Activity</Text>
                        <TouchableOpacity>
                            <Text className="text-sm font-poppins-medium text-light_red">View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <View className="flex-row items-center p-4 border-b border-gray-100">
                            <View className="w-10 h-10 bg-green-100 rounded-xl items-center justify-center mr-4">
                                <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm font-poppins-medium text-gray-900">
                                    Completed Cardiology Quiz
                                </Text>
                                <Text className="text-xs font-poppins text-gray-500">
                                    Score: 92% • 15 questions
                                </Text>
                            </View>
                            <Text className="text-xs font-poppins-medium text-gray-500">2h ago</Text>
                        </View>
                        <View className="flex-row items-center p-4 border-b border-gray-100">
                            <View className="w-10 h-10 bg-blue-100 rounded-xl items-center justify-center mr-4">
                                <Ionicons name="document-text" size={20} color="#3b82f6" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm font-poppins-medium text-gray-900">
                                    Finished Mock Test #12
                                </Text>
                                <Text className="text-xs font-poppins text-gray-500">
                                    Score: 85% • Rank: #245
                                </Text>
                            </View>
                            <Text className="text-xs font-poppins-medium text-gray-500">1d ago</Text>
                        </View>
                        <View className="flex-row items-center p-4">
                            <View className="w-10 h-10 bg-yellow-100 rounded-xl items-center justify-center mr-4">
                                <Ionicons name="trophy" size={20} color="#f59e0b" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm font-poppins-medium text-gray-900">
                                    Achieved 90% in Anatomy
                                </Text>
                                <Text className="text-xs font-poppins text-gray-500">
                                    New personal best!
                                </Text>
                            </View>
                            <Text className="text-xs font-poppins-medium text-gray-500">2d ago</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}