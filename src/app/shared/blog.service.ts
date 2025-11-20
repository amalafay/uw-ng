// src/app/shared/blog.service.ts
import { Injectable } from '@angular/core';

export interface BlogPost {
  id: string; // identificador interno
  slug: string; // para la URL
  title: string;
  author: string;
  date: string; // ISO: '2024-08-13'
  summary: string; // resumen para la card
  content: string; // texto completo (por ahora simple)
  image: string; // ruta de imagen principal
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // 🔥 Aquí actúa como "CMS" local. Luego podemos reemplazar esto
  // por Firebase / API sin cambiar los componentes.
  private posts: BlogPost[] = [
    {
      id: 'perfil-wilder',
      slug: 'perfil-wilder-montedoro',
      title: 'PERFIL WILDER MONTEDORO',
      author: 'Wilder Montedoro del Águila',
      date: '2024-08-13',
      summary:
        'Profesional de Operaciones Especiales con más de 25 años de experiencia en el sector de la seguridad, tanto en entornos militares como civiles...',
      content: `
Profesional de Operaciones Especiales con más de 25 años de experiencia en el sector de la seguridad, tanto en entornos militares como civiles. Reconocido por su capacidad de liderazgo, manejo de situaciones bajo presión extrema y su amplia experiencia en seguridad personal, corporativa y contraterrorismo.

[Aquí continuarías con el contenido completo del perfil, párrafos largos, anécdotas, trayectoria, etc.]
      `,
      image: 'assets/img/blog/perfil-wilder.jpg',
    },
    {
      id: 'chavin-huantar',
      slug: 'chavin-de-huantar-relato-de-valor-y-sacrificio',
      title: 'CHAVÍN DE HUÁNTAR: UN RELATO DE VALOR Y SACRIFICIO',
      author: 'Wilder Roberto Montedoro Del Águila, Infante de Marina',
      date: '1997-04-21',
      summary:
        'El 16 de diciembre de 1996, el destino me tenía preparado un giro inesperado. Recién llegado de una misión en zona de emergencia...',
      content: `
El 16 de diciembre de 1996, el destino me tenía preparado un giro inesperado. Recién llegado de una misión en la zona de emergencia, me encontraba en la Plaza San Martín, ansioso por reunirme con mi familia después de tres largos meses.

[Continuación del relato de Chavín de Huántar, tal como lo tengas en tu texto original.]
      `,
      image: 'assets/img/blog/chavin-huantar.png',
    },
  ];

  getPosts(): BlogPost[] {
    // Podrías ordenar por fecha aquí si quieres
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((p) => p.slug === slug);
  }
}
