import { Routes } from '@angular/router';
import { AsyncDemoComponent } from './pages/async-demo/async-demo.component';
import { CallApiComponent } from './pages/call-api/call-api.component';
import { PostputComponent } from './pages/postput/postput.component';
import { UploadComponent } from './pages/upload/upload.component';

export const routes: Routes = [
  {
    path: '',
    component: AsyncDemoComponent,
  },
  {
    path: 'callapi',
    component: CallApiComponent,
  },
  {
    path: 'postput',
    component: PostputComponent,
  },
  {
    path: 'upload',
    component: UploadComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
