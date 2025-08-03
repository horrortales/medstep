import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function QuestionBank() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = ['All', 'Anatomy', 'Physiology', 'Pathology', 'Pharmacology', 'Medicine']

    const questionSets = [
        { id: 1, title: 'Cardiovascular System', questions: 150, difficulty: 'Medium', category: 'Anatomy' },
        { id: 2, title: 'Respiratory Physiology', questions: 120, difficulty: 'Hard', category: 'Physiology' },
        { id: 3, title: 'Infectious Diseases', questions: 200, difficulty: 'Easy', category: 'Pathology' },
        { id: 4, title: 'Antibiotics & Resistance', questions: 80, difficulty: 'Hard', category: 'Pharmacology' },
        { id: 5, title: 'Endocrine Disorders', questions: 95, difficulty: 'Medium', category: 'Medicine' },
        { id: 6, title: 'Neurological Anatomy', questions: 110, difficulty: 'Hard', category: 'Anatomy' },
    ]

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy': return 'text-green-600 bg-green-100'
            case 'Medium': return 'text-yellow-600 bg-yellow-100'
            case 'Hard': return 'text-red-600 bg-red-100'
            default: return 'text-gray-600 bg-gray-100'
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
            {/* Header */}
            <View className="bg-white px-6 py-6 border-b border-gray-100">
                <Text className="text-2xl font-poppins-bold text-gray-900 mb-4">
                    Question Bank
                </Text>

                {/* Search Bar */}
                <View className="bg-gray-100 rounded-2xl px-4 py-3 flex-row items-center mb-4">
                    <MaterialIcons name="search" size={20} color="#9ca3af" />
                    <TextInput
                        placeholder="Search questions..."
                        className="flex-1 ml-3 font-poppins text-gray-900"
                        placeholderTextColor="#9ca3af"
                    />
                </View>

                {/* Category Filter */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className="flex-row">
                        {categories.map((category) => (
                            <TouchableOpacity
                                key={category}
                                onPress={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full mr-3 ${selectedCategory === category
                                    ? 'bg-light_red'
                                    : 'bg-gray-200'
                                    }`}
                            >
                                <Text
                                    className={`font-poppins-medium text-sm ${selectedCategory === category
                                        ? 'text-white'
                                        : 'text-gray-700'
                                        }`}
                                >
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>

            {/* Question Sets */}
            <ScrollView className="flex-1 px-6 py-4">
                {questionSets.map((set) => (
                    <TouchableOpacity
                        key={set.id}
                        className="bg-white rounded-2xl p-5 mb-4 shadow-sm"
                    >
                        <View className="flex-row items-start justify-between mb-3">
                            <View className="flex-1">
                                <Text className="text-lg font-poppins-bold text-gray-900 mb-1">
                                    {set.title}
                                </Text>
                                <Text className="text-sm font-poppins text-gray-600 mb-2">
                                    {set.category}
                                </Text>
                            </View>
                            <View className={`px-3 py-1 rounded-full ${getDifficultyColor(set.difficulty)}`}>
                                <Text className={`text-xs font-poppins-medium ${getDifficultyColor(set.difficulty).split(' ')[0]}`}>
                                    {set.difficulty}
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center">
                                <MaterialIcons name="quiz" size={16} color="#9ca3af" />
                                <Text className="text-sm font-poppins text-gray-600 ml-1">
                                    {set.questions} questions
                                </Text>
                            </View>

                            <View className="flex-row items-center">
                                <Text className="text-sm font-poppins-medium text-light_red mr-2">
                                    Start Practice
                                </Text>
                                <MaterialIcons name="arrow-forward" size={16} color="#ff6b6c" />
                            </View>
                        </View>

                        {/* Progress Bar */}
                        <View className="mt-4">
                            <View className="flex-row items-center justify-between mb-2">
                                <Text className="text-xs font-poppins text-gray-500">Progress</Text>
                                <Text className="text-xs font-poppins-medium text-gray-700">
                                    {Math.floor(Math.random() * 100)}%
                                </Text>
                            </View>
                            <View className="bg-gray-200 rounded-full h-2">
                                <View
                                    className="bg-light_red rounded-full h-2"
                                    style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}