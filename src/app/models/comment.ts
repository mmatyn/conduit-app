import { profile } from "./profile"

export type comment = {
    id: number,
    createdAt: Date,
    updatedAd: Date,
    body: string,
    author: profile,
}