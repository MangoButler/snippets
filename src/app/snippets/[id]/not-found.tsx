interface SnippetNotFoundProps {}

const SnippetNotFound: React.FC<SnippetNotFoundProps> = () => {
  return (
    <div>
      <h1 className="text-xl bold">Could not find that snippet</h1>
    </div>
  );
};

export default SnippetNotFound;
