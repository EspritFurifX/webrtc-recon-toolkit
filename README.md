# ⚡ CYBER RECON

## 🎯 Professional Penetration Testing Tool for Live Streaming

Un outil de reconnaissance cybersécurité avancé exploitant les fuites WebRTC pour collecter des informations réseau et fingerprinting de périphériques en temps réel.

---

## 🚀 Fonctionnalités

### 🔓 Exploitation WebRTC
- **Interception automatique** des connexions RTCPeerConnection
- **Détection des fuites IP** via candidats srflx
- **Géolocalisation avancée** avec ipapi.co

### 💻 Device Fingerprinting
- Navigateur & système d'exploitation
- GPU (via WebGL)
- CPU (nombre de cœurs)
- Résolution d'écran & pixel ratio
- État de la batterie
- Type de connexion réseau
- Langue, timezone, heure locale

### 🌍 Intelligence Géographique
- **Adresse IP publique** de la cible
- **ISP** (Fournisseur d'accès Internet)
- **ASN** (Autonomous System Number)
- **Localisation complète** : Ville, Région, Pays
- **Code postal**
- **Coordonnées GPS** (latitude/longitude)
- **Intégration Google Maps** pour visualisation
- Timezone, devise, langues

### 🎨 Interface Cyberpunk Professionnelle
- Design hacker avec gradients néon
- Animations fluides et effets de glow
- Console logs professionnels avec préfixes [SYSTEM], [BREACH], [RECON]
- Panel draggable avec contrôles Minimize/Clear/Close
- Compteur de cibles acquises
- Bouton RECON animé avec états (STANDBY → ACTIVE → ONLINE)

---

## 🌐 Plateformes Compatibles

### ✅ Fonctionnement Optimal (WebRTC P2P Direct)
- **Omegle** - Idéal pour tests rapides, connexion P2P pure
- **MAzar** - Plateforme de rencontre vidéo, WebRTC natif
- **Chatroulette** - Chat vidéo aléatoire, excellent support
- **Discord** - Appels vocaux/vidéo (1-to-1 et petits groupes)
- **Google Meet** - Appels P2P directs
- **Jitsi Meet** - Visioconférence open-source
- **Facebook essenger** - Appels vidéo WebRTC
- **WhatsApp Web** - Appels vocaux/vidéo

### ⚠️ Fonctionnement Partiel
- **TikTok Live** - Fonctionne uniquement en mode co-streaming (live avec invités)
- **Zoom** - Seulement si le mode P2P est activé (petites réunions)
- **Microsoft Teams** - Dépend de la configuration réseau

### ❌ Non Compatible (Streaming Serveur Uniquement)
- **Twitch** - Streaming unidirectionnel sans WebRTC P2P
- **YouTube Live** - Architecture serveur, pas de P2P
- **Instagram Live** - Streaming serveur uniquement
- **Kick** - Streaming centralisé

> **💡 Astuce :** Les plateformes de **chat vidéo aléatoire** et **appels directs** sont les plus efficaces car elles utilisent systématiquement WebRTC en peer-to-peer.

---

## 📋 Installation & Utilisation

### Méthode 1 : Injection Console (Recommandée)
1. Ouvrir la plateforme compatible (Omegle, Discord, Azar, etc.)
2. Ouvrir la console développeur (`Cmd+Option+J` sur Mac, `F12` sur Windows)
3. Copier-coller le contenu de `cyber_recon_v1.0.0.js`
4. Appuyer sur **Entrée**

### Méthode 2 : Extension de navigateur
1. Créer une extension Chrome/Firefox
2. Injecter le script via content script
3. Activer l'extension sur la page cible

### Méthode 3 : Bookmarklet
1. Créer un favori
2. Dans l'URL, coller : `javascript:(function(){/* code minifié */})();`
3. Cliquer sur le favori quand la page est chargée

---

## 🎮 Mode d'emploi

### 1️⃣ Lancement
- Un popup **SECURITY RESEARCH AGREEMENT** apparaît au premier lancement
- Accepter pour autoriser l'accès (localStorage mémorise le choix)

### 2️⃣ Activation du Scan
- Cliquer sur le bouton **⚡ RECON** (coin supérieur droit)
- Le panel de résultats s'affiche automatiquement
- Le fingerprinting du device s'exécute immédiatement

### 3️⃣ Détection Automatique
- Dès qu'une connexion WebRTC est établie (appel vidéo, audio)
- L'IP de la cible est **automatiquement capturée**
- La géolocalisation complète s'affiche en temps réel

### 4️⃣ Actions Disponibles
- **📋 COPY TARGET** : Copier l'IP dans le presse-papier
- **🎯 GEOLOCATE** : Ouvrir Google Maps avec les coordonnées
- **Minimize** : Réduire le panel
- **Clear All** : Effacer tous les résultats
- **Close** : Fermer le panel

---

## ⚖️ Avertissement Légal

### ⚠️ USAGE STRICTEMENT ÉDUCATIF

Cet outil est conçu pour :
- ✅ **Recherche en cybersécurité**
- ✅ **Tests de pénétration autorisés**
- ✅ **Démonstrations éducatives**
- ✅ **Audit de sécurité réseau**

**INTERDIT** pour :
- ❌ Harcèlement ou traque
- ❌ Collecte non consentie de données
- ❌ Violation de vie privée
- ❌ Toute activité malveillante

### 📜 Responsabilité
L'utilisateur assume **l'entière responsabilité** de l'usage de cet outil. Le développeur décline toute responsabilité en cas d'utilisation illégale ou non éthique.

---

## 🛡️ Aspects Techniques

### Technologies Utilisées
- **JavaScript Vanilla** (pas de dépendances)
- **WebRTC API** (RTCPeerConnection hooking)
- **Navigator APIs** (fingerprinting)
- **ipapi.co** (géolocalisation IP)
- **WebGL** (détection GPU)
- **Battery Status API**
- **Network Information API**

### Compatibilité
- ✅ Chrome / Chromium
- ✅ Firefox
- ✅ Edge
- ✅ Opera
- ⚠️ Safari (support partiel WebRTC)

### Sécurité
- Aucune donnée transmise à un serveur tiers (sauf ipapi.co pour géoloc)
- Tout le traitement est **local dans le navigateur**
- Pas de tracking, pas de télémétrie
- Code open-source auditable

---

## 🎯 Cas d'Usage Légitimes

### 1. Tests de Pénétration
Vérifier si une application web fuit des IP via WebRTC

### 2. Audit de Sécurité
Démontrer les risques de fuites WebRTC aux développeurs

### 3. Éducation Cybersécurité
Enseigner les vulnérabilités réseau dans un cadre contrôlé

### 4. Démonstrations Live
Impressionner un public avec des techniques de reconnaissance (cadre éthique)

---

## 📊 Données Collectées

### Device Fingerprint
```
- User Agent (navigateur)
- Plateforme (OS)
- Langue du navigateur
- Heure & timezone
- Résolution écran
- Device Pixel Ratio
- Nombre de cœurs CPU
- GPU (WebGL)
- État batterie
- Type de connexion réseau
```

### Network Intelligence
```
- Adresse IP publique
- ISP (Fournisseur Internet)
- ASN (Numéro de système autonome)
- Ville
- Région
- Pays
- Code postal
- Coordonnées GPS (lat/long)
- Timezone
- Devise locale
- Langues du pays
```

---

## 🔧 Configuration Avancée

### Personnaliser les Couleurs
Modifier les variables CSS inline dans le code :
- `#00ff99` : Vert néon (succès)
- `#1ec8ff` : Cyan (info)
- `#ff6b6b` : Rouge (alertes)

### Désactiver le Disclaimer
Supprimer ou commenter la section `showLegalDisclaimer()` (non recommandé)

### Modifier l'API de Géolocalisation
Remplacer `ipapi.co` par une autre API (ipinfo.io, ip-api.com, etc.)

---

## 📈 Versions

### v1.0.0 (10 décembre 2025)
- 🎉 Version initiale
- ✅ Exploitation WebRTC complète
- ✅ Device fingerprinting avancé
- ✅ Géolocalisation détaillée avec GPS
- ✅ Interface cyberpunk professionnelle
- ✅ Disclaimer légal intégré
- ✅ Panel draggable
- ✅ Google Maps integration

---

## 🤝 Contribution

Cet outil est à usage personnel. Toute amélioration doit respecter le cadre éthique et légal.

---

## 📞 Support

Pour questions ou démonstrations éducatives uniquement.

---

## 🔐 Licence

**Usage Éducatif & Recherche Uniquement**  
Tous droits réservés © 2025

---

<div align="center">

**⚡ CYBER RECON v1.0.0 ⚡**

*Developed by Security Researcher*

</div>
