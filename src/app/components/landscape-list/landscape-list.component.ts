import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandscapesService } from 'src/app/services/landscapes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landscapes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landscape-list.component.html',
  styleUrls: ['./landscape-list.component.scss']
})
export class LandscapeListComponent {
  // 注入 LandscapesService
  landscapesService = inject(LandscapesService);
  // Call 所有景點 API
  landscapes$ = this.landscapesService.getLandscapes();
}

