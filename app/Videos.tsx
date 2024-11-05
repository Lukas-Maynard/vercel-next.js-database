import { sql } from '@vercel/postgres';

export default async function Videos() {
  const { rows } = await sql `SELECT * FROM video`;

  return (
    <div>
      <h1>Your current Cards</h1>
      {rows.length > 0 ? (
        rows.map((row) => (
          <div key={row.id}>
            {/*  name, url, votes, length */}
            {row.id} - {row.name} - {row.url} - {row.length}
          </div>
        ))
      ) : (
        <p>There are no videos.</p>
      )}
    </div>
  );
}