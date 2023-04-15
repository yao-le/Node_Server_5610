import collectionsModel from "../models/collections-model.js";

export const createCollection = (collection) => collectionsModel.create(collection)
export const getAllCollectionsByViewer = (viewerId) => collectionsModel.find({viewer: viewerId})
export const deleteCollection = (collectionId) => collectionsModel.deleteOne({_id: collectionId})
// TODO: how to get all tracks within a viewer's one collection

