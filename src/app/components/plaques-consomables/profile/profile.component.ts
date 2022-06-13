import {Component, Input, OnInit} from '@angular/core';
import {AuthUserService} from "../../../../services/auth-user.service";
import {environment} from "../../../../environments/environment";
import {Validators} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: any;

  constructor(private authService:AuthUserService,
              private pcService:PlaquesConsommablesService) { }

  ngOnInit(): void {
  }

}
