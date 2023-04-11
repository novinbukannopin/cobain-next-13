"use client";

import React, { useEffect } from "react";

export default function Error({
  err,
  reset,
}: {
  err: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(err);
  }, [err]);
  return (
    <div>
      <p>Error</p>
      <button onClick={() => reset()}>Repeat</button>
    </div>
  );
}
