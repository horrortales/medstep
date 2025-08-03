import { useAuth, useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
    const { user, isLoaded } = useUser()
    const { signOut } = useAuth()

    // Debug user data
    React.useEffect(() => {
        if (isLoaded && user) {
            console.log('User data:', {
                imageUrl: user.imageUrl,
                firstName: user.firstName,
                lastName: user.lastName,
                fullName: user.fullName,
                email: user.emailAddresses[0]?.emailAddress
            });
        }
    }, [user, isLoaded]);

    const handleSignOut = async () => {
        try {
            await signOut()
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }

    // Show loading state if user data isn't loaded yet
    if (!isLoaded) {
        return (
            <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
                <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
                <View className="flex-1 items-center justify-center">
                    <Text className="text-lg font-poppins text-gray-600">Loading...</Text>
                </View>
            </SafeAreaView>
        )
    }

    const menuItems = [
        { id: 1, title: 'Study Preferences', icon: 'settings-outline', color: '#6366f1' },
        { id: 2, title: 'Notifications', icon: 'notifications-outline', color: '#8b5cf6' },
        { id: 3, title: 'Download Content', icon: 'download-outline', color: '#06b6d4' },
        { id: 4, title: 'Help & Support', icon: 'help-circle-outline', color: '#10b981' },
        { id: 5, title: 'Privacy Policy', icon: 'shield-checkmark-outline', color: '#f59e0b' },
        { id: 6, title: 'Terms of Service', icon: 'document-text-outline', color: '#ef4444' },
    ]

    const stats = [
        { label: 'Questions', value: '1,247', color: 'bg-blue-500' },
        { label: 'Accuracy', value: '87%', color: 'bg-green-500' },
        { label: 'Streak', value: '7 days', color: 'bg-orange-500' },
        { label: 'Rank', value: '#245', color: 'bg-purple-500' },
    ]

    return (
        <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

            {/* Clean Header */}
            <View className="bg-white px-6 py-8 border-b border-gray-100">
                <View className="flex-row items-center justify-between mb-6">
                    <Text className="text-2xl font-poppins-bold text-gray-900">Profile</Text>
                    <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-xl items-center justify-center">
                        <Ionicons name="settings-outline" size={20} color="#374151" />
                    </TouchableOpacity>
                </View>

                {/* User Info */}
                <View className="items-center">
                    {user?.imageUrl ? (
                        <Image
                            source={{ uri: user.imageUrl }}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                marginBottom: 16,
                                borderWidth: 3,
                                borderColor: '#e5e7eb',
                            }}
                            onError={(error) => {
                                console.log('Image loading error:', error);
                            }}
                        />
                    ) : (
                        <View
                            className="w-20 h-20 rounded-full bg-indigo-500 items-center justify-center mb-4"
                            style={{
                                borderWidth: 3,
                                borderColor: '#e5e7eb',
                            }}
                        >
                            <Text className="text-2xl font-poppins-bold text-white">
                                {user?.firstName?.charAt(0)?.toUpperCase() ||
                                    user?.emailAddresses[0]?.emailAddress?.charAt(0)?.toUpperCase() ||
                                    'U'}
                            </Text>
                        </View>
                    )}

                    <Text className="text-xl font-poppins-bold text-gray-900 mb-1 text-center">
                        {user?.fullName ||
                            `${user?.firstName || ''} ${user?.lastName || ''}`.trim() ||
                            'Medical Student'}
                    </Text>
                    <Text className="text-sm font-poppins text-gray-600 mb-3 text-center">
                        {user?.emailAddresses[0]?.emailAddress || 'student@medstep.com'}
                    </Text>

                    <View className="bg-emerald-100 px-3 py-1 rounded-full">
                        <Text className="text-xs font-poppins-bold text-emerald-700">
                            Premium Member
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

                {/* Professional Stats */}
                <View className="px-6 py-6">
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">Your Progress</Text>
                    <View className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                        <View className="flex-row justify-between">
                            {stats.map((stat, index) => (
                                <View key={index} className="items-center flex-1">
                                    <View className="w-12 h-12 bg-gray-50 rounded-2xl items-center justify-center mb-3">
                                        <Ionicons
                                            name={
                                                stat.label === 'Questions' ? 'library-outline' :
                                                    stat.label === 'Accuracy' ? 'checkmark-circle-outline' :
                                                        stat.label === 'Streak' ? 'flame-outline' : 'trophy-outline'
                                            }
                                            size={20}
                                            color={
                                                stat.label === 'Questions' ? '#3b82f6' :
                                                    stat.label === 'Accuracy' ? '#10b981' :
                                                        stat.label === 'Streak' ? '#f97316' : '#8b5cf6'
                                            }
                                        />
                                    </View>
                                    <Text className="text-xl font-poppins-bold text-gray-900 mb-1">
                                        {stat.value}
                                    </Text>
                                    <Text className="text-xs font-poppins text-gray-600 text-center">
                                        {stat.label}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Study Streak */}
                    <View
                        className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 mb-6 shadow-lg"
                        style={{
                            backgroundColor: '#f97316',
                            shadowColor: '#f97316',
                            shadowOffset: { width: 0, height: 8 },
                            shadowOpacity: 0.3,
                            shadowRadius: 12,
                            elevation: 10,
                        }}
                    >
                        {/* Header */}
                        <View className="flex-row items-center justify-between mb-6">
                            <View className="flex-row items-center">
                                <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center mr-4">
                                    <Ionicons name="flame" size={24} color="white" />
                                </View>
                                <View>
                                    <Text className="text-lg font-poppins-bold text-white">
                                        Study Streak
                                    </Text>
                                    <Text className="text-sm font-poppins text-white/80">
                                        Keep the momentum going!
                                    </Text>
                                </View>
                            </View>

                            <View className="items-center">
                                <Text className="text-3xl font-poppins-bold text-white">7</Text>
                                <Text className="text-xs font-poppins-medium text-white/80">DAYS</Text>
                            </View>
                        </View>

                        {/* Progress Bar */}
                        <View className="mb-6">
                            <View className="flex-row items-center justify-between mb-2">
                                <Text className="text-sm font-poppins-medium text-white/90">
                                    Weekly Goal Progress
                                </Text>
                                <Text className="text-sm font-poppins-bold text-white">
                                    7/7 days
                                </Text>
                            </View>
                            <View className="bg-white/20 rounded-full h-3">
                                <View
                                    className="bg-white rounded-full h-3"
                                    style={{ width: '100%' }}
                                />
                            </View>
                        </View>

                        {/* Weekly Calendar */}
                        <View className="bg-white/10 rounded-2xl p-4">
                            <Text className="text-sm font-poppins-bold text-white mb-3 text-center">
                                This Week
                            </Text>
                            <View className="flex-row justify-between">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                    <View key={index} className="items-center">
                                        <Text className="text-xs font-poppins-medium text-white/70 mb-2">
                                            {day}
                                        </Text>
                                        <View
                                            className={`w-10 h-10 rounded-xl items-center justify-center ${index < 7
                                                ? 'bg-white shadow-sm'
                                                : 'bg-white/20 border border-white/30'
                                                }`}
                                        >
                                            {index < 7 ? (
                                                <Ionicons name="checkmark" size={16} color="#f97316" />
                                            ) : (
                                                <View className="w-2 h-2 bg-white/50 rounded-full" />
                                            )}
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* Achievement Badge */}
                        <View className="flex-row items-center justify-center mt-4">
                            <View className="bg-white/20 rounded-full px-4 py-2 flex-row items-center">
                                <Ionicons name="trophy" size={16} color="white" />
                                <Text className="text-xs font-poppins-bold text-white ml-2">
                                    Perfect Week! 🎉
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Menu Items */}
                    <Text className="text-lg font-poppins-bold text-gray-900 mb-4">
                        Settings & More
                    </Text>
                    <View className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {menuItems.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                className={`flex-row items-center px-6 py-4 ${index < menuItems.length - 1 ? 'border-b border-gray-100' : ''
                                    }`}
                            >
                                <View className="w-10 h-10 rounded-xl items-center justify-center mr-4"
                                    style={{ backgroundColor: `${item.color}15` }}
                                >
                                    <Ionicons name={item.icon as any} size={20} color={item.color} />
                                </View>
                                <Text className="flex-1 font-poppins-medium text-gray-900">
                                    {item.title}
                                </Text>
                                <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Account Section */}
                    <View className="bg-white rounded-2xl p-6 mt-6 shadow-sm border border-gray-100">
                        <Text className="text-base font-poppins-bold text-gray-900 mb-4">Account</Text>

                        <TouchableOpacity
                            onPress={handleSignOut}
                            className="flex-row items-center justify-center bg-red-50 rounded-xl p-4"
                        >
                            <Ionicons name="log-out-outline" size={20} color="#ef4444" />
                            <Text className="font-poppins-semibold text-red-500 ml-2">
                                Sign Out
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* App Version */}
                    <View className="items-center mt-8 mb-6">
                        <Text className="text-sm font-poppins text-gray-500 mb-1">
                            MedStep v2.1.0
                        </Text>
                        <Text className="text-xs font-poppins text-gray-400">
                            Made with ❤️ for medical students
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}