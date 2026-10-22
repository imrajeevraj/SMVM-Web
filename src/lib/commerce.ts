import identity from '../config/legal.json';

// A static build has no payment service. Browser state and URL parameters
// must never enable checkout or constitute proof of payment.
export function checkoutReadiness() {
  return {
    enabled: false as const,
    blockers: [
      'Secure payment service and durable order storage are not implemented.',
      `Merchant identity: ${identity.merchantLegalName}.`,
      `Support email: ${identity.supportEmail.status}.`,
      `Policy approval: ${identity.legalApproval}.`,
      'Product prices, taxes, license addenda and delivery terms require verification.',
      'Merchant onboarding, supported Instamojo API, sandbox reconciliation and release approval are outstanding.',
    ],
  };
}
