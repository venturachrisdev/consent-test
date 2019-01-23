import ItemEntity from 'src/core/entities/ItemEntity';

export const joinConsents = (consents: ItemEntity[]) => {
  const texts = consents.map(consent => consent.text);
  return texts.join(', ');
};
