import { useState } from "react";
import { PCF } from "../types";

export const useCreatePCFForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const submit = async (
    event: React.FormEvent,
    { productName, emission, declaredUnit }: Partial<PCF>,
  ) => {
    event.preventDefault();

    if (!productName || !emission || !declaredUnit) {
      setError("Required fields missing!");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    const newPCF = { productName, emission, declaredUnit };

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/footprints",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPCF),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to create PCF");
      }

      const data = await response.json();
      setSuccessMessage("PCF created successfully!");

      return data;
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    successMessage,
    submit,
  };
};
