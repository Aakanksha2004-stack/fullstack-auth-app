const BASE_URL = import.meta.env.VITE_API_URL;

async function request(path, { method = "GET", body, token } = {}) {
  const url = `${BASE_URL}${path}`;

  console.log("Calling API:", url);

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || "Request failed");
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