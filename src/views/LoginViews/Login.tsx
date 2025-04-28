import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Reset error message before sending the request

    try {
      // Wysłanie danych do API
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });

      // Przykład: jeśli odpowiedź z API jest pozytywna, przechodzimy do innej strony
      console.log("Logged in successfully:", response.data);
      // Można np. przekierować do innej strony po udanym logowaniu
      // history.push('/dashboard');
    } catch (error) {
      setErrorMessage("Niepoprawny email lub hasło.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] flex flex-col bg-gray-900">
      <div className="mt-30 p-4">
        <div className="w-full max-w-[min(70%,24rem)] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-center">
              Zaloguj się do konta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Lub{" "}
              <Link to="/signup" className="font-medium text-blue-500 hover:text-blue-400">
                zarejestruj się jeśli nie masz konta
              </Link>
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-6 bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-center">
              {errorMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border-0 bg-gray-800 text-white p-3 ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Hasło
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-lg border-0 bg-gray-800 text-white p-3 ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="Hasło"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 mt-6 text-sm font-semibold text-white rounded-lg
                ${isLoading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
            >
              {isLoading ? "Logowanie..." : "Zaloguj się"}
            </button>

            {/* Additional options */}
            <div className="text-center mt-4">
              <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-blue-400">
                Zapomniałeś hasła?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
