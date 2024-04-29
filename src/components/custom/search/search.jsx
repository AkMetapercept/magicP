import React from 'react';

const SearchIcon = () => {
  return (
    <>
      <style jsx="true">
        {`
          .search-box {
            width: fit-content;
            height: fit-content;
            position: relative;
          }
          .input-search {
            height: 40px;
            width: 40px;
            border-style: none;

            font-size: 18px;
            letter-spacing: 2px;
            outline: none;
            border-radius: 20px;
            transition: all 0.5s ease-in-out;
            background-color: var(--blue);
            padding-right: 40px;
            color: #000;
          }
          .input-search::placeholder {
            color: rgba(0, 0, 0, 0.5);
            font-size: 18px;
            letter-spacing: 2px;
            font-weight: 100;
          }
          .btn-search {
            width: 40px;
            height: 40px;
            border-style: none;
            font-size: 20px;
            font-weight: bold;
            outline: none;
            cursor: pointer;
            border-radius: 50%;
            position: absolute;
            right: 0px;
            color: var(--orange);
            background-color: transparent;
            pointer-events: painted;
          }
          .btn-search:focus ~ .input-search {
            width: 300px;
            border-radius: 10px;
            background-color: #f4f4f4;
            border-bottom: 1px solid rgba(0, 0, 0, 0.8);
            transition: all 500ms ease;
            padding: 10px;
          }
          .input-search:focus {
            width: 300px;
            border-radius: 10px;
            background-color: #f4f4f4;
            border-bottom: 1px solid rgba(0, 0, 0, 0.5);
            transition: all 500ms ease;
            padding: 10px;
          }
        `}
      </style>
      {/* <div className="search-box">
        <button className="btn-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input type="text" className="input-search" placeholder="Type to Search..." />
      </div> */}
    </>
  );
};

export default SearchIcon;
