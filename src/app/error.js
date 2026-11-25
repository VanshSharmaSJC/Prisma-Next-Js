"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h1>Something went wrong!</h1>

      <p>
        We couldn't load the event. Please try again.
      </p>

      <button onClick={() => reset()}>
        Retry
      </button>
    </main>
  );
}