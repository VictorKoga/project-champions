import { PlayerModel } from "../models/player-models";
import { StatisticsModel } from "../models/statistics-models";

const database: PlayerModel[] = [
  {
   id: 1,
   name: "Lionel Messi",
   club: "Inter Miami",
   nationality: "Argentina",
   position: "Forward",
   statistics: 
    {
      overall: 93,
      pace: 85,
      shooting: 92,
      passing: 91,
      dribbling: 96,
      defending: 38,
      physical: 65
    }
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al-Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: 
    {
      overall: 91,
      pace: 87,
      shooting: 94,
      passing: 82,
      dribbling: 89,
      defending: 40,
      physical: 78
    }
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: 
    {
      overall: 91,
      pace: 74,
      shooting: 86,
      passing: 94,
      dribbling: 88,
      defending: 60,
      physical: 75
    }
  },
  {
    id: 4,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: 
    {
      overall: 90,
      pace: 76,
      shooting: 60,
      passing: 72,
      dribbling: 68,
      defending: 91,
      physical: 86
    }
  },
  {
    id: 5,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: 
    {
      overall: 92,
      pace: 97,
      shooting: 88,
      passing: 80,
      dribbling: 92,
      defending: 39,
      physical: 78
    }
  },
  {
    id: 6,
    name: "Neymar Jr",
    club: "Al-Hilal",
    nationality: "Brazil",
    position: "Forward",
    statistics: 
    {
      overall: 91,
      pace: 88,
      shooting: 85,
      passing: 87,
      dribbling: 94,
      defending: 32,
      physical: 60
    }
  },
  {
    id: 7,
    name: "Luka Modrić",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    statistics: 
    {
      overall: 89,
      pace: 70,
      shooting: 75,
      passing: 90,
      dribbling: 88,
      defending: 74,
      physical: 65
    }
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: 
    {
      overall: 92,
      pace: 77,
      shooting: 94,
      passing: 81,
      dribbling: 85,
      defending: 42,
      physical: 82
    }
  },
  {
    id: 9,
    name: "Joshua Kimmich",
    club: "Bayern Munich",
    nationality: "Germany",
    position: "Midfielder",
    statistics: 
      {
        overall: 88,
        pace: 70,
        shooting: 70,
        passing: 88,
        dribbling: 84,
        defending: 82,
        physical: 75
      }
    },
    {
      id: 10,
      name: "Mohamed Salah",
      club: "Liverpool",
      nationality: "Egypt",
      position: "Forward",
      statistics: 
      {
        overall: 91,
        pace: 93,
        shooting: 86,
        passing: 81,
        dribbling: 90,
        defending: 45,
        physical: 75
      }
    }
]

export const findAllPlayers = async(): Promise<PlayerModel[]> =>{
  return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel): Promise<PlayerModel | undefined> => {
  database.push(player);
  return player;
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id);
  if(index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  const playerIndex = database.findIndex(player => player.id === id)
  if(playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }
  return database[playerIndex];
}