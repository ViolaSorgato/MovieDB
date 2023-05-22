class FilterDrowdown extends React.Component {
    render() {
      return (
        <select name="filter" id="filter">
            <option value="popular">Popular</option>
            <option value="top rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
        </select>
      )
    }
  }