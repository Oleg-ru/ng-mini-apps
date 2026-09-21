import { CanDeactivateFn } from '@angular/router';

export const unsavedChangesGuard: CanDeactivateFn<any> = (
  component
) => {
  if (component.hasUnsavedChanges) {
    return confirm('Есть несохраненные изменения. Уверены что хотите выйти без сохранения?')
  }
  return true;
};
