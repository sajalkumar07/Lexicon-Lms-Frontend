export const loginUser = async ({ email, password }) => {
  try {
    console.log("Login attempt:", { email, password }); // Log the email and password sent

    const response = await fetch(
      "https://lexicon-lms-backend.onrender.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    console.log("Login response:", data); // Log the backend's response
    if (!response.ok) {
      throw new Error(data.message || "Failed to login");
    }
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
