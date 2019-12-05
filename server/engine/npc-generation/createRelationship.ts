import { variables } from "../global"
import { Town } from "../town/town"
import { NPC } from "./npc"

export function createRelationship(town: Town, source: NPC | string, target: NPC | string, sourceType, targetType) {
  if (typeof source === `string`) {
    source = variables.npcs[source]
  }

  if (typeof target === `string`) {
    target = variables.npcs[target]
  }

  const npcsToClean: NPC[] = []

  const sourceRelationship = source.relationships[target.key]
  const targetRelationship = target.relationships[source.key]

  if (sourceRelationship && variables.npcs[sourceRelationship]) {
    /* source already had a valid partner; mark it for removal */
    npcsToClean.push(variables.npcs[target.key])
  }

  if (targetRelationship && variables.npcs[targetRelationship]) {
    /* target already had a valid partner; mark it for removal */
    npcsToClean.push(variables.npcs[targetRelationship])
  }

  /* Remove "old" partners first */
  for (const npc of npcsToClean) {
    delete npc.relationships[source.key]
    delete npc.relationships[target.key]
  }

  /* Link the two */
  source.relationships[target.key] = sourceType
  target.relationships[source.key] = targetType
}
