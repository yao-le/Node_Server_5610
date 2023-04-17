import collectionsModel from "../models/collections-model.js";

export const createCollection = (collection) => collectionsModel.create(collection)
export const getAllCollectionsByViewer = (viewerId) => collectionsModel.find({viewer: viewerId})
export const deleteCollectionById = (collectionId) => collectionsModel.deleteOne({_id: collectionId})
export const updateCollectionById = (collectionId, collection) =>
    collectionsModel.updateOne({_id: collectionId}, {$set:collection})


// TODO: how to get all tracks within a viewer's one collection

