import { useState } from "react";
import { useCreatePCFForm } from "../hooks/useCreatePCFForm";
import type { Unit } from "../types";
import "./CreatePCFForm.css";

export const CreatePCFForm = ({
  refetch,
}: {
  refetch: () => Promise<void>;
}) => {
  const [productName, setProductName] = useState<string>("");
  const [emission, setEmission] = useState<number>(0);
  const [unit, setUnit] = useState<Unit>("kg");

  const { error, loading, successMessage, submit } = useCreatePCFForm();

  const handleSubmit = async (event: React.FormEvent) => {
    const form = event.target as HTMLFormElement;
    const productName = (form[0] as HTMLInputElement).value;
    const emission = Number((form[1] as HTMLInputElement).value);
    const declaredUnit = (form[2] as HTMLSelectElement).value as Unit;

    await submit(event, { productName, emission, declaredUnit });

    // Reset form after successfully creating PCF
    setProductName("");
    setEmission(0);
    setUnit("kg");

    await refetch();
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Create a New PCF</h1>

      {error && <div className="error-message">{error}</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Product name
          </label>
          <input
            type="text"
            id="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Emission
          </label>
          <input
            type="number"
            id="emission"
            value={emission}
            onChange={(e) => setEmission(Number(e.target.value))}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status" className="form-label">
            Unit
          </label>
          <select
            id="Unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value as Unit)}
            className="form-input"
          >
            <option value="kg">Kg</option>
            <option value="liter">Liter</option>
            <option value="m2">m2</option>
          </select>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className={`submit-button ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Creating PCF..." : "Create PCF"}
          </button>
        </div>
      </form>
    </div>
  );
};
