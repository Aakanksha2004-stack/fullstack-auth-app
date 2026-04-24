import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../api.js";
import { clearToken, getToken } from "../auth.js";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setError("");
      setLoading(true);
      try {
        const token = getToken();
        const data = await api.me(token);
        if (!cancelled) setUser(data.user);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  function logout() {
    clearToken();
    navigate("/login");
  }

  return (
    <div className="min-h-screen px-4 py-10 sm:py-14 flex items-start justify-center">
      <div className="w-full max-w-3xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-600">You’re logged in.</p>
          </div>

          <button
            className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-200"
            onClick={logout}
          >
            Logout
          </button>
        </div>

        <div className="rounded-2xl bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 p-6 sm:p-8">
          {loading ? <p className="text-sm text-slate-600">Loading your profile…</p> : null}

          {error ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          {!loading && user ? (
            <div className="mt-4">
              <div className="text-base sm:text-lg font-semibold text-slate-900">{user.name}</div>
              <div className="mt-1 text-sm text-slate-600">{user.email}</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

