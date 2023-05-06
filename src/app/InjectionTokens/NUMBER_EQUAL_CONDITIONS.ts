import { InjectionToken } from "@angular/core";
import { INumberEqualCondition } from "../NumberEqualModule/ApplicationCore/Services.Abstractions/INumberEqualCondition";

export const NUMBER_EQUAL_CONDITIONS = new InjectionToken<INumberEqualCondition[]>('NumberEqualConditions');