import React from "react";

export default function PaginationTotal({ total, range }) {
  return (
    <div
      style={{
        color: "#92939A",
        fontSize: "var(--size-13)",
      }}
    >
      Showing {range[0]} to {range[1]} of {total} items
    </div>
  );
}
