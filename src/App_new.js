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
import ModalElement from '../src/components/Modal/Modal'

function App() {
  return (
    <Home />
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  const [datalen, setDataLen] = useState(0)
  const [search, setSearch] = useState('');
  const [modalData, setModalData] = useState({});
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  let { data } = fetchedData;
  const perPage = 5
  let api = `https://reqres.in/api/products?page=${pageNumber}&per_page=${perPage}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => {
        if (res.ok) {
          res.json()
        }
        else {
          return res.json().then(json => Promise.reject(json))
        }
      });
      setDataLen(data.total)
      updateFetchedData(data);
    })();
  }, [api])

  useEffect(() => {
    // Update the URL with the current page
    window.history.pushState(null, '', `?page=${pageNumber}`);
  }, [pageNumber]);

  useEffect(() => {
    // Check the URL on component mount and set the current page
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get('page');
    if (page) {
      console.log(page)
      updatePageNumber(parseInt(page));
    }
  }, [pageNumber]);

  const openModal = modalData => {
    setModalData(modalData);
    setmodalIsOpen(true);
  };

  const closeModal = () => {
    setmodalIsOpen(false);
  };

  let pageCount = Math.ceil(datalen / perPage)

  return (
    <div className="App">
      <div className="flex">
        <Search className='search' setSearch={setSearch} />
      </div>
      <TableHead />
      <Table page='/' filter={search} tabledata={data} pagenumber={pageNumber} openModal={openModal} />
      <Pagination pageNumber={pageNumber} updatePageNumber={updatePageNumber} pageCount={pageCount} />
      <ModalElement modalIsOpen={modalIsOpen} modalData={modalData} closeModal={closeModal} />
    </div>
  );
}


export default App;
