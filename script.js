// Load the anime sisters SVG illustration
document.addEventListener('DOMContentLoaded', function() {
    const svgContainer = document.getElementById('anime-sisters-svg');
    
    const animeSistersSVG = `
        <svg width="280" height="180" viewBox="0 0 280 180" class="w-full h-full">
            <!-- Background sparkles -->
            <g class="float-up">
                <polygon points="40,30 42,35 47,35 43,38 45,43 40,40 35,43 37,38 33,35 38,35" fill="#fbbf24" opacity="0.8"/>
                <polygon points="220,40 222,45 227,45 223,48 225,53 220,50 215,53 217,48 213,45 218,45" fill="#ec4899" opacity="0.7"/>
                <polygon points="60,140 62,145 67,145 63,148 65,153 60,150 55,153 57,148 53,145 58,145" fill="#f97316" opacity="0.6"/>
                <polygon points="240,120 242,125 247,125 243,128 245,133 240,130 235,133 237,128 233,125 238,125" fill="#dc2626" opacity="0.8"/>
            </g>
            
            <!-- Sister 1 (left) - Anime style with big eyes -->
            <g transform="translate(50, 30)">
                <!-- Head (bigger for anime style) -->
                <circle cx="30" cy="30" r="22" fill="#fdbcb4" stroke="#f59e0b" stroke-width="1"/>
                <!-- Anime hair - purple with accessories -->
                <path d="M8 25 Q30 5 52 25 Q48 45 30 38 Q12 45 8 25" fill="#8b5cf6"/>
                <path d="M15 20 Q30 8 45 20 Q42 35 30 32 Q18 35 15 20" fill="#a855f7"/>
                <!-- Hair accessories -->
                <circle cx="20" cy="18" r="3" fill="#fbbf24"/>
                <circle cx="40" cy="18" r="3" fill="#ec4899"/>
                <rect x="18" y="15" width="2" height="6" fill="#fbbf24"/>
                <rect x="38" y="15" width="2" height="6" fill="#ec4899"/>
                
                <!-- Large anime eyes -->
                <ellipse cx="22" cy="26" rx="4" ry="5" fill="white"/>
                <ellipse cx="38" cy="26" rx="4" ry="5" fill="white"/>
                <ellipse cx="22" cy="26" rx="3" ry="4" fill="#4c1d95"/>
                <ellipse cx="38" cy="26" rx="3" ry="4" fill="#4c1d95"/>
                <circle cx="22" cy="25" r="1.5" fill="black"/>
                <circle cx="38" cy="25" r="1.5" fill="black"/>
                <!-- Eye highlights -->
                <circle cx="23" cy="24" r="0.8" fill="white"/>
                <circle cx="39" cy="24" r="0.8" fill="white"/>
                <circle cx="21" cy="26" r="0.3" fill="white"/>
                <circle cx="37" cy="26" r="0.3" fill="white"/>
                
                <!-- Cute blush -->
                <circle cx="15" cy="30" r="2" fill="#f472b6" opacity="0.6"/>
                <circle cx="45" cy="30" r="2" fill="#f472b6" opacity="0.6"/>
                
                <!-- Happy smile -->
                <path d="M20 35 Q30 40 40 35" stroke="#dc2626" stroke-width="2" fill="none"/>
                
                <!-- Body -->
                <rect x="20" y="50" width="20" height="30" rx="10" fill="#ec4899"/>
                <!-- Arms -->
                <ellipse cx="12" cy="60" rx="4" ry="10" fill="#fdbcb4"/>
                <ellipse cx="48" cy="60" rx="4" ry="10" fill="#fdbcb4"/>
                <!-- Hands -->
                <circle cx="10" cy="70" r="3" fill="#fdbcb4"/>
                <circle cx="50" cy="70" r="3" fill="#fdbcb4"/>
                
                <!-- Cute dress details -->
                <rect x="22" y="55" width="16" height="3" fill="#f472b6"/>
                <circle cx="25" cy="62" r="1" fill="#fbbf24"/>
                <circle cx="30" cy="62" r="1" fill="#fbbf24"/>
                <circle cx="35" cy="62" r="1" fill="#fbbf24"/>
            </g>
            
            <!-- Sister 2 (right) - Anime style -->
            <g transform="translate(170, 30)">
                <!-- Head -->
                <circle cx="30" cy="30" r="22" fill="#fdbcb4" stroke="#f59e0b" stroke-width="1"/>
                <!-- Anime hair - golden twin tails -->
                <path d="M8 25 Q30 5 52 25 Q48 40 30 35 Q12 40 8 25" fill="#fbbf24"/>
                <path d="M15 20 Q30 8 45 20 Q42 32 30 30 Q18 32 15 20" fill="#f59e0b"/>
                <!-- Twin tails -->
                <ellipse cx="12" cy="35" rx="6" ry="15" fill="#fbbf24" transform="rotate(-20 12 35)"/>
                <ellipse cx="48" cy="35" rx="6" ry="15" fill="#fbbf24" transform="rotate(20 48 35)"/>
                <!-- Hair ribbons -->
                <rect x="8" y="30" width="8" height="4" rx="2" fill="#dc2626"/>
                <rect x="44" y="30" width="8" height="4" rx="2" fill="#dc2626"/>
                
                <!-- Large anime eyes -->
                <ellipse cx="22" cy="26" rx="4" ry="5" fill="white"/>
                <ellipse cx="38" cy="26" rx="4" ry="5" fill="white"/>
                <ellipse cx="22" cy="26" rx="3" ry="4" fill="#059669"/>
                <ellipse cx="38" cy="26" rx="3" ry="4" fill="#059669"/>
                <circle cx="22" cy="25" r="1.5" fill="black"/>
                <circle cx="38" cy="25" r="1.5" fill="black"/>
                <!-- Eye highlights -->
                <circle cx="23" cy="24" r="0.8" fill="white"/>
                <circle cx="39" cy="24" r="0.8" fill="white"/>
                <circle cx="21" cy="26" r="0.3" fill="white"/>
                <circle cx="37" cy="26" r="0.3" fill="white"/>
                
                <!-- Cute blush -->
                <circle cx="15" cy="30" r="2" fill="#f472b6" opacity="0.6"/>
                <circle cx="45" cy="30" r="2" fill="#f472b6" opacity="0.6"/>
                
                <!-- Happy smile -->
                <path d="M20 35 Q30 40 40 35" stroke="#dc2626" stroke-width="2" fill="none"/>
                
                <!-- Body -->
                <rect x="20" y="50" width="20" height="30" rx="10" fill="#f97316"/>
                <!-- Arms -->
                <ellipse cx="12" cy="60" rx="4" ry="10" fill="#fdbcb4"/>
                <ellipse cx="48" cy="60" rx="4" ry="10" fill="#fdbcb4"/>
                <!-- Extended arm for rakhi -->
                <ellipse cx="8" cy="65" rx="3" ry="8" fill="#fdbcb4"/>
                <!-- Hands -->
                <circle cx="10" cy="70" r="3" fill="#fdbcb4"/>
                <circle cx="50" cy="70" r="3" fill="#fdbcb4"/>
                
                <!-- Cute dress details -->
                <rect x="22" y="55" width="16" height="3" fill="#fbbf24"/>
                <circle cx="25" cy="62" r="1" fill="#ec4899"/>
                <circle cx="30" cy="62" r="1" fill="#ec4899"/>
                <circle cx="35" cy="62" r="1" fill="#ec4899"/>
            </g>
            
            <!-- Kawaii Rakhi being tied -->
            <g transform="translate(130, 95)">
                <!-- Rakhi thread -->
                <path d="M-15 8 Q10 3 35 8" stroke="#fbbf24" stroke-width="3" fill="none"/>
                <!-- Cute rakhi with face -->
                <circle cx="10" cy="8" r="8" fill="#dc2626" stroke="#b91c1c" stroke-width="1"/>
                <circle cx="10" cy="8" r="6" fill="#fbbf24"/>
                <circle cx="10" cy="8" r="3" fill="#dc2626"/>
                <!-- Rakhi face -->
                <circle cx="8" cy="6" r="0.5" fill="black"/>
                <circle cx="12" cy="6" r="0.5" fill="black"/>
                <path d="M7 9 Q10 11 13 9" stroke="black" stroke-width="0.5" fill="none"/>
                <!-- Sparkles around rakhi -->
                <polygon points="2,5 3,7 5,7 3.5,8.5 4,11 2,10 0,11 0.5,8.5 -1,7 1,7" fill="#fbbf24" opacity="0.8"/>
                <polygon points="18,3 19,5 21,5 19.5,6.5 20,9 18,8 16,9 16.5,6.5 15,5 17,5" fill="#ec4899" opacity="0.8"/>
            </g>
            
            <!-- Speech bubbles -->
            <g transform="translate(70, 15)">
                <ellipse cx="0" cy="0" rx="15" ry="8" fill="white" stroke="#ec4899" stroke-width="1"/>
                <polygon points="-5,6 -8,12 -2,8" fill="white"/>
                <text x="0" y="2" font-size="8" fill="#ec4899" text-anchor="middle" font-weight="bold">Happy!</text>
            </g>
            
            <g transform="translate(200, 15)">
                <ellipse cx="0" cy="0" rx="20" ry="8" fill="white" stroke="#f97316" stroke-width="1"/>
                <polygon points="5,6 8,12 2,8" fill="white"/>
                <text x="0" y="2" font-size="8" fill="#f97316" text-anchor="middle" font-weight="bold">Thank you!</text>
            </g>
            
            <!-- Floating kawaii elements -->
            <g class="float-up">
                <text x="80" y="25" font-size="14" fill="#ec4899">💖</text>
                <text x="180" y="30" font-size="12" fill="#fbbf24">✨</text>
                <text x="140" y="20" font-size="16" fill="#dc2626">🌟</text>
                <text x="100" y="140" font-size="12" fill="#f97316">💕</text>
                <text x="200" y="135" font-size="14" fill="#ec4899">✨</text>
            </g>
            
            <!-- Bottom text -->
            <g transform="translate(140, 160)">
                <text font-size="14" fill="#8b5cf6" text-anchor="middle" font-weight="bold" style="font-family: 'Great Vibes', cursive;">Sisters Forever! ✨</text>
            </g>
        </svg>
    `;
    
    svgContainer.innerHTML = animeSistersSVG;
});
