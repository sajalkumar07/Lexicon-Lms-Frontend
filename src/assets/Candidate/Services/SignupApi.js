export const registerUser = async ({ name, email, password }) => {
  try {
    const response = await fetch(
      "https://lexicon-lms-backend.onrender.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // wrap all fields in an object
      }
    );

    if (!response.ok) {
      const errorData = await response.json(); // Capture the backend's response for better error handling
      throw new Error(errorData.message || "Failed to register user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
