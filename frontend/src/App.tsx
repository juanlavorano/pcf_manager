import { useFetch } from "./hooks/useFetch";
import { CreatePCFForm } from "./components/CreatePCFForm";
import { PCFTable } from "./components/PCFTable";

const App = () => {
  const {
    loading,
    data,
    error,
    refetch: refetchPcfs,
  } = useFetch({ path: "/pcfs" });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <PCFTable pcfs={data} loading={loading} error={error} />
      <CreatePCFForm refetch={refetchPcfs} />
    </div>
  );
};

export default App;
