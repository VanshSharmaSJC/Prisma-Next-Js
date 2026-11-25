export default async function EventPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Event {id}</h1>

      <p>Clubbing Id -  {id}</p>

      <p>Registered people: {id * 100}</p>
    </main>
  );
}