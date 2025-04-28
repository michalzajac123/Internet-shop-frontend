import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Hasła nie są takie same");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("https://your-api-url.com/register", {
        name: formData.name,
        surname: formData.surname,
        gender: formData.gender,
        email: formData.email,
        password: formData.password
      });
      console.log("Registration successful:", response.data);
    } catch (error) {
      setErrorMessage("Błąd podczas rejestracji. Spróbuj ponownie.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] flex flex-col bg-gray-900">
      <div className="mt-30 p-4">
        <div className="w-full max-w-[min(70%,24rem)] mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-center">
              Zarejestruj się
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Masz już konto?{" "}
              <Link to="/login" className="font-medium text-blue-500 hover:text-blue-400">
                Zaloguj się
              </Link>
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-center">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-0 bg-gray-800 text-white p-3 ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                placeholder="Imię"
              />
            </div>

            <div>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-0 bg-gray-800 text-white p-3 ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                placeholder="Nazwisko"
              />
            </div>

            <div className="flex gap-4 text-white">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  className="mr-2"
                />
                Mężczyzna
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  className="mr-2"
                />
                Kobieta
              </label>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-0 bg-gray-800 text-white p-3 ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-0 bg-gray-800 text-white p-3 ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                placeholder="Hasło"
              />
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-0 bg-gray-800 text-white p-3 ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                placeholder="Powtórz hasło"
              />
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
              {isLoading ? "Rejestracja..." : "Zarejestruj się"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;