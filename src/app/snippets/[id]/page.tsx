import { db } from "@/db";
import { notFound } from "next/navigation";
interface ShowSnippetsPageProps {
  params: {
    id: string;
  };
}

const ShowSnippetsPage: React.FC<ShowSnippetsPageProps> = async (
  props: ShowSnippetsPageProps
) => {
//   await new Promise((r) => setTimeout(r, 2000)); // causing the delay of 2000ms
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <p>{snippet.title}</p>
      <p>{snippet.code}</p>
    </div>
  );
};

export default ShowSnippetsPage;
