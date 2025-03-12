import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-8xl font-bold text-aura-blue mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-6">
        Oops! Page Not Found
      </p>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Button asChild className="bg-aura-blue hover:bg-blue-600">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
