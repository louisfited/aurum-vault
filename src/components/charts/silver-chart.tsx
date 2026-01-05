"use client";

import React, { useEffect, useRef, memo } from 'react';
import { useTheme } from "next-themes";

const SilverChart: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  
  // Handle system preference for shadcn
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  useEffect(() => {
    // Clean out the container to prevent duplicate charts
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
      "symbol": "OANDA:XAGUSD", // CHANGED TO SILVER
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": isDark ? "dark" : "light",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com",
      // Syncs with shadcn background colors
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
      className="flex flex-col w-full h-[700px] border rounded-xl overflow-hidden bg-background shadow-sm" 
    >
      <div 
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