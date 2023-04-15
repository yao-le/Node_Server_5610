import publishersModel from "../models/publishers-model.js";

export const createPublisher = (publisher) => publishersModel.create(publisher);
export const updatePublisher = (pid, publisher) => publishersModel.updateOne({_id: pid}, publisher);
export const deletePublisher = (pid) => publishersModel.deleteOne({_id: pid});
export const findAllPublishers = () => publishersModel.find();
export const findPublishersById = (pid) => publishersModel.findById(pid);
export const findPublisherByName = (name) => publishersModel.findOne({name});
export const findPublisherByCredentials = (name, password) => publishersModel.findOne({name, password});
