import { sql } from '@vercel/postgres';

export default async function Cards() {
  const { rows } = await sql `SELECT * FROM cards WHERE nextScheduledTime < NOW()`;

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
        <p>You&apos;re done learning for now! No cards to view, Come back later.</p>
      )}
    </div>
  );
}