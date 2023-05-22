/**
 * Universal load function that calls some random API
 * Expected behaviour: The request should only be made on the server during SSR but not again on the client.
 */
export const load = async ({ fetch }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const todo = await res.json();
  console.log(todo);

  return {
    msg: "hi",
    todo,
  };
};
