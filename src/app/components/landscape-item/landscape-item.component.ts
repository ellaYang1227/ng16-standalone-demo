import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LandscapesService } from 'src/app/services/landscapes.service';

@Component({
  selector: 'app-landscape-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landscape-item.component.html',
  styleUrls: ['./landscape-item.component.scss']
})
export class LandscapeItemComponent {
  // 注入 ActivatedRoute
  route = inject(ActivatedRoute);
  // 注入 LandscapesService
  landscapesService = inject(LandscapesService);
  landscape!: any;

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) =>
      this.landscapesService.getLandscape(id).subscribe(data => this.landscape = data)
    );
  }
}
