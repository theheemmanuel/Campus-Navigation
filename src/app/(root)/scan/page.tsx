"use client";

import { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import { FaLocationDot, FaClock, FaCircleInfo } from "react-icons/fa6";
import { MdDirections } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { Html5Qrcode } from "html5-qrcode";

const ScanPage: NextPage = () => {
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const scannerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up scanner when component unmounts
    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch((error) => {
          console.error("Failed to stop scanner:", error);
        });
      }
    };
  }, []);

  const startScanning = async () => {
    setError(null);
    setScanning(true);

    try {
      if (!scannerContainerRef.current) {
        throw new Error("Scanner container not found");
      }

      // Initialize the scanner
      scannerRef.current = new Html5Qrcode("qr-reader");

      const qrCodeSuccessCallback = (decodedText: string) => {
        console.log(`QR Code detected: ${decodedText}`);

        // Stop scanning after successful detection
        if (scannerRef.current) {
          scannerRef.current
            .stop()
            .then(() => {
              // Check if the scanned data is a URL
              try {
                new URL(decodedText);
                // Navigate to the URL if it's valid
                router.push(decodedText);
              } catch (e) {
                // If it's not a URL, just display the data
                console.log(e);
                alert(`QR Code content: ${decodedText}`);
              }
              setScanning(false);
            })
            .catch((err) => {
              console.error("Failed to stop scanner:", err);
              setScanning(false);
            });
        }
      };

      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
      };

      await scannerRef.current.start(
        { facingMode: "environment" },
        config,
        qrCodeSuccessCallback,
        (errorMessage) => {
          console.log(errorMessage); // QR Code scanning errors are ignored as they happen frequently
          // when no QR code is in view
        }
      );
    } catch (err) {
      console.error("Error starting scanner:", err);
      setError(
        "Error accessing camera. Please make sure you've granted camera permissions and are using a secure connection (HTTPS)."
      );
      setScanning(false);
    }
  };

  const stopScanning = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        setScanning(false);
      } catch (err) {
        console.error("Error stopping scanner:", err);
      }
    }
  };

  return (
    <div className="bg-light">
      <div className="maxWidth p-6">
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

          {scanning ? (
            <div className="w-full max-w-md mx-auto">
              <div
                id="qr-reader"
                ref={scannerContainerRef}
                className="w-full"
              ></div>
              <button
                onClick={stopScanning}
                className="cursor-pointer bg-red-500 rounded-xl px-6 text-white mt-4 py-2 inline"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={startScanning}
                className="cursor-pointer bg-accent rounded-xl px-6 text-white mt-4 py-2 inline"
              >
                <RiDashboardFill className="inline mr-2" />
                Start Scanning
              </button>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </>
          )}
        </div>
        <div className="md:w-3/4 mx-auto py-8 my-8 bg-white p-[30px] rounded-[20px] shadow-[0_15px_30px_rgba(0,0,121,0.1)]">
          <h3 className="text-accent text-2xl pb-5 font-bold text-center">
            How It Works
          </h3>
          <ul className="text-primary flex flex-col gap-3 text-lg font-">
            <li>
              1. Find a QR code on a building, classroom, or location sign
              around campus.
            </li>
            <li>
              2. Click &quot;Start Scanning&quot; and allow camera access when
              prompted.
            </li>
            <li>
              3. Point your camera at the QR code until it&apos;s detected.
            </li>
            <li>
              4. Once scanned, you&apos;ll be directed to information about your
              current location.
            </li>
            <p>
              The QR codes around campus are designed to help you navigate
              efficiently. When scanned, they instantly show your exact location
              and provide options for directions to other campus facilities.
            </p>
          </ul>
          <h3 className="text-accent text-2xl py-5 font-bold text-center">
            Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div>
                <FaLocationDot color="#000079" />
              </div>
              <p>Instant Location Information</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <MdDirections color="#000079" />
              </div>
              <p>Turn-by-Turn Directions</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaClock color="#000079" />
              </div>
              <p>Never Be Late Again</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaCircleInfo color="#000079" />
              </div>
              <p>Building Details & Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;
