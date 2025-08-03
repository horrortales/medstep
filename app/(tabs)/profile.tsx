import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
    const achievements = [
        { id: 1, title: '7-Day Streak', icon: 'local-fire-department', color: '#ff6b6c' },
        { id: 2, title: 'Top 10%', icon: 'emoji-events', color: '#f59e0b' },
        { id: 3, title: '1000 Questions', icon: 'quiz', color: '#10b981' },
        { id: 4, title: 'Perfect Score', icon: 'star', color: '#8b5cf6' },
    ]

    const menuItems = [
        { id: 1, title: 'Study Preferences', icon: 'settings', color: '#6b7280' },
        { id: 2, title: 'Notifications', icon: 'notifications', color: '#6b7280' },
        { id: 3, title: 'Download Content', icon: 'download', color: '#6b7280' },
        { id: 4, title: 'Help & Support', icon: 'help', color: '#6b7280' },
        { id: 5, title: 'Privacy Policy', icon: 'privacy-tip', color: '#6b7280' },
        { id: 6, title: 'Terms of Service', icon: 'description', color: '#6b7280' },
    ]

    return (
        <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
            <ScrollView className="flex-1">
                {/* Header with Profile Info */}
                <View className="bg-white px-6 py-8 border-b border-gray-100">
                    <View className="items-center mb-6">
                        <View className="w-24 h-24 bg-light_red rounded-full items-center justify-center mb-4">
                            <Text className="text-3xl font-poppins-bold text-white">JS</Text>
                        </View>
                        <Text className="text-2xl font-poppins-bold text-gray-900 mb-1">
                            John Smith
                        </Text>
                        <Text className="text-base font-poppins text-gray-600 mb-2">
                            Medical Student, Year 3
                        </Text>
                        <View className="bg-green-100 px-3 py-1 rounded-full">
                            <Text className="text-sm font-poppins-medium text-green-700">
                                Premium Member
                            </Text>
                        </View>
                    </View>

                    {/* Stats Row */}
                    <View className="flex-row justify-between">
                        <View className="items-center">
                            <Text className="text-2xl font-poppins-bold text-gray-900">1,247</Text>
                            <Text className="text-sm font-poppins text-gray-600">Questions</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-2xl font-poppins-bold text-gray-900">87%</Text>
                            <Text className="text-sm font-poppins text-gray-600">Accuracy</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-2xl font-poppins-bold text-gray-900">42</Text>
                            <Text className="text-sm font-poppins text-gray-600">Days Active</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-2xl font-poppins-bold text-gray-900">#245</Text>
                            <Text className="text-sm font-poppins text-gray-600">Rank</Text>
                        </View>
                    </View>
                </View>

                {/* Achievements */}
                <View className="px-6 py-6">
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">
                        Achievements
                    </Text>
                    <View className="flex-row justify-between mb-6">
                        {achievements.map((achievement) => (
                            <View key={achievement.id} className="items-center">
                                <View
                                    className="w-16 h-16 rounded-2xl items-center justify-center mb-2"
                                    style={{ backgroundColor: `${achievement.color}20` }}
                                >
                                    <MaterialIcons
                                        name={achievement.icon as any}
                                        size={24}
                                        color={achievement.color}
                                    />
                                </View>
                                <Text className="text-xs font-poppins-medium text-gray-700 text-center">
                                    {achievement.title}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Study Streak */}
                    <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                        <View className="flex-row items-center justify-between mb-4">
                            <Text className="text-lg font-poppins-bold text-gray-900">
                                Study Streak
                            </Text>
                            <MaterialIcons name="local-fire-department" size={24} color="#ff6b6c" />
                        </View>

                        <View className="flex-row items-center mb-4">
                            <Text className="text-3xl font-poppins-bold text-light_red mr-2">7</Text>
                            <Text className="text-base font-poppins text-gray-600">days in a row</Text>
                        </View>

                        <View className="flex-row justify-between">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                <View
                                    key={index}
                                    className={`w-8 h-8 rounded-full items-center justify-center ${index < 7 ? 'bg-light_red' : 'bg-gray-200'
                                        }`}
                                >
                                    <Text
                                        className={`text-xs font-poppins-bold ${index < 7 ? 'text-white' : 'text-gray-500'
                                            }`}
                                    >
                                        {day}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Menu Items */}
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">
                        Settings & More
                    </Text>
                    <View className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        {menuItems.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                className={`flex-row items-center px-6 py-4 ${index < menuItems.length - 1 ? 'border-b border-gray-100' : ''
                                    }`}
                            >
                                <MaterialIcons name={item.icon as any} size={20} color={item.color} />
                                <Text className="flex-1 font-poppins text-gray-900 ml-4">
                                    {item.title}
                                </Text>
                                <MaterialIcons name="chevron-right" size={20} color="#9ca3af" />
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Logout Button */}
                    <TouchableOpacity className="bg-red-50 rounded-2xl p-4 mt-6 flex-row items-center justify-center">
                        <MaterialIcons name="logout" size={20} color="#ef4444" />
                        <Text className="font-poppins-semibold text-red-500 ml-2">
                            Sign Out
                        </Text>
                    </TouchableOpacity>

                    {/* App Version */}
                    <Text className="text-center text-sm font-poppins text-gray-500 mt-6 mb-4">
                        MedStep v2.1.0
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}