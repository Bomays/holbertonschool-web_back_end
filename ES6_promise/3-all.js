import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = Promise.all([uploadPhoto(), createUser()]);

  return promise
    .then((value) => console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}

/* vscode async func proposal:

import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const value = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
*/
