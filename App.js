import React, { useState, useEffect } from 'react';
import List from "./components/List";
import Search from "./components/Search";
import styles from "./components/List.module.css";
import StateForSearch from "./components/StateForSearch"; 

const stories = [
    {
        title:'React',
        url:'https://reactjs.org/',
        author:'Jordan',
        num_Comment: 3,
        points: 4,
        objectID: 0,
    },
    {
        title:'Redux',
        url:'https://redux.js.org/',
        author:'Andrew',
        num_Comment: 2,
        points: 5,
        objectID: 1,
    },
    {
      title: "Karma",
      url: "https://redux.js.org/",
      author: "Sadhguru",
      num_Comment: 3,
      points: 4,
      objectID: 2,
    },
    {
      title: "In search of lost time",
      url: "https://redux.js.org/",
      author: "Marcel Proust",
      num_Comment: 2,
      points: 5,
      objectID: 3,
    },
    {
      title: "Ulysses",
      url: "https://redux.js.org/",
      author: "James Joyce",
      num_Comment: 3,
      points: 4,
      objectID: 4,
    },
    {
      title: "100 years of solitude",
      url: "https://redux.js.org/",
      author: "Gabriel Garcia",
      num_Comment: 2,
      points: 5,
      objectID: 5,
    },
];

function App() {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("searchTerm"));
  const [filterTerm, setFilterTerm] = useState("");

    useEffect(() => {
      localStorage.setItem("searchTerm",searchTerm)
    }, [searchTerm])
    const [stories, setStories] = useState(initStories);
  
    const handleOnSearch=(e)=>{
        return(
            setSearchTerm(e.target.value)
        );
    }

    const onHandleDeleteItem = (item) => {

      const newList = stories.filter((i) => item.objectID !== i.objectID);
        setStories(newList);
    }

    const filteredStories=stories.filter((story)=>
story.title.toLowerCase().includes(searchTerm.toLowerCase())
)
  return (
    <div className={styles.container}>
      <Search searchTerm={searchTerm} onSearch={handleOnSearch} />
      <h1>Searching for: {searchTerm}</h1>
      <List stories={filteredStories} handleDeleteItem={onHandleDeleteItem} ></List>
    </div>
  );
}

export default App;