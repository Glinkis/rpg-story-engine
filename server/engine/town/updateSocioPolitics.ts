import { townData } from "./townData"
import { Town } from "./town"

export function updateSocioPolitics(town: Town) {
  const economicPairs = {
    feudalist: `feudalism`,
    capitalist: `capitalism`,
    syndicalist: `syndicalism`,
    primitivist: `primitivism`,
    communist: `communism`,
  }

  const politicalIdeologyPairs = {
    autocratic: `autocracy`,
    meritocratic: `meritocracy`,
    democratic: `democracy`,
    kleptocratic: `kleptocracy`,
    magocratic: `magocracy`,
    militocratic: `militocracy`,
    oligarchic: `oligarchy`,
    pedocratic: `pedocracy`,
    theocratic: `theocracy`,
    technocratic: `technocracy`,
  }

  const economic = townData.economicIdeology[town.economicIdeology]
  const political = townData.politicalIdeology[town.politicalIdeology]

  if (town.economicIdeologyIST !== economic.descriptors.economicIdeologyIST) {
    town.economicIdeology = economicPairs[town.economicIdeologyIST]
  }

  if (town.politicalIdeologyIC !== political.data.politicalIdeologyIC) {
    town.politicalIdeology = politicalIdeologyPairs[town.politicalIdeologyIC]
  }

  return {
    ...town,
    ...economic.descriptors,
    ...political.data,
  }
}
