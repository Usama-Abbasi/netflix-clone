import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
       <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
       <Row title="Trending" fetchUrl={requests.fetchTrending}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies}/>
       <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Documantries" fetchUrl={requests.fetchDocumantries}/>
       <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
