import { z } from "zod";

export const eventFormSchema = z.object({
	title: z.string().min(3, 'Must be at least 3 chars'),
    description: z.string().min(3, 'Must be at least 3 chars').max(400, 'Must be less then 400 chars'),
    location: z.string().min(3, 'Must be at least 3 chars').max(400, 'Must be less then 400 chars'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()

});