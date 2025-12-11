import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        navigate("/"); // redirect to home
      } else {
        alert(data.message || "Login failed");
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-[#1F2B6C] mb-6 text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input 
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input 
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          No account? <Link to="/register" className="text-blue-600">Register</Link>
        </p>

      </div>
    </section>
  );
}
