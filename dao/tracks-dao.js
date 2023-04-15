import tracksModel from "../models/tracks-model.js";

export const createTrack = (track) => tracksModel.create(track);
