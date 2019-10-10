import { variables } from "../global"

export function createRelationship(town, npc, targetNPC, type, targetType) {
  console.log(`Forming a relationship.`)
  console.log(npc)
  console.log(targetNPC)

  if (typeof npc === `string`) {
    console.error(`First argument was passed a string!`)
    npc = variables.npcs[npc]
  }
  if (typeof targetNPC === `string`) {
    console.error(`Second argument was passed a string!`)
    targetNPC = variables.npcs[targetNPC]
  }

  const npcsToClean: any[] = []

  if (npc.relationships[targetNPC.key] && variables.npcs[npc.relationships[targetNPC.key]]) {
    /* npc already had a valid partner; mark it for removal */
    npcsToClean.push(variables.npcs[targetNPC.key])
  }

  if (targetNPC.relationships[npc.key] && variables.npcs[targetNPC.relationships[npc.key]]) {
    /* targetNPC already had a valid partner; mark it for removal */
    npcsToClean.push(variables.npcs[targetNPC.relationships[npc.key]])
  }

  /* Remove "old" partners first */
  for (const n of npcsToClean) {
    n.relationships[npc.key] = ``
    n.relationships[targetNPC.key] = ``
  }

  /* Link the two */
  npc.relationships[targetNPC.key] = type
  console.log(`${npc.name} is a ${type} to ${targetNPC.name}`)

  targetNPC.relationships[npc.key] = targetType
  console.log(`${targetNPC.name} is a ${targetType} to ${npc.name}`)
}
