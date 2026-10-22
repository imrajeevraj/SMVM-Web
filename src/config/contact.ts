import identity from './legal.json';

export const contactConfig = {
  email: identity.supportEmail.value,
  submissionEndpoint: null as string | null,
} as const;

