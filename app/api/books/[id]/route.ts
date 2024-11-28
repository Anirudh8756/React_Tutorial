import books from '@/app/api/db';

export async function PUT(request: Request, context: { params: { id: string } }) {
  const id = Number(context.params.id); // Parse id as a number
  const book = await request.json(); // Parse the incoming JSON data

  const index = books.findIndex((b) => b.id === id); 
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Book not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  books[index] = book; // Update the book
  return new Response(JSON.stringify(books), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
  const id = Number(context.params.id); // Parse id as a number
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return new Response(JSON.stringify({ error: "Book not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  books.splice(index, 1); // Remove the book from the array
  return new Response(JSON.stringify(books), {
    headers: { "Content-Type": "application/json" },
  });
}
 