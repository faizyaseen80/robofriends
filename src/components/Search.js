

const Search = ({ searchChange}) => {
    return (
        <div className="tc">
            <input 
            className='pa3 mb3 ba b--green bg-lightest-blue'
            type='serch' 
            placeholder='Search...' 
            onChange={searchChange}
            />
        </div>
    );
};

export default Search;