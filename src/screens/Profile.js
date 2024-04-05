// Profile.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.profileHeader}>
      <Image
      source={require('../assets/Ellipse 1.png')}
      style={styles.avatarContainer}
    />
        <Text style={styles.profileName}>Minying Chen</Text>
        <Text style={styles.email}>mchen145@myseneca.ca</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Basic info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>Minying Chen</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Birthday</Text>
          <Text style={styles.infoValue}>February 18, 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Gender</Text>
          <Text style={styles.infoValue}>Female</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Contact info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>mchen145@myseneca.ca</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoValue}>(647)289-5127</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Addresses</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Home</Text>
          <Text style={styles.infoValue}>18 Bur Oak Ave, Markham</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Work</Text>
          <Text style={styles.infoValue}>Not set</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#A1CCFF',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4',
  },
  line:{
    width:'100%',
    height:1,
    backgroundColor: '#C7C5C5',
    marginTop:25,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'dark',
  },
  infoSection: {
    padding: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#C7C5C5',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 16,
  },
});

export default Profile;