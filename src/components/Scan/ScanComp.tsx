"use client";

import React, { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { Scanner } from "@yudiel/react-qr-scanner";

const ScanComp = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState<string | null>(null);

  const toggleScanner = () => {
    setIsScanning(!isScanning);
    if (isScanning) {
      setScannedResult(null);
    }
  };
  return (
    <div>
      <h1 className="text-3xl md:text-4xl text-accent text-center pt-6 font-bold">
        Scan QR Codes to Navigate Campus
      </h1>
      <p className="md:w-2/4 text-center mx-auto py-6">
        Lost on campus? Simply scan the QR codes placed around Redeemer&apos;s
        University to instantly discover your location and get directions to
        your destination.
      </p>
      <div className="md:w-2/4 text-center mx-auto py-8 my-8 bg-white p-[30px] rounded-[20px] shadow-[0_15px_30px_rgba(0,0,121,0.1)]">
        <h3 className="text-primary text-2xl pb-5 font-bold">
          QR Code Scanner
        </h3>

        <button
          className="cursor-pointer bg-accent rounded-xl px-6 text-white mt-4 py-2 inline"
          onClick={toggleScanner}
        >
          <RiDashboardFill className="inline mr-2" />
          {isScanning ? "Stop Scanning" : "Start Scanning"}
        </button>

        {isScanning && (
          <div className="mt-4">
            <Scanner
              onScan={(detectedCodes) => {
                console.log("Scan result:", detectedCodes);

                if (detectedCodes && detectedCodes.length > 0) {
                  const firstResult = detectedCodes[0];
                  if (firstResult && firstResult.rawValue) {
                    setScannedResult(firstResult.rawValue);
                    setIsScanning(false);
                  }
                }
              }}
              onError={(error) => {
                console.error("Scan error:", error);
              }}
            />
          </div>
        )}

        {scannedResult && (
          <div className="mt-6 p-4 bg-light rounded-lg">
            <h4 className="text-accent font-bold mb-2">Detected Link:</h4>
            <a
              href={scannedResult}
              className="text-blue-600 underline break-all"
            >
              {scannedResult}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScanComp;
