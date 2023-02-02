import { useEffect, useState } from "react";
import "./App_new.css";
import "../src/components/Table/Table.css"
import './components/Pagination/pagination.css'
// import "../src/components/Search/search.css"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import Table from "./components/Table/Table"
import TableHead from "./components/Table/TableHead";

function App() {
  return (
    <Home />
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { data } = fetchedData;
  let api = `https://reqres.in/api/products/?per_page=12`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api])


  return (
    <div className="App">
      <div className="flex">
        <Search className='search' setSearch={setSearch} updatePageNumber={updatePageNumber} />
      </div>
      <TableHead />
      <Table page='/' tabledata={data} pagenumber={pageNumber} />
      <Pagination pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
    </div>
  );
}



export default App;
