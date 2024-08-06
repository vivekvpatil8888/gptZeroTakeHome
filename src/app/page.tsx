"use client";

import React, { useState, ChangeEvent } from "react";
import { postSourceScan } from "../api/sourceScan";
import mockInputs from "../constants/mockInputs";
import Claim from "../components/Claim";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<any | null>(null);
  const [sampleTextInput, setSampleTextInput] = useState<number>(0);

  const handleClickGo = async () => {
    try {
      setError(null);
      if (!text) {
        setError("Text cannot be empty");
        return;
      }
      const scanResult = await postSourceScan(text);
      setScanResult(JSON.parse(scanResult));
    } catch (error) {
      console.error(error);
      setError("An error occurred while scanning the document.");
    }
  };

  const handleClickSampleText = () => {
    setText(mockInputs[sampleTextInput]);
    setSampleTextInput((sampleTextInput + 1) % mockInputs.length);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen p-4 bg-gray-900">
      <div className="mt-8 mx-auto lg:mx-12 w-full lg:w-1/2 flex flex-col items-center gap-4">
        <button onClick={handleClickSampleText} className="place-self-start underline text-white">
          Try Sample Text
        </button>
        <textarea
          className="w-full h-[300px] lg:h-[600px] p-4 text-black rounded-lg"
          placeholder="Text to cite"
          value={text}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="border-2 rounded-lg py-3 px-12 font-bold w-full text-white bg-blue-600 hover:bg-blue-700"
          onClick={handleClickGo}
        >
          Go
        </button>
      </div>
      <div className="w-full lg:w-1/2 mx-auto my-8 lg:mx-8 lg:my-16">
        {scanResult ? (
          <div>
            {Object.keys(scanResult.document.claims).map((claimId) => (
              <Claim key={claimId} claim={scanResult.document.claims[claimId]} citations={scanResult.document.citations} />
            ))}
          </div>
        ) : (
          <pre className="text-yellow-100 whitespace-pre-wrap">No results yet.</pre>
        )}
      </div>
    </main>
  );
}
