import React from "react";

type ScoreBadgeProps = {
  score: number;
};

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  const badgeStyle =
    score > 70
      ? "bg-badge-green text-green-600"
      : score > 49
        ? "bg-badge-yellow text-yellow-600"
        : "bg-badge-red text-red-600";

  const label = score > 70 ? "strong" : score > 49 ? "good start" : "need work";

  return (
    <div
      className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeStyle}`}
    >
      <p>{label}</p>
    </div>
  );
};

export default ScoreBadge;
