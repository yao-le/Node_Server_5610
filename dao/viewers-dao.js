import viewersModel from "../models/viewers-model.js";

export const createViewer = (viewer) => viewersModel.create(viewer);
export const updateViewer = (vid, viewer) => viewersModel.updateOne({_id: vid}, viewer);
export const deleteViewer = (vid) => viewersModel.deleteOne({_id: vid});
export const findViewerByName = (name) => viewersModel.find({name});
export const findViewerByCredentials = (name, password) => viewersModel.find({name, password});
export const findAllViewers = () => viewersModel.find();