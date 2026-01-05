
// // TradingViewWidget.jsx
// "use client"

// import React, { useEffect, useRef, memo } from 'react';

// function MetalWidget() {
//   const container = useRef<HTMLDivElement | null>(null);

//   useEffect(
//     () => {


//         if (!container.current) {
//             return
//         }
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//       {
//         "colorTheme": "dark",
//         "locale": "en",
//         "largeChartUrl": "",
//         "isTransparent": false,
//         "showSymbolLogo": true,
//         "backgroundColor": "#0F0F0F",
//         "support_host": "https://www.tradingview.com",
//         "width": "100%",
//         "height": 400,
// "symbolsGroups": [
//   {
//     "name": "Precious Metals",
//     "symbols": [
//       {
//         "name": "OANDA:XAUUSD",
//         "displayName": "Gold"
//       },
//       {
//         "name": "OANDA:XAGUSD",
//         "displayName": "Silver"
//       },
//       {
//         "name": "OANDA:XPTUSD",
//         "displayName": "Platinum"
//       },
//       {
//         "name": "OANDA:XPDUSD",
//         "displayName": "Palladium"
//       }
//     ]
//   },
//   {
//     "name": "Industrial Metals",
//     "symbols": [
//       {
//         "name": "OANDA:XCUUSD",
//         "displayName": "Copper"
//       }
//     ]
//   }
// ]

//       }`;
      
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className='py-6 px-4 '>

//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank"><span className="blue-text">Market summary</span></a><span className="trademark"> by TradingView</span></div>
//     </div>
//     </div>
   
//   );
// }

// export default memo(MetalWidget);




"use client"

import React, { useEffect, useRef, memo } from 'react';
import { useTheme } from "next-themes";

function MetalWidget() {
  const container = useRef<HTMLDivElement | null>(null);
  const { theme, resolvedTheme } = useTheme();

  // Determine actual theme (handles "system" preference)
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  useEffect(() => {
    if (!container.current) return;

    // 1. Clear previous widget before re-rendering for new theme
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.type = "text/javascript";
    script.async = true;

    const isDark = currentTheme === "dark";

  
    const bgColor = isDark ? "#09090b" : "#ffffff";
    const widgetTheme = isDark ? "dark" : "light";

    script.innerHTML = JSON.stringify({
      "colorTheme": widgetTheme,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "backgroundColor": bgColor,
      "support_host": "https://www.tradingview.com",
      "width": "100%",
      "height": 450,
      "symbolsGroups": [
        {
          "name": "Precious Metals",
          "symbols": [
            { "name": "OANDA:XAUUSD", "displayName": "Gold" },
            { "name": "OANDA:XAGUSD", "displayName": "Silver" },
            { "name": "OANDA:XPTUSD", "displayName": "Platinum" },
            { "name": "OANDA:XPDUSD", "displayName": "Palladium" }
          ]
        },
        {
          "name": "Industrial Metals",
          "symbols": [
            { "name": "OANDA:XCUUSD", "displayName": "Copper" }
          ]
        }
      ]
    });

    container.current.appendChild(script);

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [currentTheme]);

  return (
    <div className='py-6 px-4'>
      <div 
        className="tradingview-widget-container border rounded-xl overflow-hidden shadow-sm" 
        ref={container}
      >
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright p-2 text-xs border-t bg-muted/50 text-center">
          <a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            Market summary by TradingView
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(MetalWidget);