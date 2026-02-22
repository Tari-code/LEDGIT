// import React from 'react';

// export default function ConstructionImage() {
//   return (
//     <div className="w-full bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* SVG Construction Illustration */}
//         <div className="flex justify-center">
//           <svg
//             viewBox="0 0 400 300"
//             className="w-full max-w-md h-auto"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {/* Background */}
//             <defs>
//               <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" style={{ stopColor: '#1e1b4b', stopOpacity: 1 }} />
//                 <stop offset="100%" style={{ stopColor: '#2d1b69', stopOpacity: 1 }} />
//               </linearGradient>
//               <linearGradient id="brickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
//                 <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
//               </linearGradient>
//             </defs>

//             {/* Sky */}
//             <rect width="400" height="300" fill="url(#skyGradient)" />

//             {/* Crane */}
//             <g>
//               {/* Crane post */}
//               <rect x="280" y="80" width="12" height="140" fill="#f97316" />
//               {/* Crane arm */}
//               <rect x="150" y="90" width="150" height="8" fill="#f97316" />
//               {/* Cable */}
//               <line x1="290" y1="98" x2="290" y2="180" stroke="#dc2626" strokeWidth="2" />
//               {/* Hook */}
//               <circle cx="290" cy="185" r="6" fill="#dc2626" />
//             </g>

//             {/* Building Under Construction */}
//             <g>
//               {/* Foundation */}
//               <rect x="30" y="200" width="200" height="80" fill="url(#brickGradient)" opacity="0.8" />

//               {/* Brick pattern */}
//               {[...Array(5)].map((_, row) =>
//                 [...Array(4)].map((_, col) => (
//                   <g key={`brick-${row}-${col}`}>
//                     <rect
//                       x={30 + col * 50 + (row % 2 ? 25 : 0)}
//                       y={200 + row * 16}
//                       width={48}
//                       height={14}
//                       fill="none"
//                       stroke="#fbbf24"
//                       strokeWidth="1"
//                       opacity="0.5"
//                     />
//                   </g>
//                 ))
//               )}

//               {/* Scaffolding */}
//               <line x1="50" y1="220" x2="200" y2="220" stroke="#cbd5e1" strokeWidth="2" opacity="0.6" />
//               <line x1="50" y1="240" x2="200" y2="240" stroke="#cbd5e1" strokeWidth="2" opacity="0.6" />
//               <line x1="50" y1="260" x2="200" y2="260" stroke="#cbd5e1" strokeWidth="2" opacity="0.6" />

//               {/* Vertical supports */}
//               <line x1="70" y1="220" x2="70" y2="280" stroke="#cbd5e1" strokeWidth="2" opacity="0.6" />
//               <line x1="120" y1="220" x2="120" y2="280" stroke="#cbd5e1" strokeWidth="2" opacity="0.6" />
//               <line x1="170" y1="220" x2="170" y2="280" stroke="#cbd5e1" strokeWidth="2" opacity="0.6" />
//             </g>

//             {/* Worker figure */}
//             <g>
//               {/* Head */}
//               <circle cx="90" cy="165" r="8" fill="#f59e0b" />
//               {/* Body */}
//               <line x1="90" y1="173" x2="90" y2="200" stroke="#f59e0b" strokeWidth="4" />
//               {/* Arms */}
//               <line x1="70" y1="180" x2="110" y2="180" stroke="#f59e0b" strokeWidth="4" />
//               {/* Legs */}
//               <line x1="85" y1="200" x2="80" y2="225" stroke="#f59e0b" strokeWidth="3" />
//               <line x1="95" y1="200" x2="100" y2="225" stroke="#f59e0b" strokeWidth="3" />
//               {/* Hard hat */}
//               <ellipse cx="90" cy="160" rx="11" ry="7" fill="#ea580c" opacity="0.8" />
//             </g>

//             {/* Under Construction text */}
//             <g>
//               <text
//                 x="200"
//                 y="100"
//                 fontSize="24"
//                 fontWeight="bold"
//                 textAnchor="middle"
//                 fill="#c084fc"
//               >
//                 Under
//               </text>
//               <text
//                 x="200"
//                 y="130"
//                 fontSize="24"
//                 fontWeight="bold"
//                 textAnchor="middle"
//                 fill="#ec4899"
//               >
//                 Construction
//               </text>
//             </g>

//             {/* Decorative elements */}
//             <circle cx="50" cy="40" r="3" fill="#fbbf24" opacity="0.5" />
//             <circle cx="350" cy="60" r="3" fill="#fbbf24" opacity="0.5" />
//             <circle cx="100" cy="30" r="2" fill="#fbbf24" opacity="0.3" />
//             <circle cx="320" cy="150" r="2" fill="#fbbf24" opacity="0.3" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }
