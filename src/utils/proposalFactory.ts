import { IProposal } from "../types/IProposal";
import { faker } from '@faker-js/faker';
export default function proposalFactory(totalProposals: number = 1): undefined | IProposal[] {
  if (!totalProposals) return;
  const proposals = []
  const numberRange = {
    min: 1000,
    max: 9999
  }
  for (let i = 1; i <= totalProposals; i++) {
    const newProposal: IProposal = {
      code: faker.string.uuid(),
      city: faker.location.city(),
      contact: `(71) 9${faker.number.int(numberRange)}-${faker.number.int(numberRange)}`,
      proposer: faker.company.name(), value: Number(faker.commerce.price())
    }
    proposals.push(newProposal)
  }
  return proposals
}