import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hub-profile-experience',
  templateUrl: './hub-profile-experience.component.html',
  styleUrls: ['./hub-profile-experience.component.scss']
})
export class HubProfileExperienceComponent implements OnInit {
  @Input() a!: number;
  @Input() b!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
