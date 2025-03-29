import type { PCF } from "../types";
import "./PCFTable.css";

export const PCFTable = ({
  pcfs,
  loading,
  error,
}: {
  pcfs: PCF[];
  loading: boolean;
  error: string | null;
}) => {
  if (loading) {
    return <div className="loading-message">Loading PCFs...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="table-container">
      <h2 className="table-title">PCF List</h2>
      <table className="pcf-table">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Emission</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {pcfs.length === 0 ? (
            <tr>
              <td colSpan={3}>No PCFs available</td>
            </tr>
          ) : (
            pcfs.map((pcf) => (
              <tr key={pcf.id}>
                <td>{pcf.productName}</td>
                <td>{pcf.emission}</td>
                <td>{pcf.declaredUnit}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
