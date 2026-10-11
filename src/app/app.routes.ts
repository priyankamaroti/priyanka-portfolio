import { Routes } from '@angular/router';
import { Overview } from './overview/overview';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Education } from './education/education';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Overview },
  { path: 'overview', redirectTo: '', pathMatch: 'full' },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'education', component: Education },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
