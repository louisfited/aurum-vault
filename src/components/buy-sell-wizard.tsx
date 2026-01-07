import React, { useState } from "react";
import { Button } from "./ui/button";
import Sell from "./buy-and-sell-components/sell";
import Buy from "./buy-and-sell-components/buy";

const BuySellWizard = () => {
  const [actionBtn, setActionBtn] = useState<"Sell" | "Buy">("Sell");

  return (
    <div className="h-full w-full rounded-lg ">
      {/* <h1>Buy Sell Wizard</h1> */}

      <section>
        <header className="flex justify-center">
          <Button
            onClick={() => setActionBtn("Buy")}
            className="cursor-pointer"
          >
            Buy
          </Button>
          <Button
            onClick={() => setActionBtn("Sell")}
            className="cursor-pointer"
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
