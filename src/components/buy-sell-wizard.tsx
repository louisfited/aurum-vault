import React, { useState } from "react";
import { Button } from "./ui/button";
import Sell from "./buy-and-sell-components/sell";
import Buy from "./buy-and-sell-components/buy";

const BuySellWizard = () => {
  const [actionBtn, setActionBtn] = useState<"Sell" | "Buy">("Sell");

  return (
    <div className="h-max w-full rounded-lg border-border rounded-lg border-2 p-2">
      {/* <h1>Buy Sell Wizard</h1> */}

      <section>
        <header className="flex justify-center gap-4">
          <Button
            onClick={() => setActionBtn("Buy")}
            className="cursor-pointer w-2/5 bg-green-600"
          >
            Buy
          </Button>
          <Button
            onClick={() => setActionBtn("Sell")}
            className="cursor-pointer w-2/5 bg-red-500"
          >
            Sell
          </Button>
        </header>

        {actionBtn == "Sell" ? <Sell /> : <Buy />}
      </section>
    </div>
  );
};

export default BuySellWizard;
