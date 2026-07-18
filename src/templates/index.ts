import type { BusinessType } from "@/types/business";
import type { Template } from "@/types/template";
import { hvacTemplate } from "./hvac";

export const templates: Record<BusinessType, Template> = {
    HVAC: hvacTemplate,
    GARAGE: hvacTemplate,
    DENTIST: hvacTemplate,
    RESTAURANT: hvacTemplate,
};