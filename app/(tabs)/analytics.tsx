import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

export default function Analytics() {
    const [selectedPeriod, setSelectedPeriod] = useState('week')

    const periods = [
        { key: 'week', label: 'Week' },
        { key: 'month', label: 'Month' },
        { key: 'year', label: 'Year' },
    ]

    const subjectPerformance = [
        { subject: 'Anatomy', score: 92, questions: 150, color: '#ff6b6c' },
        { subject: 'Physiology', score: 88, questions: 120, color: '#4ecdc4' },
        { subject: 'Pathology', score: 85, questions: 200, color: '#45b7d1' },
        { subject: 'Pharmacology', score: 79, questions: 80, color: '#f9ca24' },
        { subject: 'Medicine', score: 82, questions: 95, color: '#6c5ce7' },
    ]

    const weeklyProgress = [
        { day: 'Mon', questions: 12, accuracy: 85 },
        { day: 'Tue', questions: 18, accuracy: 92 },
        { day: 'Wed', questions: 8, accuracy: 78 },
        { day: 'Thu', questions: 25, accuracy: 88 },
        { day: 'Fri', questions: 15, accuracy: 95 },
        { day: 'Sat', questions: 22, accuracy: 87 },
        { day: 'Sun', questions: 10, accuracy: 90 },
    ]

    const maxQuestions = Math.max(...weeklyProgress.map(d => d.questions))

    return (
        <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
            {/* Header */}
            <View className="bg-white px-6 py-6 border-b border-gray-100">
                <Text className="text-2xl font-poppins-bold text-gray-900 mb-4">
                    Analytics & Insights
                </Text>

                {/* Period Selector */}
                <View className="flex-row bg-gray-100 rounded-2xl p-1">
                    {periods.map((period) => (
                        <TouchableOpacity
                            key={period.key}
                            onPress={() => setSelectedPeriod(period.key)}
                            className={`flex-1 py-2 rounded-xl ${selectedPeriod === period.key ? 'bg-white shadow-sm' : ''
                                }`}
                        >
                            <Text
                                className={`text-center font-poppins-medium text-sm ${selectedPeriod === period.key ? 'text-gray-900' : 'text-gray-600'
                                    }`}
                            >
                                {period.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <ScrollView className="flex-1 px-6 py-4">
                {/* Key Metrics */}
                <View className="flex-row justify-between mb-6">
                    <View className="bg-white rounded-2xl p-4 flex-1 mr-2 shadow-sm">
                        <MaterialIcons name="trending-up" size={24} color="#10b981" />
                        <Text className="text-2xl font-poppins-bold text-gray-900 mt-2">87%</Text>
                        <Text className="text-sm font-poppins text-gray-600">Overall Accuracy</Text>
                    </View>

                    <View className="bg-white rounded-2xl p-4 flex-1 mx-1 shadow-sm">
                        <MaterialIcons name="quiz" size={24} color="#3b82f6" />
                        <Text className="text-2xl font-poppins-bold text-gray-900 mt-2">1,247</Text>
                        <Text className="text-sm font-poppins text-gray-600">Questions Solved</Text>
                    </View>

                    <View className="bg-white rounded-2xl p-4 flex-1 ml-2 shadow-sm">
                        <MaterialIcons name="schedule" size={24} color="#f59e0b" />
                        <Text className="text-2xl font-poppins-bold text-gray-900 mt-2">42h</Text>
                        <Text className="text-sm font-poppins text-gray-600">Study Time</Text>
                    </View>
                </View>

                {/* Weekly Progress Chart */}
                <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">
                        Weekly Activity
                    </Text>

                    <View className="flex-row items-end justify-between mb-4" style={{ height: 120 }}>
                        {weeklyProgress.map((day, index) => (
                            <View key={index} className="items-center flex-1">
                                <View className="flex-1 justify-end mb-2">
                                    <View
                                        className="bg-light_red rounded-t-lg w-6"
                                        style={{
                                            height: (day.questions / maxQuestions) * 80,
                                            minHeight: 4,
                                        }}
                                    />
                                </View>
                                <Text className="text-xs font-poppins text-gray-600">{day.day}</Text>
                            </View>
                        ))}
                    </View>

                    <View className="flex-row justify-between pt-4 border-t border-gray-100">
                        <View className="items-center">
                            <Text className="text-lg font-poppins-bold text-gray-900">110</Text>
                            <Text className="text-xs font-poppins text-gray-600">Questions</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-lg font-poppins-bold text-gray-900">88%</Text>
                            <Text className="text-xs font-poppins text-gray-600">Avg Accuracy</Text>
                        </View>
                    </View>
                </View>

                {/* Subject Performance */}
                <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">
                        Subject Performance
                    </Text>

                    {subjectPerformance.map((subject, index) => (
                        <View key={index} className="mb-4 last:mb-0">
                            <View className="flex-row items-center justify-between mb-2">
                                <Text className="font-poppins-medium text-gray-900">
                                    {subject.subject}
                                </Text>
                                <Text className="font-poppins-bold text-gray-900">
                                    {subject.score}%
                                </Text>
                            </View>

                            <View className="bg-gray-200 rounded-full h-3 mb-1">
                                <View
                                    className="rounded-full h-3"
                                    style={{
                                        width: `${subject.score}%`,
                                        backgroundColor: subject.color,
                                    }}
                                />
                            </View>

                            <Text className="text-xs font-poppins text-gray-500">
                                {subject.questions} questions attempted
                            </Text>
                        </View>
                    ))}
                </View>

                {/* Strengths & Weaknesses */}
                <View className="flex-row justify-between mb-6">
                    <View className="bg-white rounded-2xl p-4 flex-1 mr-3 shadow-sm">
                        <View className="flex-row items-center mb-3">
                            <MaterialIcons name="trending-up" size={20} color="#10b981" />
                            <Text className="font-poppins-bold text-gray-900 ml-2">Strengths</Text>
                        </View>
                        <Text className="text-sm font-poppins text-gray-600 mb-1">• Anatomy (92%)</Text>
                        <Text className="text-sm font-poppins text-gray-600 mb-1">• Physiology (88%)</Text>
                        <Text className="text-sm font-poppins text-gray-600">• Quick Recall</Text>
                    </View>

                    <View className="bg-white rounded-2xl p-4 flex-1 ml-3 shadow-sm">
                        <View className="flex-row items-center mb-3">
                            <MaterialIcons name="trending-down" size={20} color="#ef4444" />
                            <Text className="font-poppins-bold text-gray-900 ml-2">Focus Areas</Text>
                        </View>
                        <Text className="text-sm font-poppins text-gray-600 mb-1">• Pharmacology (79%)</Text>
                        <Text className="text-sm font-poppins text-gray-600 mb-1">• Complex Cases</Text>
                        <Text className="text-sm font-poppins text-gray-600">• Time Management</Text>
                    </View>
                </View>

                {/* Recommendations */}
                <View className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6">
                    <View className="flex-row items-center mb-3">
                        <MaterialIcons name="lightbulb" size={24} color="white" />
                        <Text className="text-lg font-poppins-bold text-white ml-2">
                            Recommendations
                        </Text>
                    </View>
                    <Text className="text-sm font-poppins text-white/90 mb-2">
                        • Focus more on Pharmacology - practice 15 questions daily
                    </Text>
                    <Text className="text-sm font-poppins text-white/90 mb-2">
                        • Take timed tests to improve speed
                    </Text>
                    <Text className="text-sm font-poppins text-white/90">
                        • Review incorrect answers from previous tests
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}