import React, { useState, useEffect, useCallback } from 'react';
import './EasterEggs.css';

const EasterEggs = () => {
    const [konamiIndex, setKonamiIndex] = useState(0);
    const [discoMode, setDiscoMode] = useState(false);
    const [matrixMode, setMatrixMode] = useState(false);
    const [cursorTrail, setCursorTrail] = useState(false);
    const [showDevConsole, setShowDevConsole] = useState(false);
    const [consoleMessages, setConsoleMessages] = useState([
        '> System initialized...',
        '> Loading Easter eggs...',
        '> Type "help" for available commands'
    ]);
    const [consoleInput, setConsoleInput] = useState('');
    const [achievements, setAchievements] = useState([]);
    const [showAchievement, setShowAchievement] = useState(null);
    const [particles, setParticles] = useState([]);

    // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];

    const unlockAchievement = useCallback((name, description) => {
        if (!achievements.includes(name)) {
            setAchievements(prev => [...prev, name]);
            setShowAchievement({ name, description });
            setTimeout(() => setShowAchievement(null), 4000);

            // Play a little sound effect (optional)
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAo=');
            audio.volume = 0.3;
            audio.play().catch(() => { });
        }
    }, [achievements]);

    // Konami Code Handler
    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key.toLowerCase();

            // Check for Konami code
            if (key === konamiCode[konamiIndex].toLowerCase()) {
                const newIndex = konamiIndex + 1;
                setKonamiIndex(newIndex);

                if (newIndex === konamiCode.length) {
                    setDiscoMode(true);
                    unlockAchievement('Konami Master', 'Activated the legendary Konami Code!');
                    setTimeout(() => setDiscoMode(false), 10000);
                    setKonamiIndex(0);
                }
            } else {
                setKonamiIndex(0);
            }

            // Secret Dev Console (Ctrl + Shift + D)
            if (e.ctrlKey && e.shiftKey && key === 'd') {
                setShowDevConsole(prev => !prev);
                if (!showDevConsole) {
                    unlockAchievement('Developer', 'Found the secret developer console!');
                }
            }

            // Matrix Mode (Ctrl + Shift + M)
            if (e.ctrlKey && e.shiftKey && key === 'm') {
                setMatrixMode(prev => !prev);
                if (!matrixMode) {
                    unlockAchievement('Neo', 'Entered the Matrix!');
                }
            }

            // Cursor Trail (Ctrl + Shift + T)
            if (e.ctrlKey && e.shiftKey && key === 't') {
                setCursorTrail(prev => !prev);
                if (!cursorTrail) {
                    unlockAchievement('Trail Blazer', 'Activated cursor trail!');
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [konamiIndex, showDevConsole, matrixMode, cursorTrail, unlockAchievement]);

    // Cursor Trail Effect
    useEffect(() => {
        if (!cursorTrail) return;

        const handleMouseMove = (e) => {
            const trail = {
                x: e.clientX,
                y: e.clientY,
                id: Date.now() + Math.random()
            };

            setParticles(prev => [...prev, trail].slice(-20));
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [cursorTrail]);

    // Clear old particles
    useEffect(() => {
        if (particles.length === 0) return;

        const timer = setTimeout(() => {
            setParticles(prev => prev.slice(1));
        }, 100);

        return () => clearTimeout(timer);
    }, [particles]);

    // Matrix Rain Effect
    useEffect(() => {
        if (!matrixMode) return;

        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
    }, [matrixMode]);

    // Console Commands
    const handleConsoleCommand = (cmd) => {
        const command = cmd.toLowerCase().trim();
        let response = '';

        switch (command) {
            case 'help':
                response = `Available commands:
- help: Show this message
- about: About this site
- achievements: List unlocked achievements
- disco: Toggle disco mode
- matrix: Toggle matrix mode
- trail: Toggle cursor trail
- gravity: Flip the page upside down!
- clear: Clear console
- secret: Reveal a secret
- dance: Make the page dance`;
                break;
            case 'about':
                response = 'Personal website of Clay Karow - filled with hidden Easter eggs! Keep exploring...';
                break;
            case 'achievements':
                response = achievements.length > 0
                    ? `Unlocked: ${achievements.join(', ')}`
                    : 'No achievements unlocked yet. Keep exploring!';
                break;
            case 'disco':
                setDiscoMode(prev => !prev);
                response = 'Disco mode toggled!';
                break;
            case 'matrix':
                setMatrixMode(prev => !prev);
                response = 'Welcome to the Matrix...';
                break;
            case 'trail':
                setCursorTrail(prev => !prev);
                response = 'Cursor trail toggled!';
                break;
            case 'clear':
                setConsoleMessages([]);
                return;
            case 'secret':
                response = '🎉 The cake is a lie! But the code is real.';
                unlockAchievement('Secret Keeper', 'Discovered a hidden secret!');
                break;
            case 'dance':
                document.body.style.animation = 'shake 0.5s';
                setTimeout(() => document.body.style.animation = '', 500);
                response = '💃 Dancing!';
                break;
            case 'gravity':
                const isUpsideDown = document.body.style.transform === 'rotate(180deg)';
                if (!isUpsideDown) {
                    document.body.style.transform = 'rotate(180deg)';
                    document.body.style.transition = 'transform 1s ease';
                    response = '🙃 Gravity reversed! Type "gravity" again to fix it.';
                    unlockAchievement('Upside Down', 'Defied gravity!');
                } else {
                    document.body.style.transform = '';
                    response = '✅ Gravity restored!';
                }
                break;
            default:
                response = `Unknown command: ${command}. Type "help" for available commands.`;
        }

        setConsoleMessages(prev => [...prev, `> ${cmd}`, response]);
    };

    const handleConsoleSubmit = (e) => {
        e.preventDefault();
        if (consoleInput.trim()) {
            handleConsoleCommand(consoleInput);
            setConsoleInput('');
        }
    };

    return (
        <>
            {/* Disco Mode Overlay */}
            {discoMode && (
                <div className="disco-mode">
                    <div className="disco-light disco-light-1"></div>
                    <div className="disco-light disco-light-2"></div>
                    <div className="disco-light disco-light-3"></div>
                    <div className="disco-message">🕺 DISCO MODE ACTIVATED! 💃</div>
                </div>
            )}

            {/* Matrix Mode Canvas */}
            {matrixMode && (
                <canvas id="matrix-canvas" className="matrix-canvas"></canvas>
            )}

            {/* Cursor Trail */}
            {cursorTrail && particles.map((particle, index) => (
                <div
                    key={particle.id}
                    className="cursor-particle"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        opacity: 1 - (index / particles.length)
                    }}
                />
            ))}

            {/* Developer Console */}
            {showDevConsole && (
                <div className="dev-console">
                    <div className="console-header">
                        <span>🖥️ Developer Console</span>
                        <button onClick={() => setShowDevConsole(false)}>×</button>
                    </div>
                    <div className="console-output">
                        {consoleMessages.map((msg, i) => (
                            <div key={i} className="console-line">{msg}</div>
                        ))}
                    </div>
                    <form onSubmit={handleConsoleSubmit} className="console-input-form">
                        <span className="console-prompt">$</span>
                        <input
                            type="text"
                            value={consoleInput}
                            onChange={(e) => setConsoleInput(e.target.value)}
                            className="console-input"
                            placeholder="Type 'help' for commands..."
                            autoFocus
                        />
                    </form>
                </div>
            )}

            {/* Achievement Popup */}
            {showAchievement && (
                <div className="achievement-popup">
                    <div className="achievement-icon">🏆</div>
                    <div className="achievement-content">
                        <div className="achievement-title">Achievement Unlocked!</div>
                        <div className="achievement-name">{showAchievement.name}</div>
                        <div className="achievement-description">{showAchievement.description}</div>
                    </div>
                </div>
            )}

            {/* Hidden Achievement Counter */}
            {achievements.length > 0 && (
                <div className="achievement-counter" title={`Achievements: ${achievements.join(', ')}`}>
                    🏆 {achievements.length}
                </div>
            )}
        </>
    );
};

export default EasterEggs;
