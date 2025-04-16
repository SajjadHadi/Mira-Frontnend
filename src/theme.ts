// custom-theme.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const miraTheme = definePreset(Aura, {
  semantic: {
    // Primary color palette (soft purple)
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa', // Main primary color
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065'
    },
    // Color scheme (dark mode only for simplicity)
    colorScheme: {
      dark: {
        // Primary color settings
        primary: {
          color: '{primary.400}',      // #a78bfa (main purple)
          inverseColor: '#f0f9ff',     // Light text for primary backgrounds
          hoverColor: '{primary.300}', // Lighter purple for hover
          activeColor: '{primary.500}' // Deeper purple for active
        },
        // Secondary color (soft blue for subtle contrast)
        highlight: {
          background: '#7dd3fc',       // Muted sky blue
          focusBackground: '#38bdf8',
          color: '#1f2937',            // Dark text for readability
          focusColor: '#1f2937'
        },
        // Surface (backgrounds and cards)
        surface: {
          0: '#111827',   // Deep dark background (dashboard base)
          100: '#1f2937', // Slightly lighter for cards/panels
          200: '#374151', // Borders or subtle dividers
          500: '#6b7280'  // Muted gray for secondary elements
        },
        // Content (text and icons)
        content: {
          base: '#f3f4f6',     // Primary text color (light gray)
          subtle: '#d1d5db',   // Secondary text (muted gray)
          muted: '#9ca3af',    // Disabled or placeholder text
          highlight: '#a78bfa' // Accent text (matches primary)
        }
      }
    }
  }
});

export default miraTheme;
