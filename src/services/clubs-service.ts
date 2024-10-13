import * as httpResponse from "../utils/http-helper";
import * as clubRepository from "../repositories/clubs-repository";


export const getClubsService = async () => {
  const data = await clubRepository.findAllClubs()
  const response = httpResponse.ok(data);
  return response;
}