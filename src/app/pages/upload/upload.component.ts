import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [MatButtonModule, HttpClientModule, MatIconModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent {
  private http = inject(HttpClient);

  img = '';
  imageData?: File;
  url = '';

  onFileSelected($event: Event) {
    const file = ($event.target as HTMLInputElement).files?.item(0);
    if (!file) return;

    this.imageData = file;

    // update this.img to show src data or url
    this.img = URL.createObjectURL(file);
  }

  upload() {
    const url = `https://202.28.34.197/tripbooking/upload`;

    const file = this.imageData;
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    this.http.post(url, formData).subscribe((res: any) => {
      console.log(res);
      this.url = `https://202.28.34.197${res.filename}`;
    });
  }
}
