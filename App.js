import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    if (email.trim() === "" || password === "") {
      Alert.alert("Peringatan", "Email dan password harus diisi!");
      return;
    }

    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
    setEmail("");
    setPassword("");
  };

  if (!isLogin) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0878B9" barStyle="light-content" />

        <View style={styles.loginHeader}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>M</Text>
          </View>

          <Text style={styles.appTitle}>MY APP</Text>
          <Text style={styles.subtitle}>UTS MOBILE 1</Text>
        </View>

        <View style={styles.loginCard}>
          <Text style={styles.welcome}>Selamat Datang!</Text>
          <Text style={styles.description}>
            Silakan login untuk melanjutkan
          </Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>UTS PEMROGRAMAN MOBILE 1</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0878B9" barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.homeContent}>
        <View style={styles.homeHeader}>
          <Text style={styles.homeTitle}>HOME PAGE</Text>
          <Text style={styles.homeSubtitle}>Selamat datang di My App</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {email.trim().charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={styles.profileLabel}>PROFIL</Text>
          <Text style={styles.profileName}>{email.split("@")[0]}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>

        <Text style={styles.sectionTitle}>MENU UTAMA</Text>

        <View style={styles.menuGrid}>
          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => Alert.alert("Menu 1", "Kamu memilih Menu Beranda")}
          >
            <Text style={styles.menuIcon}>🏠</Text>
            <Text style={styles.menuText}>BERANDA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => Alert.alert("Menu 2", "Kamu memilih Menu Mata Kuliah")}
          >
            <Text style={styles.menuIcon}>📚</Text>
            <Text style={styles.menuText}>MATA KULIAH</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => Alert.alert("Menu 3", "Kamu memilih Menu Contact")}
          >
            <Text style={styles.menuIcon}>📱</Text>
            <Text style={styles.menuText}>CONTACT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard}
            onPress={() => Alert.alert("Menu 4", "Kamu memilih Menu Settings")}
          >
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuText}>SETTINGS</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F7FB",
  },
  loginHeader: {
    backgroundColor: "#0878B9",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
    paddingBottom: 65,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  logoCircle: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  logoText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0878B9",
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: "#D9F2FF",
    marginTop: 5,
  },
  loginCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24,
    marginTop: -35,
    padding: 24,
    borderRadius: 20,
    elevation: 5,
  },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#16364A",
  },
  description: {
    fontSize: 13,
    color: "#71808A",
    marginTop: 7,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#25465A",
    marginBottom: 8,
  },
  input: {
    height: 49,
    borderWidth: 1,
    borderColor: "#D5E1E8",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#16364A",
    backgroundColor: "#FAFCFE",
    marginBottom: 18,
  },
  loginButton: {
    height: 49,
    backgroundColor: "#0878B9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  footer: {
    textAlign: "center",
    color: "#8194A1",
    fontSize: 11,
    marginTop: 30,
  },
  homeContent: {
    padding: 20,
    paddingBottom: 35,
  },
  homeHeader: {
    backgroundColor: "#0878B9",
    padding: 22,
    borderRadius: 16,
    marginBottom: 20,
  },
  homeTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  homeSubtitle: {
    fontSize: 13,
    color: "#D9F2FF",
    marginTop: 5,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 22,
    borderRadius: 18,
    elevation: 3,
    marginBottom: 25,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#DDF2FF",
    borderWidth: 3,
    borderColor: "#0878B9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#0878B9",
  },
  profileLabel: {
    fontSize: 12,
    color: "#71808A",
    letterSpacing: 2,
  },
  profileName: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#16364A",
    marginTop: 5,
    textTransform: "capitalize",
  },
  profileEmail: {
    fontSize: 13,
    color: "#71808A",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#16364A",
    marginBottom: 14,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuCard: {
    width: "48%",
    minHeight: 115,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    elevation: 2,
    borderBottomWidth: 3,
    borderBottomColor: "#0878B9",
  },
  menuIcon: {
    fontSize: 29,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#16364A",
  },
  logoutButton: {
    height: 49,
    backgroundColor: "#D94343",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
