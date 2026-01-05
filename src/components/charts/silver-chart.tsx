"use client";

import React, { useEffect, useRef, memo } from 'react';
import { useTheme } from "next-themes";

const SilverChart: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    const isDark = currentTheme === "dark";
    
    script.innerHTML = JSON.stringify({
      "autosize": true, 
      "symbol": "OANDA:XAGUSD", // Updated to Silver
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": isDark ? "dark" : "light",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com",
      "backgroundColor": isDark ? "#09090b" : "#ffffff", 
      "gridColor": isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)",
      "width": "100%",
      "height": "100%", 
    });

    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) container.current.innerHTML = "";
    };
  }, [currentTheme]);

  return (
    <div 
      /* h-[400px] = Mobile height (prevents taking up the whole screen)
         md:h-[700px] = Desktop height
      */
      className="flex flex-col w-full h-[400px] md:h-[700px] border rounded-xl overflow-hidden bg-background shadow-sm" 
    >
      <div 
        id="tradingview_silver_wrapper"
        className="flex-grow w-full" 
        ref={container} 
      />
      <div className="p-2 text-xs border-t bg-muted/50 text-center">
        <a 
          href="https://www.tradingview.com/symbols/XAGUSD/" 
          rel="noopener nofollow" 
          target="_blank" 
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          XAGUSD Chart by TradingView
        </a>
      </div>
    </div>
  );
}

export default memo(SilverChart);