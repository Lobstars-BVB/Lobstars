import React, { type FormEvent, useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      credentials: 'include', // Allow cookie from server
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('Login successful!');
    } else {
      setMessage(data.error || 'Login failed');
    }
  };

  return (
    <form className="mx-auto max-w-md" onSubmit={handleLogin}>
      <h2 className="text-l mb-10 text-center">Login</h2>
      <br/>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block text-sm font-bold">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 px-4 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="mb-2 block text-sm font-bold">
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-md border border-gray-300 px-4 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="rounded bg-neon-pink-dark px-4 py-2 font-bold text-neon-pink-light hover:opacity-80"
      >
        Login
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default LoginForm;