import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Lista de Usuarios</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list *ngIf="!isLoading && !error">
        <ion-item *ngFor="let user of users">
          <ion-label>
          <h2> ID: {{ user.id }}</h2>
          <p>Nombre: {{ user.name }}</p>
          <p>Email: {{ user.email }}</p>
        </ion-label>
        </ion-item>
      </ion-list>

      <div *ngIf="isLoading">
        <ion-spinner></ion-spinner> Cargando usuarios...
      </div>

      <div *ngIf="error">
        {{ error }}
      </div>
    </ion-content>
  `
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los usuarios.';
        this.isLoading = false;
      }
    });
  }
}
