import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Tests() {
    const [activeTab, setActiveTab] = useState('upcoming')

    const upcomingTests = [
        { id: 1, title: 'NEET Mock Test #15', date: '2025-01-10', time: '10:00 AM', duration: '3h', questions: 180 },
        { id: 2, title: 'Cardiology Assessment', date: '2025-01-12', time: '2:00 PM', duration: '1h', questions: 50 },
        { id: 3, title: 'Final Year Mock', date: '2025-01-15', time: '9:00 AM', duration: '4h', questions: 200 },
    ]

    const completedTests = [
        { id: 1, title: 'NEET Mock Test #14', score: 85, maxScore: 100, date: '2025-01-05', rank: 245 },
        { id: 2, title: 'Anatomy Quiz', score: 92, maxScore: 100, date: '2025-01-03', rank: 89 },
        { id: 3, title: 'Physiology Test', score: 78, maxScore: 100, date: '2025-01-01', rank: 456 },
    ]

    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-600'
        if (score >= 75) return 'text-yellow-600'
        return 'text-red-600'
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
            {/* Header */}
            <View className="bg-white px-6 py-6 border-b border-gray-100">
                <Text className="text-2xl font-poppins-bold text-gray-900 mb-4">
                    Tests & Assessments
                </Text>

                {/* Tab Selector */}
                <View className="flex-row bg-gray-100 rounded-2xl p-1">
                    <TouchableOpacity
                        onPress={() => setActiveTab('upcoming')}
                        className={`flex-1 py-3 rounded-xl ${activeTab === 'upcoming' ? 'bg-white shadow-sm' : ''
                            }`}
                    >
                        <Text
                            className={`text-center font-poppins-medium ${activeTab === 'upcoming' ? 'text-gray-900' : 'text-gray-600'
                                }`}
                        >
                            Upcoming
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('completed')}
                        className={`flex-1 py-3 rounded-xl ${activeTab === 'completed' ? 'bg-white shadow-sm' : ''
                            }`}
                    >
                        <Text
                            className={`text-center font-poppins-medium ${activeTab === 'completed' ? 'text-gray-900' : 'text-gray-600'
                                }`}
                        >
                            Completed
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView className="flex-1 px-6 py-4">
                {activeTab === 'upcoming' ? (
                    <>
                        {/* Quick Start Section */}
                        <View className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-6">
                            <Text className="text-xl font-poppins-bold text-black mb-2">
                                Ready for a Quick Test?
                            </Text>
                            <Text className="text-sm font-poppins text-black/90 mb-4">
                                Start a practice test anytime with our instant quiz feature
                            </Text>
                            <TouchableOpacity className="bg-white rounded-xl py-3 px-6 self-start">
                                <Text className="font-poppins-semibold text-blue-600">
                                    Start Now
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Upcoming Tests */}
                        <Text className="text-lg font-poppins-bold text-gray-900 mb-4">
                            Scheduled Tests
                        </Text>
                        {upcomingTests.map((test) => (
                            <View key={test.id} className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
                                <View className="flex-row items-start justify-between mb-3">
                                    <View className="flex-1">
                                        <Text className="text-lg font-poppins-bold text-gray-900 mb-1">
                                            {test.title}
                                        </Text>
                                        <View className="flex-row items-center mb-2">
                                            <MaterialIcons name="schedule" size={16} color="#9ca3af" />
                                            <Text className="text-sm font-poppins text-gray-600 ml-1">
                                                {test.date} at {test.time}
                                            </Text>
                                        </View>
                                    </View>
                                    <View className="bg-blue-100 px-3 py-1 rounded-full">
                                        <Text className="text-xs font-poppins-medium text-blue-600">
                                            Scheduled
                                        </Text>
                                    </View>
                                </View>

                                <View className="flex-row items-center justify-between mb-4">
                                    <View className="flex-row items-center">
                                        <MaterialIcons name="timer" size={16} color="#9ca3af" />
                                        <Text className="text-sm font-poppins text-gray-600 ml-1 mr-4">
                                            {test.duration}
                                        </Text>
                                        <MaterialIcons name="quiz" size={16} color="#9ca3af" />
                                        <Text className="text-sm font-poppins text-gray-600 ml-1">
                                            {test.questions} questions
                                        </Text>
                                    </View>
                                </View>

                                <TouchableOpacity className="bg-light_red rounded-xl py-3">
                                    <Text className="text-center font-poppins-semibold text-white">
                                        Join Test
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </>
                ) : (
                    <>
                        {/* Performance Summary */}
                        <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                            <Text className="text-lg font-poppins-bold text-gray-900 mb-4">
                                Performance Summary
                            </Text>
                            <View className="flex-row justify-between">
                                <View className="items-center">
                                    <Text className="text-2xl font-poppins-bold text-gray-900">85</Text>
                                    <Text className="text-sm font-poppins text-gray-600">Avg Score</Text>
                                </View>
                                <View className="items-center">
                                    <Text className="text-2xl font-poppins-bold text-gray-900">12</Text>
                                    <Text className="text-sm font-poppins text-gray-600">Tests Taken</Text>
                                </View>
                                <View className="items-center">
                                    <Text className="text-2xl font-poppins-bold text-gray-900">263</Text>
                                    <Text className="text-sm font-poppins text-gray-600">Avg Rank</Text>
                                </View>
                            </View>
                        </View>

                        {/* Completed Tests */}
                        <Text className="text-lg font-poppins-bold text-gray-900 mb-4">
                            Recent Results
                        </Text>
                        {completedTests.map((test) => (
                            <View key={test.id} className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
                                <View className="flex-row items-start justify-between mb-3">
                                    <View className="flex-1">
                                        <Text className="text-lg font-poppins-bold text-gray-900 mb-1">
                                            {test.title}
                                        </Text>
                                        <Text className="text-sm font-poppins text-gray-600 mb-2">
                                            Completed on {test.date}
                                        </Text>
                                    </View>
                                    <View className="items-end">
                                        <Text className={`text-2xl font-poppins-bold ${getScoreColor(test.score)}`}>
                                            {test.score}%
                                        </Text>
                                        <Text className="text-xs font-poppins text-gray-500">
                                            {test.score}/{test.maxScore}
                                        </Text>
                                    </View>
                                </View>

                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center">
                                        <MaterialIcons name="leaderboard" size={16} color="#9ca3af" />
                                        <Text className="text-sm font-poppins text-gray-600 ml-1">
                                            Rank #{test.rank}
                                        </Text>
                                    </View>

                                    <TouchableOpacity className="flex-row items-center">
                                        <Text className="text-sm font-poppins-medium text-light_red mr-1">
                                            View Details
                                        </Text>
                                        <MaterialIcons name="arrow-forward" size={16} color="#ff6b6c" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}