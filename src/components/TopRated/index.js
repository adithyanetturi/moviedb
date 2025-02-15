import { Component } from "react";
import Header from "../Header";
import PopularMovieItem from "../PopularMovieItem";
import "./index.css"

class TopRated extends Component{
    state={topRatedMoviesList:[]}

    async componentDidMount(){
        const apiUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=f2b245934855956f8a29e666a7b6ceb1&language=en-US&page=1"
        const options={
            method:"GET"
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        const filteredData=data.results.map((each)=>({
            "adult":each.adult,
            "backdropPath":each.backdrop_path,
            "genreIds":each.genre_ids,
            "id":each.id,
            "originalLanguage":each.original_language,
            "originalTitle":each.original_title,
            "overview":each.overview,
            "popularity":each.popularity,
            "posterPath":each.poster_path,
            "releaseDate":each.release_date,
            "video":each.video,
            "voteAverage":each.vote_average,
            "voteCount":each.vote_count
        }
        ))
        this.setState({topRatedMoviesList:filteredData})
    }
    render(){
        const {topRatedMoviesList}=this.state 
        return(
            <>
            <Header/>
            <div className="home-container">
                <ul type="none" className="popular-movie-items-container">
                    {
                        topRatedMoviesList.map((each)=>(
                            <PopularMovieItem popularItem={each} key={each.id}/>
                        ))
                    }
                </ul>
            </div>
            </>
           
        )
    }
}

export default TopRated 
