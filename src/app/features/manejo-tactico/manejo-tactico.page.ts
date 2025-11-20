import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manejo-tactico-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './manejo-tactico.page.html',
  styleUrls: ['./manejo-tactico.page.scss'],
})
export class ManejoTacticoPage {
  form: FormGroup;

  // Data de los cards
  cards = [
    {
      titulo: 'NIVEL I',
      tema: 'Fundamentos Defensivos',
      descripcion: 'Técnicas esenciales de control vehicular y reacción inicial ante amenazas.',
      habilidades: [
        'Posición y control del vehículo en situaciones de riesgo',
        'Lectura táctica del entorno inmediato',
        'Principios defensivos de conducción',
        'Uso adecuado de frenado y aceleración en maniobras evasivas',
      ],
    },
    {
      titulo: 'MANEJO TÁCTICO II',
      tema: 'Conducción bajo presión',
      descripcion:
        'Entrenamiento intensivo para reaccionar frente a amenazas en movimiento y hostigamiento vehicular.',
      habilidades: [
        'Reacción ante persecuciones y bloqueos',
        'Conducción evasiva avanzada',
        'Gestión del estrés al volante',
        'Recuperación de control ante pérdida de tracción',
      ],
    },
    {
      titulo: 'MANEJO TÁCTICO III',
      tema: 'Operaciones tácticas en equipo',
      descripcion:
        'Coordinación de convoy, protección de autoridades y ruptura de emboscadas en equipo.',
      habilidades: [
        'Formaciones vehiculares defensivas',
        'Comunicación táctica entre conductores y escoltas',
        'Ruptura de bloqueos y emboscadas',
        'Planeamiento de rutas seguras y alternativas',
      ],
    },
    {
      titulo: 'CURSO TÁCTICO 4X4',
      tema: 'Sector Minero y Zonas Remotas',
      descripcion:
        'Entrenamiento especializado para terrenos exigentes, pistas no preparadas y entornos de alto riesgo.',
      habilidades: [
        'Manejo 4x4 en pendientes, barro y superficies inestables',
        'Resolución de atascos y rescate de vehículos',
        'Conducción táctica en zonas remotas',
        'Simulaciones de evacuación y respuesta a incidentes',
      ],
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      nivel: ['', [Validators.required]],
    });
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Aquí luego podemos conectar con API / Firebase / EmailJS
    console.log('Solicitud Manejo Táctico:', this.form.value);
    alert('Solicitud enviada correctamente.');

    this.form.reset();
  }
}
