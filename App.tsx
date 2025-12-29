import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';
import AddTransactionScreen from './src/screens/AddTransactionScreen';
import AnalysisScreen from './src/screens/AnalysisScreen';
import TransactionDetailScreen from './src/screens/TransactionDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen}
        options={{ 
          title: 'Chi tiết giao dịch',
          presentation: 'modal'
        }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  const { theme, isDark } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Thêm mới') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Phân tích') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopColor: theme.colors.border,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
      })}
    >
      <Tab.Screen 
        name="Trang chủ" 
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Thêm mới" 
        component={AddTransactionScreen}
        options={{ 
          headerShown: true,
          title: 'Thêm Giao Dịch'
        }}
      />
      <Tab.Screen 
        name="Phân tích" 
        component={AnalysisScreen}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  // Wrap everything in try-catch to prevent crashes
  try {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <TabNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('App initialization error:', error);
    // Return a simple error screen if initialization fails
    return (
      <ErrorBoundary>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Lỗi khởi động ứng dụng
          </Text>
          <Text style={{ fontSize: 14, textAlign: 'center', color: '#666' }}>
            Vui lòng khởi động lại ứng dụng
          </Text>
        </View>
      </ErrorBoundary>
    );
  }
}


