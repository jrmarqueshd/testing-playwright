import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from './button';

test('should work', async ({ mount }) => {
	const component = await mount(<Button>teste</Button>);
	expect(component).toContainText('teste');
});

test('should work too', async ({ mount }) => {
	const component = await mount(<Button>teste</Button>);
  expect(component).toHaveAttribute('type', 'submit');
});

test('should work also', async ({ mount }) => {
	const component = await mount(<Button type="button">teste</Button>);
  expect(component).toHaveAttribute('type', 'button');
});
