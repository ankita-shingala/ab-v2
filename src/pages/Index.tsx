import { Navigate } from "react-router-dom";

// This component simply redirects to HomePage
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
