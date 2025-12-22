import { View, Text, ScrollView, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { appColors } from '../../../design/colors';

export default function UserDetails() {
    const { id, userData } = useLocalSearchParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadUserData();
    }, [id, userData]);

    const loadUserData = async () => {
        try {
            setLoading(true);
            
            // If userData is passed, use it directly
            if (userData) {
                const parsedUser = typeof userData === 'string' 
                    ? JSON.parse(userData) 
                    : userData;
                setUser(parsedUser);
                setLoading(false);
                return;
            }
            
            // Otherwise, fetch from API using the id
            if (id) {
                const response = await axios.get(`https://dummyjson.com/users/${id}`);
                setUser(response.data);
            } else {
                setError('No user ID or data provided');
            }
        } catch (err) {
            setError('Failed to load user details');
            console.error('Error loading user:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color={appColors.primary} />
                <Text style={styles.loadingText}>Loading user details...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    if (!user) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>User not found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {/* Profile Header */}
            <View style={styles.header}>
                <Image 
                    source={{ uri: user.image }} 
                    style={styles.avatar}
                />
                <Text style={styles.name}>
                    {user.firstName} {user.lastName}
                </Text>
                <Text style={styles.username}>@{user.username}</Text>
                <Text style={styles.role}>{user.role}</Text>
            </View>

            {/* Personal Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Personal Information</Text>
                <InfoRow label="Age" value={user.age} />
                <InfoRow label="Gender" value={user.gender} />
                <InfoRow label="Birth Date" value={user.birthDate} />
                <InfoRow label="Blood Group" value={user.bloodGroup} />
                <InfoRow label="Height" value={`${user.height} cm`} />
                <InfoRow label="Weight" value={`${user.weight} kg`} />
                <InfoRow label="Eye Color" value={user.eyeColor} />
                <InfoRow label="Hair" value={`${user.hair?.color} ${user.hair?.type}`} />
            </View>

            {/* Contact Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact Information</Text>
                <InfoRow label="Email" value={user.email} />
                <InfoRow label="Phone" value={user.phone} />
                <InfoRow label="Address" value={user.address?.address} />
                <InfoRow label="City" value={`${user.address?.city}, ${user.address?.state}`} />
                <InfoRow label="Postal Code" value={user.address?.postalCode} />
                <InfoRow label="Country" value={user.address?.country} />
            </View>

            {/* Work Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Work Information</Text>
                <InfoRow label="Company" value={user.company?.name} />
                <InfoRow label="Department" value={user.company?.department} />
                <InfoRow label="Title" value={user.company?.title} />
                <InfoRow label="University" value={user.university} />
            </View>

            {/* Bank Information */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bank Information</Text>
                <InfoRow label="Card Type" value={user.bank?.cardType} />
                <InfoRow label="Card Number" value={`**** **** **** ${user.bank?.cardNumber?.slice(-4)}`} />
                <InfoRow label="Card Expires" value={user.bank?.cardExpire} />
                <InfoRow label="Currency" value={user.bank?.currency} />
                <InfoRow label="IBAN" value={user.bank?.iban} />
            </View>

            {/* Crypto Information */}
            {user.crypto && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Crypto</Text>
                    <InfoRow label="Coin" value={user.crypto.coin} />
                    <InfoRow label="Wallet" value={user.crypto.wallet} />
                    <InfoRow label="Network" value={user.crypto.network} />
                </View>
            )}
        </ScrollView>
    );
}

// Component for displaying info rows
const InfoRow = ({ label, value }) => (
    <View style={styles.infoRow}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value || 'N/A'}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
    header: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: appColors.primary,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    username: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    role: {
        fontSize: 14,
        color: '#fff',
        backgroundColor: appColors.primary,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        marginTop: 5,
        textTransform: 'capitalize',
    },
    section: {
        backgroundColor: '#fff',
        marginTop: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: appColors.primary,
        paddingBottom: 5,
    },
    infoRow: {
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    label: {
        flex: 1,
        fontSize: 14,
        fontWeight: '600',
        color: '#555',
    },
    value: {
        flex: 2,
        fontSize: 14,
        color: '#333',
        textAlign: 'right',
    },
});
