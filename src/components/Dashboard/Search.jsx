import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = ({ search, onSearchChange }) => {
  return (
    <div className='flex justify-start items-center gap-9 py-4 px-8 text-[#888] bg-[#1b1b1b] w-[88%] ml-auto mr-auto m-4 rounded-3xl text-[1.2rem]'>
      <SearchRoundedIcon />
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => onSearchChange(e)}
        className='bg-[#1b1b1b] w-full font-[Inter] text-[1.2rem] text-[#888] border-none focus:outline-none'
      />
    </div>
  );
};

export default Search;
