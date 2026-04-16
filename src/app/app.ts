import { Component, computed, signal } from '@angular/core';
import { Tarjeta } from './tarjeta/tarjeta';
import { LucideLightbulb, LucideLightbulbOff, LucideDynamicIcon } from '@lucide/angular';
import { FormsModule } from '@angular/forms';

interface MisCards {
  titulo: string;
  descripcion: string;
  imagenURL: string;
  altImagen: string;
  botonDeshabilitado: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Tarjeta, LucideDynamicIcon, FormsModule],
})
export class App {
  listaCards: MisCards[] = [
    {
      titulo: 'Silly Cat',
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagenURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQM-9y6xTLwVDqrAkCxWV_dn-oqbYjmn0bg&s',
      altImagen: 'Silly Cat',
      botonDeshabilitado: true,
    },
    {
      titulo: 'Silly Cat',
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagenURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQM-9y6xTLwVDqrAkCxWV_dn-oqbYjmn0bg&s',
      altImagen: 'Silly Cat',
      botonDeshabilitado: false,
    },
    {
      titulo: 'Silly Cat',
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagenURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQM-9y6xTLwVDqrAkCxWV_dn-oqbYjmn0bg&s',
      altImagen: 'Silly Cat',
      botonDeshabilitado: false,
    },
  ];

  nuevoTitulo: string = '';
  nuevaDescripcion: string = '';
  nuevaImagenURL: string = '';
  nuevoAltImagen: string = '';
  nuevoBotonDeshabilitado: boolean = false;

  crearCard() {
    const nuevaCard: MisCards = {
      titulo: this.nuevoTitulo,
      descripcion: this.nuevaDescripcion,
      imagenURL: this.nuevaImagenURL,
      altImagen: this.nuevoAltImagen,
      botonDeshabilitado: this.nuevoBotonDeshabilitado,
    };
    this.listaCards.push(nuevaCard);

    this.nuevoTitulo = '';
    this.nuevaDescripcion = '';
    this.nuevaImagenURL = '';
    this.nuevoAltImagen = '';
    this.nuevoBotonDeshabilitado = false;
  }

  imagenSeleccionada: string = '';

  recibirImagenAAgrandar(url: string) {
    this.imagenSeleccionada = url;

    const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  protected readonly model = signal<boolean>(true);
  protected readonly icon = computed(() => (this.model() ? LucideLightbulb : LucideLightbulbOff));

  cambiarIcono() {
    this.model.update((value) => !value);

    const htmlElement = document.documentElement;
    if (this.model()) {
      htmlElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
    } else {
      htmlElement.classList.add('dark');
      htmlElement.setAttribute('data-theme', 'dark');
    }
  }
}
