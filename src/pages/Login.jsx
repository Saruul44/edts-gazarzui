import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email.trim().toLowerCase() === "user" && password === "1234") {
      router.push("/nuur");
    } else {
      setError("Нэвтрэх нэр эсвэл нууц үг буруу");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#01060c] via-[#1e1b4b] to-[#3b82f6] p-4 relative">
      {/* Лого зүүн дээд буланд */}

      <form
        onSubmit={handleSubmit}
        className="bg-[#111827]/95 backdrop-blur w-full max-w-sm space-y-5 shadow-2xl rounded-2xl p-8 flex flex-col"
      >
        <div className="absolute top-4 left-4">
          <img
            src="https://yt3.googleusercontent.com/uqBodt_0hDu1sTMeOfYOij12zUX_wMo9i7ye9iPEwbAKf5ZXJxocf86RjKXLnvj3sfNS0fYB_A=s900-c-k-c0x00ffffff-no-rj"
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-center text-white">Нэвтрэх</h1>

        <div className="w-full">
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Нэвтрэх нэр
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Нэвтрэх нэр (user)"
            className="w-full px-4 py-2 border border-gray-600 bg-[#0f172a] text-white rounded-lg focus:border-[#60a5fa] focus:ring-2 focus:ring-[#60a5fa] outline-none transition"
            aria-label="Нэвтрэх нэр"
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Нууц үг
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Нууц үг(1234)"
            className="w-full px-4 py-2 border border-gray-600 bg-[#0f172a] text-white rounded-lg focus:border-[#60a5fa] focus:ring-2 focus:ring-[#60a5fa] outline-none transition"
            aria-label="Нууц үг"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          className="block text-center bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white w-full py-2 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
        >
          Нэвтрэх
        </button>
      </form>
    </div>
  );
}
