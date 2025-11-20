import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-especializados-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cursos-especializados.page.html',
  styleUrls: ['./cursos-especializados.page.scss'],
})
export class CursosEspecializadosPage {
  cursos = [
    {
      titulo: 'ELITE VENTURE',
      subtitulo: 'Protección Especial',
      imagen: 'assets/img/elite_banner.png',
      icono: 'assets/img/elite.png',
      descripcion:
        'Programa diseñado para la protección de alto nivel en escenarios complejos, tanto en ambientes urbanos como rurales.',
      habilidades: [
        'Combate Cercano',
        'Descenso táctico',
        'Armas largas',
        'Ataque y defensa en entorno vehicular',
      ],
    },
    {
      titulo: 'HARKAY',
      subtitulo: 'Nivel Máximo (Por invitación)',
      imagen: 'assets/img/harkay_banner.png',
      icono: 'assets/img/harkay.png',
      descripcion:
        'El pináculo del entrenamiento táctico, enfocado en planeamiento, situaciones críticas y liderazgo.',
      habilidades: [
        'Planeamiento anticipado',
        'Manejo de situaciones críticas',
        'Liderazgo táctico',
        'Filosofía del "lobo": cooperación, inteligencia y dominio del entorno',
      ],
    },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      razonSocial: ['', Validators.required],
      ruc: ['', Validators.required],
      ubicacion: ['', Validators.required],
      rubro: ['', Validators.required],
      personal: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      necesidades: ['', Validators.required],
    });
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Solicitud Cursos Especializados:', this.form.value);
    alert('Formulario enviado con éxito.');
    this.form.reset();
  }
}
