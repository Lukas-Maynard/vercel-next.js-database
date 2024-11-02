import { sql } from '@vercel/postgres';

export default async function Cards() {
  const { rows } = await sql `SELECT * FROM video`;

  return (
    <div>
      <h1>Your current Cards</h1>
      {rows.length > 0 ? (
        rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.prompt} - {row.answer} - {row.understood}%
          </div>
        ))
      ) : (
        <p>There are no videos.</p>
      )}
    </div>
  );
}