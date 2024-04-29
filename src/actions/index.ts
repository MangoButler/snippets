"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // Check the user input and make sure there valid
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length <= 3) {
      return {
        message: "Title must be longer",
      };
    }

    if (typeof code !== "string" || code.length <= 10) {
      return {
        message: "Please add valid code",
      };
    }
    // Create a new record in the database

    await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: "Something went wrong!" };
  }
  revalidatePath("/");
  redirect("/"); //redirect function actually throws a special; error that is then hanled by next to send the user to the desired path, however if you put it into a try catch block it will be cought and handled before the special next code handles it
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deletSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}
