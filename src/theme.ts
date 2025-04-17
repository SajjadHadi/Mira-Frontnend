// // src/app/custom-theme.ts
// import { definePreset } from '@primeng/themes';
//
// const miraTheme = definePreset(Aura, {
//   semantic: {
//     primary: {
//       50: '#f5f3ff',
//       100: '#ede9fe',
//       200: '#ddd6fe',
//       300: '#c4b5fd',
//       400: '#a78bfa', // Main primary color
//       500: '#8b5cf6',
//       600: '#7c3aed',
//       700: '#6d28d9',
//       800: '#5b21b6',
//       900: '#4c1d95',
//       950: '#2e1065'
//     },
//     colorScheme: {
//       dark: {
//         primary: {
//           color: '{primary.400}',      // #a78bfa
//           inverseColor: '#f0f9ff',
//           hoverColor: '{primary.300}',
//           activeColor: '{primary.500}'
//         },
//         highlight: {
//           background: '#7dd3fc',       // Soft blue
//           focusBackground: '#38bdf8',
//           color: '#f3f4f6',           // Light text for highlight
//           focusColor: '#f3f4f6'
//         },
//         surface: {
//           0: '#111827',   // Dashboard background
//           100: '#1f2937', // Cards/panels
//           200: '#374151', // Borders
//           500: '#6b7280'  // Secondary elements
//         },
//         content: {
//           base: '#f3f4f6',     // Primary text (light gray, default for all text)
//           subtle: '#d1d5db',   // Secondary text (slightly muted)
//           muted: '#9ca3af',    // Placeholder/disabled text
//           highlight: '#a78bfa' // Accent text (purple)
//         },
//         text: {
//           color: '{content.base}', // #f3f4f6 for all text by default
//           hoverColor: '{content.subtle}', // #d1d5db
//           mutedColor: '{content.muted}' // #9ca3af
//         }
//       }
//     },
//     components: {
//       button: {
//         colorScheme: {
//           dark: {
//             root: {
//               color: '{content.base}', // #f3f4f6
//               hoverColor: '{content.subtle}',
//               background: '{primary.400}', // #a78bfa
//               hoverBackground: '{primary.300}'
//             },
//             secondary: {
//               color: '{content.base}', // #f3f4f6
//               background: '{highlight.background}', // #7dd3fc
//               hoverBackground: '{highlight.focusBackground}'
//             }
//           }
//         }
//       },
//       panelmenu: {
//         colorScheme: {
//           dark: {
//             root: {
//               color: '{content.base}', // #f3f4f6 for all text
//               hoverColor: '{content.subtle}', // #d1d5db
//               activeColor: '{primary.inverseColor}' // #f0f9ff
//             },
//             header: {
//               color: '{content.base}', // #f3f4f6 for header text
//               hoverColor: '{content.subtle}',
//               activeColor: '{primary.inverseColor}',
//               background: 'transparent',
//               hoverBackground: '{primary.300}', // #c4b5fd
//               activeBackground: '{primary.300}'
//             },
//             item: {
//               color: '{content.base}', // #f3f4f6 for menu item text
//               hoverColor: '{primary.inverseColor}', // #f0f9ff
//               activeColor: '{primary.inverseColor}',
//               background: 'transparent',
//               hoverBackground: '{primary.300}', // #c4b5fd
//               activeBackground: '{primary.300}'
//             },
//             icon: {
//               color: '{content.base}', // #f3f4f6 for icons
//               hoverColor: '{primary.inverseColor}',
//               activeColor: '{primary.inverseColor}'
//             }
//           }
//         }
//       },
//       card: {
//         colorScheme: {
//           dark: {
//             root: {
//               color: '{content.base}', // #f3f4f6
//               background: '{surface.100}' // #1f2937
//             }
//           }
//         }
//       }
//     }
//   }
// });
//
// export default miraTheme;
