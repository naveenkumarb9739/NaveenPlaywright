
import { test, expect } from '@playwright/test';
import PracticeForm from '../../../POM/qapractice/form';
import testData from '../../../test-data/qapractice-form.json';

test('submits the practice form', async ({ page }) => {
    const practiceForm = new PracticeForm(page);

    await practiceForm.navigate();
    await practiceForm.openForm();
    await practiceForm.fillForm(testData);
    await practiceForm.submit();

    await expect(practiceForm.goBackToFormButton).toBeVisible();
});