import uploadPhoto from './5-photo-reject';
import signUpuser from './4-user-promise';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpuser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    return await Promise.allSettled([userPromise, photoPromise])
      .then((outputs) => outputs.map((output) => ({
        status: output.status,
        value: output.status === 'fulfilled' ? output.value : output.reason,
      })));
  } catch (error) {
    return [
      { status: 'rejected', value: error.toString() },
      { status: 'rejected', value: error.toString() },
    ];
  }
}
