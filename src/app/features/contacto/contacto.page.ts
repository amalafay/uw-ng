import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage {
  form: FormGroup;

  cursos = [
    'Programa Escolta',
    'Defensa Urbana',
    'Manejo Táctico',
    'Cursos Especializados',
    'Certificación TRC',
    'Información de Interés',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      curso: ['', Validators.required],
      documento: ['', Validators.required],
      autorizado: [false, Validators.requiredTrue],
    });
  }

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert('Completa todos los campos correctamente.');
      return;
    }

    const { curso, documento } = this.form.value;

    const mailto = `mailto:absalob.malafay@gmail.com?subject=Solicitud%20de%20Verificación%20de%20Elegibilidad&body=Curso:%20${encodeURIComponent(
      curso
    )}%0D%0ADocumento:%20${encodeURIComponent(documento)}`;

    window.location.href = mailto;

    this.form.reset();
  }
}
