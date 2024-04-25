"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({error} : ErrorPageProps) => {
  return <div>
    {error.message}
  </div>;
};

export default ErrorPage;
