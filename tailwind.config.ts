
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					purple: '#9b87f5', // Keep this for compatibility
					cyan: '#0EA5E9',  // Keep this for compatibility
					magenta: '#ec4899', // Keep this for compatibility
				},
				impcore: {
					pink: '#e91e63',     // IMPCORE signature pink
					darkpink: '#d11556', // Darker variation
					dark: '#121212',     // Background dark
					darker: '#0a0a0a',   // Even darker background
					light: '#2a2a2a',    // Light background
				},
				techno: {
					dark: '#121212',
					darker: '#0a0a0a',
					light: '#2a2a2a',
				},
			},
			fontFamily: {
				sans: ['Exo 2', 'sans-serif'],
				display: ['Orbitron', 'monospace'],
				futuristic: ['Orbitron', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: 1
					},
					'50%': {
						opacity: 0.5
					}
				},
				'waveform': {
					'0%': {
						height: '5px'
					},
					'50%': {
						height: '20px'
					},
					'100%': {
						height: '5px'
					}
				},
				'textGlow': {
					'0%': {
						textShadow: '0 0 5px rgba(234, 56, 76, 0.8), 0 0 10px rgba(234, 56, 76, 0.6), 0 0 15px rgba(234, 56, 76, 0.4)'
					},
					'100%': {
						textShadow: '0 0 10px rgba(234, 56, 76, 1), 0 0 20px rgba(234, 56, 76, 0.8), 0 0 30px rgba(234, 56, 76, 0.6)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'waveform-1': 'waveform 1.2s ease-in-out infinite',
				'waveform-2': 'waveform 0.9s ease-in-out infinite',
				'waveform-3': 'waveform 1.5s ease-in-out infinite',
				'waveform-4': 'waveform 0.8s ease-in-out infinite',
				'waveform-5': 'waveform 1.1s ease-in-out infinite',
				'text-glow': 'textGlow 2s ease-in-out infinite alternate',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'techno-pattern': 'linear-gradient(to right, #121212 1px, transparent 1px), linear-gradient(to bottom, #121212 1px, transparent 1px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
