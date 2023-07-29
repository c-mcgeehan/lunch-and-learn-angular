import { Injectable } from "@angular/core";
import { Game } from "../models/game";
import { of, throwError } from "rxjs";

@Injectable(
    {providedIn: 'root',}
)
export class GameLibraryService {

    private GAME_LIST : Game[] = [
        {id: 1, title: 'Diablo IV', releaseDate: new Date('2023-05-01') },
        {id: 2, title: 'Zelda: Ocarina of Time', releaseDate: new Date('1997-01-01')},
        {id: 3, title: 'Pokemon: Yellow', releaseDate: new Date('1999-01-01')},
        {id: 4, title: 'Call of Duty: Black Ops 2', releaseDate: new Date('2010-01-01')},
        {id: 5, title: 'Pong', releaseDate: new Date('1975-01-01')}
    ]

    public constructor() {

    }

    //Dummy service call to return observable instead of http request
    public getGames() {
        return of(this.GAME_LIST);
    }

    public getGameByGameId(id: number) {
        const game = this.GAME_LIST.find(g => g.id === id);
        if(game === undefined) {
            return throwError(new Error('404 Game does not exist...'));
        }
        else {
            return of(game);
        }
    }
}