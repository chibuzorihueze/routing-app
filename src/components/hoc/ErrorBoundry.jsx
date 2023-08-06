import { useState, useEffect } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // This function is called whenever there is an error in the child components
    const handleErrors = () => {
      setHasError(true);
    };

    // Register the function to catch errors
    window.addEventListener("error", handleErrors);

    // Unregister the function when the component is unmounted
    return () => {
      window.removeEventListener("error", handleErrors);
    };
  }, []);

  if (hasError) {
    // Return an error message or fallback UI
    return <div>Oops! Something went wrong. Please refresh page</div>;
  }

  // If there is no error, render the child components
  return props.children;
}

export default ErrorBoundary;