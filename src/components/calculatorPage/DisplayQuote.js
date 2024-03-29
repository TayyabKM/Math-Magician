import { useState, useEffect } from 'react';
import './displayquotes.css';

export default function DisplayQuote() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getQuote() {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          method: 'GET',
          headers: { 'X-Api-Key': 'b+3kXH9WU6kSGzznI74exw==e0dudELpGmTeFRXr' },
          contentType: 'application/json',
        });
        const result = await response.json();
        setData(result[0]);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
        throw new Error(e);
      }
    }
    getQuote();
  }, [setData, setError, setLoading]);

  if (loading) {
    return (
      <section className="quote_display">
        <h2>Quote</h2>
        <p>Loading quote...</p>
      </section>
    );
  }

  if (error || data === undefined) {
    return <p>Encountered a problem while getting quote</p>;
  }

  return (
    <section className="quote_display">
      <h2>Quote</h2>
      <q>
        {data.quote}
      </q>
      <p className="author">{data.author}</p>
    </section>
  );
}
