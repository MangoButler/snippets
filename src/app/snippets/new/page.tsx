import { db } from "@/db";
import { redirect } from "next/navigation";

function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // This needs to be a server action
    "use server";

    // Check the user input and make sure there valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Create a new record in the database

    const snippet = await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });
    console.log(snippet);
    // Redirect User back to root path
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="border rounded p-2 bg-blue-200 font-bold"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage;
