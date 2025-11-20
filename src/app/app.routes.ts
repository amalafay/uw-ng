import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage) },
  {
    path: 'sobre-nosotros',
    loadComponent: () =>
      import('./features/sobre-nosotros/sobre-nosotros.page').then((m) => m.SobreNosotrosPage),
  },
  {
    path: 'certificacion-trc',
    loadComponent: () =>
      import('./features/certificacion-trc/certificacion-trc.page').then(
        (m) => m.CertificacionTrcPage
      ),
  },
  {
    path: 'programa-escolta',
    loadComponent: () =>
      import('./features/programa-escolta/programa-escolta.page').then(
        (m) => m.ProgramaEscoltaPage
      ),
  },
  {
    path: 'defensa-urbana',
    loadComponent: () =>
      import('./features/defensa-urbana/defensa-urbana.page').then((m) => m.DefensaUrbanaPage),
  },
  {
    path: 'manejo-tactico',
    loadComponent: () =>
      import('./features/manejo-tactico/manejo-tactico.page').then((m) => m.ManejoTacticoPage),
  },
  {
    path: 'cursos-especializados',
    loadComponent: () =>
      import('./features/cursos-especializados/cursos-especializados.page').then(
        (m) => m.CursosEspecializadosPage
      ),
  },

  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog-list.page').then((m) => m.BlogListPage),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./features/blog/blog-detail.page').then((m) => m.BlogDetailPage),
  },

  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto.page').then((m) => m.ContactoPage),
  },
  { path: '**', redirectTo: '' },
];
