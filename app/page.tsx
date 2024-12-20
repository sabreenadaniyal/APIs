import Link from "next/link";

export default async function Home() {

  //Making API Request
  // const url = await fetch("https://simple-books-api.glitch.me/books")

  const url = await fetch("https://jsonplaceholder.typicode.com/users/")
  const response = await url.json()
  console.log(response);

  return (
    <main>
      {/* {JSON.stringify(response)} */}
      {/*JSON.stringify() converts a value to the JSON notation that the value represents.*/}

      {
        response.map((users: any,key: string) => (
          <div key={users.id}> {/* Add a unique key here */}
            <Link href={`${users.id}`}>
              <h1 className="text-xl text-black bg-gray-200 hover:bg-green-700 border-2 border-indigo-300">
                {users.id}   {users.name} <br />

              </h1>
            </Link>
          </div>
        ))
      }

    </main>
  );
}
