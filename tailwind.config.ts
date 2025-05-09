import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			"ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
			"bebas-neue": ["var(--bebas-neue)"],
		},
  		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			// primary: {
			// 	DEFAULT: 'hsl(var(--primary))',
			// 	foreground: 'hsl(var(--primary-foreground))'
			// },
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			},
			blue: {
				100: "#738FA7",
				500: "#0C4160",
				700: "#163B50",
				800: "#05263B",
				900: "#071330",
				1000: "#000033",
				1100: "#02001c"
			},
			slate: {
				300: "#AEB8C4",
				500: "#9CA6B8"
			},
			purple: {
				250: "#b77df5",
				400: "#3e00ff",
				500: "#a15bf2",
				600: "#033587"
			}
		},
	  borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
	  },
	  screens:{
		  xs: "480px"
	  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
