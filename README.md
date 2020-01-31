
## Project Name

Movie/TV Info

## Project Decription

Create an app that will give the user the ability to search through movies and tv shows. The app will give you more information about the movie or tv show wonce it is searched. The app will have a search bar that can be seen on any page of the app. 

## API Snippet and Sample Data

https://api.themoviedb.org/

### From Postman

https://res.cloudinary.com/dkwosricc/image/upload/v1579878179/Screen_Shot_2020-01-24_at_10.02.35_AM_ndszcj.png


## Wireframes

https://res.cloudinary.com/dkwosricc/image/upload/v1579879378/Screen_Shot_2020-01-24_at_10.22.01_AM_pdtwlu.png

## MVP

- Call API
- Create Search Bar
- Create Movie and TV show Tabs
- Create Search Bar
- Render Data By using Search Bar


## Post MVP

- Create a Section for trending movies and tv shows
- Creaye a section that shows popular movies and shows
- Create a button that shows a random movie or tv show



## Components

https://res.cloudinary.com/dkwosricc/image/upload/v1579825495/Screen_Shot_2020-01-23_at_7.22.31_PM_j5rtfx.png

## Component	Description	Type
- Header - Contains nav bar and title.
- Nav - Contains routes for tv shows pages and movie pages.
- Main - Contains the Seach, Movies and TV Shows. The states will be held here 
- Search - Contains the user input 
- Button - Contains the onclick to compare the search bar to the movies in the database.
- Movies - Shows the layout of the movie that is searched. When going to the page it has a random generation of a movie.
- Tv Show Shows the layout of the TV show that is searched. When going to the page it has a random generation of a tv show.
- Movie List - Maps out the list of movies. Can be clicked as links and will take you to the Movie page.
- Tv List - Maps out the list of Tv Shows. Can be clicked as links and will take you to the Movie page.


## Priority Matrix

https://res.cloudinary.com/dkwosricc/image/upload/v1579881097/Screen_Shot_2020-01-24_at_10.51.19_AM_gfwc9e.png

## Timeframes


## Component	Priority	Estimated Time	Time Invested	Actual Time
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psudocoding | H | 2.5hrs| 2 | 2 |
| Designing | M | 3hrs| 2 | 2 |
| CSS | H | 10hrs| 10 | 10 |
| Axios Calls | H | 1hrs| 2 | 2 |
| Creating Routes | H | 2hrs| 3 | 3 |
| Appending Items to the Screen | H | 6hrs| 3 | 3 |
| Animations | H | 2hrs| 0 | 0 |
| Testing & Debugging | H | 6hrs| 15 | 15 |
| Total | H | 32.5hrs| 37 | 37 |
Project Schedule


## Day	Deliverable	Status

|  Day | Deliverable | Status
|---|---|---|
|Jan 24th|Project Pitch / Pseudocode /Import React / Build-out Components /Make Sure Api Calls Are Working|Complete
|Jan 27th|Build out Functionality / Routes|Complete
|Jan 28th|MVP / Start CSS|Complete
|Jan 29th|CSS /	Start Post MVP|Complete
|Jan 30th|Complete Post MVP|Complete
|Jan 31st|Present|Complete

## Additional Libraries
- React Router Dom
- Axios
- moment

## Issues and Resolutions
- Rendering movies to a list if there is more than one movie with the same title.
- Encountered a bug where my return statement didnt return anyhting. fixed the bug by re-writing the commponenet.
- Encountered a problem where my 

## Code Snippet

if(personAndMovies && personAndMovies) {
        const {deathday, name, profile_path, birthday, biography} = personAndMovies
    return (
        
        <div>
            <h1>{name}</h1>
            <div className="movie-details">
            <div className="details-picture">
            {profile_path ? <img className="top-picture" src={`https://image.tmdb.org/t/p/${characterSize}${profile_path}`} alt="" /> : <img className="top-picture" src="/ni4x6.png" alt=""/>}
            </div>
            <div>
            <h3>Birthdate: {moment(birthday).format('MMMM DD, YYYY')}</h3>
            {deathday ?  <span>DeathDay: { moment(deathday).format('MMMM DD, YYYY')}</span> : <p></p>}
            <h3>Biography:</h3>
            <p className="biography">{biography}</p>
            </div>
            </div>

            <div className="movies-and-shows">
                <div className="shown-movies">
                <h1>Movies: </h1>
                {personAndMovies.movie_credits.cast.map((movie, index ) => (
                <div key={index}>
                    <Link className="single-movie" key={index} to = {`/movie/details/${movie.id}`}>
                {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`} alt="" /> : <img src="/ni2x3.png" />}
                    <h3>{movie.title}</h3>
                </Link>
                </div>
           ))}

                </div>
                <div className="shown-shows">
                <h1>Shows:</h1>
                {personAndMovies.tv_credits.cast.map((show, index ) => (
                <div key={index}>
                    <Link className="single-show" key={index} to = {`/tv/details/${show.id}`}>
                {show.poster_path ? <img src={`https://image.tmdb.org/t/p/${posterSize}${show.poster_path}`} alt="" /> : <img src="/ni2x3.png" />}
                    <h3>{show.name}</h3>
                </Link>
                </div>
           ))}

           </div>
           </div>
        </div>
    )
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
}

## Change Log
- Changed the component stucture to make the seach bar only be seen from the seach screens
- Added the component for the People and People details
- Connected the people to show movies and tv shows with links
- Connected movies and tv shows to have links for casts


