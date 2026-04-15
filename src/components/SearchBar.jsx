import "../styles/searchbar.css";

export default function SearchBar({ setQuery }) {
  return (
    <input
      className="search-bar"
      placeholder="Buscar ramo..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}