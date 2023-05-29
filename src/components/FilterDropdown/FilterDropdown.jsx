
function FilterDrowdown(filter, setFilter) {
    const[value, setvalue] = useState("popular");
     
    return (
        <select value={value} onChange={(e) => setvalue(e.target.value)}>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
        </select>
      );
    }


  export default FilterDrowdown;