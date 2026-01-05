import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import axios from 'axios';
import { appColors } from '../../design/colors';

export default function UserDetails() {
  const { id, userData } = useLocalSearchParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userData) {
      try {
        setUser(JSON.parse(userData));
        setLoading(false);
      } catch (e) {
        console.error("Error parsing user data", e);
        // Fallback to fetch if parsing fails
        fetchUser();
      }
    } else {
      fetchUser();
    }
  }, [id, userData]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/users/${id}`);
      setUser(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={appColors.primary} />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.center}>
        <Text>User not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: `${user.firstName} ${user.lastName}` }} />
      <Image source={{ uri: user.image }} style={styles.image} />
      <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Phone: {user.phone}</Text>
      <Text style={styles.info}>Age: {user.age}</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Address</Text>
        <Text>{user.address.address}, {user.address.city}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Company</Text>
        <Text>{user.company.title} at {user.company.name}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  card: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
});
