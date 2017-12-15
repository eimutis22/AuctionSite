import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable}     from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import {PlaceAdPageComponent} from './place-ad-page.component';
import {Movie} from './movie';

import {IMovie} from './IMovie';


@Injectable()
export class MovieService {
    // Url string to search by imdb title (t=)
    private urlBase: string = "http://www.omdbapi.com/?apikey=60d77be4&plot=long&t=";
    // Url string to search by imdb ID (i=)
    private urlID: string = "http://www.omdbapi.com/?apikey=60d77be4&plot=long&i=";

    constructor(private http: Http) {}  
       
    // Function used to search by imdb title
    getMovies(x): Observable < Movie > {  
        return this.http.get(this.urlBase + x).map((response: Response) => {  
            return <Movie > response.json()  
        }).catch(this.handleError);  
    }  

    // Function used to search by imdbID
    getMovieID(id): Observable < Movie > {  
        return this.http.get(this.urlID + id).map((response: Response) => {  
            return <Movie > response.json()  
        }).catch(this.handleError);  
    }  
    
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    } 

}