import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Resorts from './components/Resorts';
import Resortdetail from './components/Resortdetail';
import { useEffect, useState } from 'react';
import { UserContext } from './UserContext'
import Resort from './components/Resort';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Bucket from './components/Bucket';


function App() {


  const [serverData, setServerData] = useState([])
  const [resortsData, setResortsData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [bucket, setBucket] = useState(0)
  const [addedResorts, setAddedResorts] = useState([])



  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setServerData(data)
        setResortsData(data)
      })
  }, [])


  const handleFilterByTitle = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue)
    if (searchValue === '') {
      if (sortedData.length === 0) {
        setResortsData(serverData)
      } else {
        setSortedData(serverData)
      }
    } else {
      const filteredData = serverData.filter((item) => item.title.toLowerCase().includes(searchValue))
      if (sortedData.length === 0) {
        setResortsData(filteredData)
      } else {
        setSortedData(filteredData)
      }
    }
  }


  const handleBySortTop = () => {
    const sorted = serverData.sort(
      (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0
    )
    setSortedData(sorted)
    setResortsData([])
  }

  const handleBySortDown = () => {
    const sorted = serverData.sort(
      (p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0
    )
    setSortedData(sorted)
    setResortsData([])
  }


  const handleAddBucket = (e) => {
    console.log(e.target.value)
    const resortId = e.target.value;
    // console.log(addedResorts);
    const id = addedResorts.findIndex(item => item.id == resortId);
    if (id === -1) {
    setBucket(prev => prev + 1)
    const selectedResorts = serverData.filter(item => item.id == resortId);
    setAddedResorts(prev => [...prev, ...selectedResorts])
    console.log(addedResorts)
    }
  }


  const handleDeleteBucket = (e) => {
    const deleteId = e.target.value;
    const deletedResorts = addedResorts.filter(item => item.id != deleteId)
    setAddedResorts(deletedResorts)
    setBucket(prev => prev - 1)
  }


  return (
    <div>
      <UserContext.Provider value={{
        serverData,
        setServerData,
        resortsData,
        setResortsData,
        sortedData,
        setSortedData,
        bucket,
        setBucket,
        addedResorts,
        setAddedResorts,
        handleFilterByTitle,
        handleBySortTop,
        handleAddBucket,
        handleDeleteBucket,
        handleBySortDown,
      }}>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Resorts />} />
            <Route path='resorts/:id' element={<Resortdetail />} />
            <Route path='bucket' element={<Bucket />} />
          </Route>
        </Routes>
        {/* <Footer/> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
