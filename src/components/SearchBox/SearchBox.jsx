export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
