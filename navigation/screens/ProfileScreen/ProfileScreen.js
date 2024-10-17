import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import styles from './ProfileScreenStyle'; // Import style dari file terpisah
import profileImage from '../../../assets/foto-profil.png'; // Pastikan path benar

export default function ProfileScreen() {
  const openGithub = () => {
    Linking.openURL('https://github.com/wimanmja'); // Ganti dengan URL GitHub Anda
  };

  const openLinkedIn = () => {
    Linking.openURL('https://linkedin.com/in/wimanmahroja'); // Ganti dengan URL LinkedIn Anda
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto Profil dan Nama */}
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.name}>Wiman Mahroja</Text>
      <Text style={styles.title}> Front-End & Mobile Developer</Text>

      {/* Deskripsi Singkat */}
      <Text style={styles.description}>
        Selama masa kuliah, saya telah menjelajahi mata
        kuliah pengembangan produk dengan fokus pada
        praktik Agile. Pemahaman yang kuat tentang
        konsep dan metodologi Agile telah saya
        aplikasikan dalam proyek pengembangan
        produk di lingkungan kampus. Untuk saat ini saya berfokus
        pada pengembangan aplikasi mobile dan pengembangan
        front-end pada website.
      </Text>

      {/* Keahlian */}
      <Text style={styles.sectionTitle}>Keahlian</Text>
      <View style={styles.skillsContainer}>
        <Text style={styles.skill}>Flutter</Text>
        <Text style={styles.skill}>Front-End</Text>
        <Text style={styles.skill}>Software Quality Assurance</Text>
        <Text style={styles.skill}>Git</Text>
      </View>

      {/* Portofolio - Proyek */}
      <Text style={styles.sectionTitle}>Portofolio</Text>
      <View style={styles.projectsContainer}>
        {/* Proyek 1 */}
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Dashboard Risk Register</Text>
          <Text style={styles.projectDescription}>
            Saya membuat dashboard yang dibuat dengan tujuan untuk
            memvisualisasikan data risk register, memberikan
            informasi yang jelas dan terperinci mengenai risiko
            yang diidentifikasi pada setiap dinas.
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/wimanmja/gmf_dashboard')}>
            <Text style={styles.projectLink}>Lihat di GitHub</Text>
          </TouchableOpacity>
        </View>
        {/* Proyek 2 */}
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Flipbook</Text>
          <Text style={styles.projectDescription}>
            Saya mengembangkan website e-book berbentuk
            majalah yang memungkinkan pengguna untuk
            membuat, mengubah, dan melihat e-book dengan
            mudah.
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/wimanmja/Flipbook')}>
            <Text style={styles.projectLink}>Lihat di GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Informasi Kontak */}
      <Text style={styles.sectionTitle}>Kontak</Text>
      <Text style={styles.contactText}>Email: wimanmahroja@gmail.com</Text>
      <View style={styles.socialLinksContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={openGithub}>
          <Text style={styles.socialButtonText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={openLinkedIn}>
          <Text style={styles.socialButtonText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}