"use client";

import React, { useState, ChangeEvent } from "react";
import { postSourceScan } from "../api/sourceScan";
import mockInputs from "../constants/mockInputs";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [sampleTextInput, setSampleTextInput] = useState<number>(0);

  const handleClickGo = async () => {
    try {
      setError(null);
      if (!text) {
        setError("Text cannot be empty");
        return;
      }
      const scanResult = await postSourceScan(text);
      setScanResult(scanResult);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickSampleText = () => {
    setText(mockInputs[sampleTextInput]);
    setSampleTextInput((sampleTextInput + 1) % mockInputs.length);
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <main className="flex min-h-screen 24">
      <div className="mt-8 ml-12 w-[50%] flex flex-col items-center gap-4">
        <button onClick={handleClickSampleText} className="place-self-start underline">
          Try Sample Text
        </button>
        <textarea
          className="w-full h-[600px] p-4 text-black rounded-lg"
          placeholder="Text to cite"
          value={text}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="border-2 rounded-lg py-3 px-12 font-bold w-full"
          onClick={handleClickGo}
        >
          Go
        </button>
      </div>
      <pre className="w-[50%] mx-8 my-16 text-yellow-100 whitespace-pre-wrap">
        {scanResult}
      </pre>
    </main>
  );
}
