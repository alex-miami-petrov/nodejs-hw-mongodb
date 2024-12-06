// import createHttpError from 'http-errors';
import { SORT_ORDER } from '../constans/index.js';
import Contact from '../models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

const clearFilter = (filter) => {
  return Object.fromEntries(
    Object.entries(filter).filter(([_, value]) => value !== undefined),
  );
};

const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
  // userId, - тоді прибираємо clearFilter
}) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const cleanedFilter = clearFilter(filter);

  const contactsQuery = Contact.find(cleanedFilter);

  if (cleanedFilter.name) {
    contactsQuery.where('name').regex(new RegExp(cleanedFilter.name, 'i'));
  }
  if (cleanedFilter.phoneNumber) {
    contactsQuery
      .where('phoneNumber')
      .regex(new RegExp(cleanedFilter.phoneNumber));
  }
  if (cleanedFilter.email) {
    contactsQuery.where('email').regex(new RegExp(cleanedFilter.email, 'i'));
  }
  if (cleanedFilter.isFavourite !== undefined) {
    contactsQuery.where('isFavourite').equals(cleanedFilter.isFavourite);
  }
  if (cleanedFilter.contactType) {
    contactsQuery.where('contactType').equals(cleanedFilter.contactType);
  }

  // if (contact.userId.toString() !== req.user.id.toString()) {
  //   throw new createHttpError.Forbidden("Contact forbidden")
  // }

  const [contactsCount, contacts] = await Promise.all([
    Contact.find().merge(contactsQuery).countDocuments(),
    contactsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(contactsCount, perPage, page);
  return {
    data: contacts,
    ...paginationData,
  };
};

const getContactById = async (contactId, userId) => {
  const contact = await Contact.findOne({ _id: contactId, userId });
  return contact;
};

const addContact = async (contactData) => {
  const newContact = await Contact.create(contactData);
  return newContact;
};

const updateContact = async (contactId, payload, userId) => {
  const updatedContact = await Contact.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    {
      new: true,
      runValidators: true,
    },
  );

  return updatedContact;
};

const deleteContact = async (contactId, userId) => {
  const contact = await Contact.findOneAndDelete({ _id: contactId, userId });
  return contact;
};

export default {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
};
