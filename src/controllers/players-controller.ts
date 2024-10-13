import { Request, Response } from "express";
import * as service from "../services/players-service";
import { StatisticsModel } from "../models/statistics-models";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);  
};

export const getPlayerById = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerByIdService(parseInt(req.params.id));
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await service.createPlayerService(bodyValue);
  if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}

export const deletePlayer = async (req: Request, res: Response) => {
  const httpResponse = await service.deletePlayerService(parseInt(req.params.id));
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
  const bodyValue: StatisticsModel = req.body;
  const httpResponse = await service.updatePlayerService(parseInt(req.params.id), bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}
