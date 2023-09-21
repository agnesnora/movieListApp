import { useState } from "react";
export default function QuickSearch() {
  const [selectedGenre, setSelectedGenre] = useState("Comedy");
  console.log(selectedGenre);
  return (
    <div>
      <label>
        Pick a fruit:
        <select
          name="selectedFruit"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Musical">Musical</option>
        </select>
        <button
          type="submit"
          onClick={() => console.log(selectedGenre, "clicked")}
        >
          Submit
        </button>
      </label>
      <h1>fruit</h1>
    </div>
  );
}
