import { ClubModel } from "../models/club-models";
import fs from "fs/promises";


export const findAllClubs = async(): Promise<ClubModel[]> =>{
  const data = await fs.readFile("./src/database/clubs.json", "utf8");
  const clubs = JSON.parse(data) as ClubModel[];
  return clubs;
}