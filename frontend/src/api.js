async function request(path, { method = "GET", body, token } = {}) {
  const res = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || "Request failed";
    throw new Error(message);
  }
  return data;
}

export const api = {
  register(payload) {
    return request("/api/auth/register", { method: "POST", body: payload });
  },
  login(payload) {
    return request("/api/auth/login", { method: "POST", body: payload });
  },
  me(token) {
    return request("/api/auth/me", { token });
  },
};

