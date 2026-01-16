import { depositSchema } from "@/app/dashboard/deposit-funds/form";
import { z } from "zod";

export type DepositFormValues = z.infer<typeof depositSchema>;
