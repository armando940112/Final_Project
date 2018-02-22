import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../user.interface';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() userImage: string;
  imageUrl = '';
  constructor() { }

  ngOnInit() {
    this.imageUrl = this.userImage !== null ? this.userImage : './assets/unknown.png';
  }
}
