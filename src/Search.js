import React from "react";
import { useGlobalContext } from "./context";
import "./css/search.css"; // Import CSS file

function Search() {
  const { query, searchPost } = useGlobalContext();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search anything here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;

// import React from "react";
// import { useGlobalContext } from "./context";
// import "./css/search.css";

// function Search() {
//   const { query, searchPost } = useGlobalContext();
//   return (
//     <div>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div>
//           <input
//             type="text"
//             placeholder="search anything here"
//             value={query}
//             onChange={(e) => searchPost(e.target.value)}
//           />
//         </div>

//       </form>
//     </div>
//   );
// }

// export default Search;
