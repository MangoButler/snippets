import SnippetEditForm from "@/components/SnippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage: React.FC<SnippetEditPageProps> = async (
  props: SnippetEditPageProps
) => {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id: id,
    },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <h1>Edititng Snippet with title of {snippet.title}</h1>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
