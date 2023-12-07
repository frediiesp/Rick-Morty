import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rickandmorty.service';

@Component({
    selector: 'character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})

export class CharacterComponent implements OnInit {
    characters: any[] = [];

    constructor(private rickAndMortyService: RickAndMortyService) { }

    ngOnInit(): void {
        this.rickAndMortyService.getCharacters().subscribe(data => {
            this.characters = data.results;
        });
    }
} 