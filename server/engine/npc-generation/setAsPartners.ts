import { variables } from "../global"
import { NPC } from "./npc"

export function setAsPartners(npc1: NPC, npc2: NPC) {
  const { npcs } = variables

  const npcsToClean = new Set<NPC>()

  /* NPC1 already had a valid partner; mark it for removal */
  if (npc1.partnerID && npcs[npc1.partnerID]) {
    npcsToClean.add(npcs[npc1.partnerID])
  }

  /* NPC2 already had a valid partner; mark it for removal */
  if (npc2.partnerID && npcs[npc2.partnerID]) {
    npcsToClean.add(npcs[npc2.partnerID])
  }

  /* Remove "old" partners first */
  for (const npc of npcsToClean) {
    npc.partnerID = ``
  }

  /* Link the two */
  npc1.partnerID = npc2.key
  npc2.partnerID = npc1.key
}
