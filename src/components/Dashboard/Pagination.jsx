import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ page, handlePageChange }) => {
  return (
    <div className='flex justify-center items-center mb-10'>
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--orange) !important",
            color: "#fff !important",
            borderColor: "var(--orange) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !importatn",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
};

export default PaginationComponent;
