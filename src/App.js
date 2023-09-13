import React, { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=507a6718aec61aa15afe37eafc5071a0"
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=507a6718aec61aa15afe37eafc5071a0&query"

function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e)=> {
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=507a6718aec61aa15afe37eafc5071a0&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  // update value in the form
  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Movie App</Navbar.Brand>
        <Navbar.Brand href="/home">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
        </Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav className="me-auto my-2 my-lg-3" style={{maxHeight:'100px'}} navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} >
              <FormControl 
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query} onChange={changeHandler}
              >
              </FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
      <div>
        {movies.length > 0 ?(
          <div className="container">
            <div className="grid">
              {movies.map((movieReq)=>  
              <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
          </div>
        ):(
          <h2>Sorry, No Movies Found!</h2>
        )} 
      </div>
    </>
  );
}

export default App;