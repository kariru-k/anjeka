import { Component } from '@angular/core';
import {TeamTitleComponent} from '../team-title/team-title.component';
import {TeamSectionComponent} from '../team-section/team-section.component';

@Component({
  selector: 'app-team-page',
  imports: [
    TeamTitleComponent,
    TeamSectionComponent
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent {

}
