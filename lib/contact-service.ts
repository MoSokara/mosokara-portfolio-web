import type { ServiceId } from "@/data/services";

export const CONTACT_SERVICE_EVENT = "portfolio:contact-service";

export function requestContactService(serviceId: ServiceId) {
  window.dispatchEvent(
    new CustomEvent<ServiceId>(CONTACT_SERVICE_EVENT, {
      detail: serviceId,
    }),
  );
}
