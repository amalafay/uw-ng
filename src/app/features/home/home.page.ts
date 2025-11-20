import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('heroVideo', { static: false }) heroVideo?: ElementRef<HTMLVideoElement>;

  audioEnabled = false; // por defecto sin sonido

  ngAfterViewInit(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    video.muted = true;
    video.loop = true;

    video.play().catch(() => {
      // Si el navegador bloquea el autoplay, al menos no rompe nada
      console.warn('Autoplay bloqueado por el navegador');
    });
  }

  toggleAudio(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    this.audioEnabled = !this.audioEnabled;

    if (this.audioEnabled) {
      video.muted = false;
      video.volume = 1;
    } else {
      video.muted = true;
    }
  }
}
