import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Dashboard() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
            <ScrollView className="flex-1">
                {/* Header */}
                <View className="bg-white px-6 py-8 border-b border-gray-100">
                    <Text className="text-2xl font-poppins-bold text-gray-900 mb-2">
                        Good morning, Student!
                    </Text>
                    <Text className="text-base font-poppins text-gray-600">
                        Ready to continue your medical journey?
                    </Text>
                </View>

                {/* Stats Cards */}
                <View className="px-6 py-6">
                    <View className="flex-row justify-between mb-6">
                        <View className="bg-white rounded-2xl p-4 flex-1 mr-3 shadow-sm">
                            <View className="flex-row items-center justify-between mb-2">
                                <MaterialIcons name="quiz" size={24} color="#ff6b6c" />
                                <Text className="text-xs font-poppins-medium text-gray-500">TODAY</Text>
                            </View>
                            <Text className="text-2xl font-poppins-bold text-gray-900 mb-1">24</Text>
                            <Text className="text-sm font-poppins text-gray-600">Questions Solved</Text>
                        </View>

                        <View className="bg-white rounded-2xl p-4 flex-1 ml-3 shadow-sm">
                            <View className="flex-row items-center justify-between mb-2">
                                <MaterialIcons name="trending-up" size={24} color="#10b981" />
                                <Text className="text-xs font-poppins-medium text-gray-500">STREAK</Text>
                            </View>
                            <Text className="text-2xl font-poppins-bold text-gray-900 mb-1">7</Text>
                            <Text className="text-sm font-poppins text-gray-600">Days Active</Text>
                        </View>
                    </View>

                    {/* Progress Card */}
                    <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                        <View className="flex-row items-center justify-between mb-4">
                            <Text className="text-lg font-poppins-bold text-gray-900">Weekly Progress</Text>
                            <Text className="text-sm font-poppins-medium text-light_red">85%</Text>
                        </View>
                        <View className="bg-gray-200 rounded-full h-3 mb-2">
                            <View className="bg-light_red rounded-full h-3" style={{ width: '85%' }} />
                        </View>
                        <Text className="text-sm font-poppins text-gray-600">
                            Great job! You're ahead of your weekly goal.
                        </Text>
                    </View>

                    {/* Quick Actions */}
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">Quick Actions</Text>
                    <View className="flex-row justify-between mb-6">
                        <TouchableOpacity className="bg-white rounded-2xl p-4 flex-1 mr-2 shadow-sm items-center">
                            <MaterialIcons name="play-circle-filled" size={32} color="#ff6b6c" />
                            <Text className="text-sm font-poppins-medium text-gray-900 mt-2">Start Quiz</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white rounded-2xl p-4 flex-1 mx-2 shadow-sm items-center">
                            <MaterialIcons name="assignment" size={32} color="#3b82f6" />
                            <Text className="text-sm font-poppins-medium text-gray-900 mt-2">Mock Test</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white rounded-2xl p-4 flex-1 ml-2 shadow-sm items-center">
                            <MaterialIcons name="book" size={32} color="#10b981" />
                            <Text className="text-sm font-poppins-medium text-gray-900 mt-2">Study Notes</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Recent Activity */}
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">Recent Activity</Text>
                    <View className="bg-white rounded-2xl p-4 shadow-sm">
                        <View className="flex-row items-center py-3 border-b border-gray-100">
                            <MaterialIcons name="check-circle" size={20} color="#10b981" />
                            <Text className="text-sm font-poppins text-gray-900 ml-3 flex-1">
                                Completed Cardiology Quiz
                            </Text>
                            <Text className="text-xs font-poppins text-gray-500">2h ago</Text>
                        </View>
                        <View className="flex-row items-center py-3 border-b border-gray-100">
                            <MaterialIcons name="assignment-turned-in" size={20} color="#3b82f6" />
                            <Text className="text-sm font-poppins text-gray-900 ml-3 flex-1">
                                Finished Mock Test #12
                            </Text>
                            <Text className="text-xs font-poppins text-gray-500">1d ago</Text>
                        </View>
                        <View className="flex-row items-center py-3">
                            <MaterialIcons name="star" size={20} color="#f59e0b" />
                            <Text className="text-sm font-poppins text-gray-900 ml-3 flex-1">
                                Achieved 90% in Anatomy
                            </Text>
                            <Text className="text-xs font-poppins text-gray-500">2d ago</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}