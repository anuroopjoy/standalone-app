import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AdditionalInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
